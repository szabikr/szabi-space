## Refactoring

### User Input file Parser

The application has to contain a **parser** that takes a user input file such as the one below and transforms it into Lists of DataClasses. Currently, we care about two of these DataClasses: `Activity` and `JournalEntry`.

User Input File Example

```txt
10 Aug
developing my habit tracker; Career | just built a new feature
walk; Health & Fitness | the weather was exceptionally good today
talk to a friend; Friendship
journal:
Had a great day today.
Glad that I'm recording my habits.

11 Aug
cooking; Household
talk to a family member; Family

1 Sep
journal:
Today I don't feel like doing any of my activities, but I wrote something in the journal. And that's OK.
```

User Input File Format

```txt
day of month month name (short version)
activity name 1; life aspect [ | more information]
activity name 2; life aspect [ | more information]
...
activity name n; life aspect [ | more information]
journal: (optional)
Journal Entry for that day

day of month month name (short version)
...
```

DataClasses

`Activity` contains an activity that happened throughout the day. More than one activity can be done in a day. `JournalEntry` contains just the record of that entry and each day can have only one journal entry, but it is not mandatory.

```txt
Activity
- activity_name: str
- activity_date: date
- life_aspect: str
- more_info: str = None
- id: UUID = uuid4()

JournalEntry
- record: str
- record_date: date
- id: UUID = uuid4()
```

We feed the parser the contents of a `user_input` file and wait for a `List[Activity]` and a `List[JournalEntry]` in return.

### Current Solution

At the moment there are two main parser functions, `read_activities_from_user_input` and `read_journal_entries_from_user_input`, they both take in a `file_name` as a string, open the file, read the lines one by one and process the content in a primitive way. Both functions are constructing lists imperatively and if no exceptions occur, the lists will be returned as a result. In case of crucial errors, an empty list will be generated with a log message saying what went wrong.

You can check out the GitHub repository for the _Current Solution_ [here](https://github.com/szabikr/habit-tracker/tree/v1.0.0), it's under Tag `v1.0.0`.

Let's see the functions that are waiting to get refactored:

Retrieves the List of Activities from a user input file:

```python
# read_activities.py

import logging
from typing import List

import utils
from activities.activity import Activity
from activities.guess_life_aspect import guess_life_aspect

logger = logging.getLogger(__name__)

def read_activities_from_user_input(file_name: str) -> List[Activity]:
    try:
        f = open(file_name, "r", encoding="utf-8")
    except FileNotFoundError:
        logger.exception(f"File {file_name} does not exist")
        return []

    logger.info(f"Reading user input activities from {file_name}")
    activities = []

    while True:
        line = f.readline().strip()
        if not line:
            break

        try:
            activity_date = utils.extend_date(line) # extends date with the current year
        except ValueError:
            logger.exception(f"'{line}' is not a correct date format, no activities will be read from '{file_name}'")
            f.close()
            return []

        while True:
            line = f.readline().strip()
            if not line or line == "":
                break

            if line == "journal:":
                while line and line != "":
                    line = f.readline().strip()
                break

            raw_activity_props, more_info = utils.parse_activity_line(line)

            activity_props = (prop.strip() for prop in raw_activity_props.split(";"))
            activity_name = next(activity_props)
            try:
                life_aspect = next(activity_props)
            except StopIteration:
                life_aspect = guess_life_aspect(activity_name)
                if not life_aspect:
                    logger.exception(f"'{line}' is not a correct activity description, no activities will be read from '{file_name}'")
                    f.close()
                    return []

            activities.append(Activity(activity_name, activity_date, life_aspect, more_info))
    f.close()
    logger.info(f"Read {len(activities)} activity from user input file {file_name}")
    return activities
```

Retrieves the List of Journal Entries from a user input file

```python
# read_journal_entries.py

import logging
from typing import List

import utils
from journal.journal_entry import JournalEntry

logger = logging.getLogger(__name__)

def read_journal_entries_from_user_input(file_name: str) -> List[JournalEntry]:
    try:
        f = open(file_name, "r", encoding="utf-8")
    except FileNotFoundError:
        logger.exception(f"File {file_name} does not exist")
        return []

    logger.info(f"Reading user input journal entries from {file_name}")

    journal_entries = []

    while True:
        line = f.readline().strip()
        if not line:
            break

        try:
            record_date = utils.extend_date(line) # extends date with the current year
        except ValueError:
            logger.exception(f"'{line}' is not a correct date format, no journal entries will be read from '{file_name}'")
            f.close()
            return []

        while True:
            line = f.readline().strip()
            if not line or line == "":
                break

            if line == "journal:":
                record = ""
                while True:
                    line = f.readline().strip()
                    if not line or line == "":
                        break

                    if record != "":
                        raw_new_line = r"\n"
                        record = f"{record}{raw_new_line}"
                    record = f"{record}{line}"

                journal_entries.append(JournalEntry(record, record_date))
                break

    f.close()
    logger.info(f"Read {len(journal_entries)} journal entries from use input file {file_name}")
    return journal_entries
```

### Problems with the Current Solution

Firstly, I think the current solution is **not self-explanatory**, it could use some comments and additional documentation for a new developer to understand what's going on. Therefore the **maintenance is difficult**, hence the reason for the two functions, I simply didn't wanna touch the `read_activities_from_user_input` function when building the journal entry parser functionality. _"- I'm not touching that! Who knows what's gonna happen??!"_, we all know this situation.

The 3 nested `while` loops are pretty much unavoidable with this approach, however as the format of the user input files is getting more complex, the more `while` loops we will need to introduce, making the code **not scalable**.

Both functions have to change all the time because they **take on more than one responsibility**. They read the file, they must be aware of the user input file format. Even though there are 2 distinct functions for each of the DataClasses there's still a high chance that both of these functions need to change if the format of Activity or the format of JournalEntry changes.

The dependency on the file opening function and their imperative nature makes these code blocks **difficult to test**.

And finally, there's quite a lot of repetition going on, both functions have a bunch of common elements so the code **is not DRY**.

### At a first glance

Perhaps the main issue is that we are processing the file line by line. A better approach would be to load the entire contents of the file into memory. A `List[str]` representing the lines of the file would be ideal. Would like to mention that the largest file so far is `6.5KB`, if and when the file size grows so that it's not efficient to load all of it into memory then I'll consider using a generator function instead.

A function that solves this issue might look something like this:

```python
import logging
from pathlib import Path
from typing import List

logger = logging.getLogger(__name__)

def read_user_input(filename: str) -> List[str]:
    user_input_dir = "user_input"
    file = Path.cwd().joinpath(user_input_dir, filename)

    try:
        with file.open("r", encoding="utf-8") as f:
            lines = f.read().splitlines()
    except FileNotFoundError:
        logger.exception(f"File '{file}' does not exist")
        return []
    return lines
```

The next step is to identify well-defined units in the codebase that could be abstracted away into functions. At a first glance I can see 3 of these units:

1. Extract a `journal_entry`/`activity` date

```python
...
    try:
        habtis_date = utils.extend_date(line) # extends date with the current year
    except ValueError:
        logger.exception(f"'{line}' is not a correct date format, no data will be read from '{file_name}'")
        f.close()
        return []
...
```

2. Parse an `activity` line

```python
...
    raw_activity_props, more_info = utils.parse_activity_line(line)

    activity_props = (prop.strip() for prop in raw_activity_props.split(";"))
    activity_name = next(activity_props)
    try:
        life_aspect = next(activity_props)
    except StopIteration:
        life_aspect = guess_life_aspect(activity_name)
        if not life_aspect:
            logger.exception(f"'{line}' is not a correct activity description, no activities will be read from '{file_name}'")
            f.close()
            return []
...
```

3. Parse multiple lines of `journal_entry`

```python
...
    record = ""
    while True:
        line = f.readline().strip()
        if not line or line == "":
            break

        if record != "":
            raw_new_line = r"\n"
            record = f"{record}{raw_new_line}"
        record = f"{record}{line}"
...
```

### Writing new code

I took the liberty to refactor these individual code blocks, make them simpler, reduce unnecessary abstractions and define them in the context of functions. Functions that have arguments with types and a return type.

In regards to parsing the journal entry and activity lines, my initial approach was to construct the `Activity` and `JournalEntry` dataclasses within the parser functions and return them. But that would violate the single responsibility principle because now the function would have two reasons to change. One when the `user_input` file format changes and the other when the dataclass changes. So I think the best way is to return the parsed values as `Tuple` or `NamedTuple`.

1. Extract a `journal_entry`/`activity` date

Unpack the `extend_date` abstraction and catch date formatting errors.

```python
def parse_habits_date(partial_date: str) -> date:
    full_date = f"{partial_date} {date.today().year}"
    try:
        habits_date = datetime.strptime(full_date, '%d %b %Y').date()
    except ValueError:
        logger.exception(f"Partial date '{partial_date}' has incorrect format, use '%d %b', i.e. 10 Aug")
        return None
    return habits_date
```

2. Parse an `activity` line

In the case of the second code block, there is the `parse_activity_line` function call that is an unnecessary abstraction considering that the entire code block is about parsing the activity line, so its implementation can just be placed within the function. And `guess_life_aspect` is a different concern, so it shouldn't be part of the parser at all. In case the `life_aspect` is not defined in the activity line, a `None` result should be returned. A solution that declares a so-called `ParsedActivity` NamedTuple would look like this:

```python
from collections import namedtuple

ParsedActivityFields = ["activity_name", "life_aspect", "more_info"]
ParsedActivity = namedtuple("ParsedActivity", ParsedActivityFields)

def parse_activity(line: str) -> ParsedActivity:
    activity_parts = line.split("|")
    raw_activity_props = activity_parts[0]
    try:
        more_info = activity_parts[1].strip()
    except IndexError:
        more_info = None

    activity_props = raw_activity_props.split(";")
    activity_name = activity_props[0].strip()
    try:
        life_aspect = activity_props[1].strip()
    except IndexError:
        life_aspect = None

    return ParsedActivity(activity_name, life_aspect, more_info)
```

3. Parse multiple lines of `journal_entry`

Parsing the journal entry lines is a super simple operation, essentially we want to chain all the lines together separated by a new line (`\n`) character.

```python
from typing import List

def parse_journal_entry(lines: List[str]) -> str:
    return r"\n".join(lines)
```

You might think, _"Why do we even need a separate function for a one-liner?"_. The question is valid but considering that this one-liner solves a problem specific to our domain, it deserves its own function. Also if the format of the journal entry in the `user_input` file changes we know exactly which part of the codebase has to be altered.

### From a different angle

So far we've looked at how individual lines that represent activities and journal entry records are processed. Now let's take a look at how the contents of a `user_input` file will be broken down and fed into these parser functions.

After receiving the lines of a user input file from the `read_user_input` function we need to split those lines into different lists that represent individual days. The `user_input` format defines that each day must be separated by a new line, so between two days there always going to be an empty string (`""`) and that's how we know what is the delimiter.
I tried to find an already existing function in the python standard library that splits a list using an element as a delimiter, but I couldn't find one so I decided to build my own. An implementation might look something like this:

```python
from typing import List

def split_list(l: List[str], delimiter="", keep_delimiter=False) -> List[List[str]]:
    result = []
    chunk = []
    for element in l:
        if element == delimiter:
            result.append(chunk)
            chunk = []
            if keep_delimiter:
                chunk.append(element)
        else:
            chunk.append(element)
    result.append(chunk)
    return result
```

Tried to introduce the problem in generically so that it can be used for other things as well, because this is a well-defined algorithm I'm thinking to put this into a `utils` library that can be used across packages or even projects.

Now that we have a list of things that happened on each individual day, we can loop through it and parse the days. The name of this function is describing this approach very well:

```python
from typing import List
from collections import namedtuple

ParsedDayFields = ["raw_date", "raw_activities", "raw_journal_entry"]
ParsedDay = namedtuple("ParsedDay", ParsedDayFields)

def parse_day(lines: List[str]) -> ParsedDay:
    raw_date = lines[0]

    try:
        journal_entry_index = lines.index("journal:")
    except ValueError:
        journal_entry_index = None

    if journal_entry_index:
        raw_activities = lines[1:journal_entry_index]

        # we do not want to include the 'journal:' tag
        raw_journal_entry = lines[journal_entry_index + 1:len(lines)]
    else:
        raw_activities = lines[1:len(lines)]
        raw_journal_entry = None

    return ParsedDay(raw_date, raw_activities, raw_journal_entry)
```

The argument of `parse_day` is going to be the list of lines that represent that particular day and we want to return a `NamedTuple` that will contain each of the sections of a day in separate properties (date, activities, journal entry). Even though these values will hold the raw data just as it was defined in the user input file, this is a useful data transformation because now we hold the sections of the day in different variables. And calling the parsing methods will be a piece of cake.

But before we come full circle we need to define the method that builds an `Activity` and `JournalEntry` instance from the parsed data. Let's call them builder functions, although they could be dataclass constructor overloads which I'm going to consider implementing in another iteration of this development.

1. Building up the `Activity` instance

```python
import logging
from datetime import date

from activities.activity import Activity
from activities.guess_life_aspect import guess_life_aspect
from parse_activity import ParsedActivity
from exceptions import ActivityValueError

logger = logging.getLogger(__name__)

def build_activity(parsed_activity: ParsedActivity, activity_date: date) -> Activity:
    if not activity_date:
        logger.error(f"activity_date is not defined")
        raise ActivityValueError("Activity date is missing")
    life_aspect = parsed_activity.life_aspect or guess_life_aspect(parsed_activity.activity_name)
    if not life_aspect:
        logger.error(f"Parsed activity '{parsed_activity}' is missing life aspect and can't be guessed")
        raise ActivityValueError("Life aspect is missing")
    return Activity(parsed_activity.activity_name, activity_date, life_aspect, parsed_activity.more_info)
```

The code is pretty self-explanatory however, I would like to mention that in this function we deal with getting data from different places such as guessing the `life_aspect` property from previous records, given that the `activity_name` has already been used before. Also, in this part of the code, we are going to raise crucial exceptions, that will indicate to the rest of the program that the `user_input` might be written incorrectly and needs intervention.
If everything is good, a fresh new `Activity` instance will be returned.

2. Building up the `JournalEntry` instance

```python
from datetime import date

from exceptions import JournalEntryValueError
from journal.journal_entry import JournalEntry

def build_journal_entry(parsed_record: str, record_date: date) -> JournalEntry:
    if not parsed_record:
        return None
    if not record_date:
        raise JournalEntryValueError
    return JournalEntry(parsed_record, record_date)
```

Building the `JournalEntry` object is much simpler however, if the `record_date` is not defined and there's a valid `parsed_record` we do want to raise an exception and stop the parsing process.

### Piece it together

Now that we have all the building blocks necessary, let's put the pieces together and see what would the refactored solution look like.

We use the `read_user_input` function to get the contents of the `user_input` file as a list of strings (`List[str]`) and we call the following `parse_user_input` function with that list of strings and wait for a `NamedTuple` called `UserInput` which contains a list of activities (`List[Activity]`) and a list of journal entries (`List[JournalEntry]`) in return.

```python
import sys
import logging
from typing import List
from collections import namedtuple

from read_user_input import read_user_input
from split_list import split_list
from exceptions import ActivityValueError, JournalEntryValueError

from parse_day import parse_day
from parse_habits_date import parse_habits_date
from parse_activity import parse_activity
from parse_journal_entry import parse_journal_entry

from build_activity import build_activity
from build_journal_entry import build_journal_entry

UserInputFields = ["activities", "journal_entries"]
UserInput = namedtuple("UserInput", UserInputFields)

def parse_user_input(lines: List[str]) -> UserInput:
    if len(lines) == 0:
        return UserInput([], [])

    days = split_list(lines)

    activities = []
    journal_entries = []
    for day in days:
        parsed_day = parse_day(day)
        habits_date = parse_habits_date(parsed_day.raw_date)
        parsed_activities = [parse_activity(raw_activity) for raw_activity in parsed_day.raw_activities]
        parsed_journal_entry = parse_journal_entry(parsed_day.raw_journal_entry)

        activities += [build_activity(parsed_activity, habits_date) for parsed_activity in parsed_activities]
        journal_entry = build_journal_entry(parsed_journal_entry, habits_date)
        if journal_entry:
            journal_entries.append(journal_entry)

    return UserInput(activities, journal_entries)


if __name__ == "__main__":
    filename = "user_input_example.txt"

    user_input_lines = read_user_input(filename)
    try:
        user_input = parse_user_input(user_input_lines)
    except ActivityValueError:
        logging.error(f"There has been an issue parsing activities in '{filename}'")
        sys.exit()
    except JournalEntryValueError:
        logging.error(f"There has been an issue parsing journal entries is '{filename}'")
        sys.exit()
```

This code block has a bunch of imports, but that's exactly what we wanted, delegate responsibility to different functions so that the code responds better to change.

### Conclusion

Yes, it is crazy how much you can achieve with just these nested `while` loops, and the code stays relatively short. However, there are significant problems with that approach when we are building code that could be used in real life and has to be reliable. Let's take a look at how did we solve the problems outlined in the first section of this article.

Now that we separated the components and defined each part of the algorithm in functions we created a lot of code, but this is a **much more maintainable** code base than before. As a maintainer, you don't have to understand every building block to make a change, but if your task requires you to expand your knowledge of the system, you can because the blocks are small, concise, and easy to reason about.

The code becomes **scalable** because if there are new sections in a day that you wanna track, you just need to build the new parser, and builder functions and handle them in the `parse_user_input` function.

All functions deal with a **single responsibility** and they have only one reason to change.

Reading the `user_input` file has been taken out from the parser so there is no dependency on the mechanism that acquires user input. And all the defined functions in this refactoring are pure so they always return the same output for a specific input making the code **easy to test**.

Finally, but not lastly the code became **DRY**.
