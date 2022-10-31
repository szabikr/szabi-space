## Refactoring

### User Input file Parser

The application has to contain a **parser** that takes a user input file such as the one below and transforms it into Lists of DataClasses. Currently we care about two of these DataClasses: `Activity` and `JournalEntry`.

User Input File Example

```txt
10 Aug
developing my habit tracker; Career | just built a new feature
walk; Health & Fitness | the weather was exceptionally good today
talk to a friend; Friendship
journal:
Had a great day today.
Really glad that I'm recording my habits.

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

We feed the parser the contents of a `user_input` file and waiting for a `List[Activity]` and a `List[JournalEntry]` in return.

### Current Solution

At the moment there are two main parser functions, `read_activities_from_user_input` and `read_journal_entries_from_user_input`, they both take in a `file_name` as a string, open the file, read the lines one by one and process the content in primitive way. Both functions are constructing lists imperatively and if no exceptions occur, the lists will be returned as a result. In case of crucial errors an empty list will be generated with a log message saying what went wrong.

Let's see the functions:

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
            activity_date = utils.extend_date(line) # extends date with current year
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
            record_date = utils.extend_date(line) # extends date with current year
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

Firstly, I think the current solution is **not self explanatory**, it could use some comments and additional documentation in order for a new developer to understand what's going on. Therefore the **maintenance is difficult**, hence the reason for two functions, I simply didn't wanna touch the `read_activities_from_user_input` function when building the journal entry parser functionality. _"- Who knows what's gonna happen??!"_, we all know this situation.

The 3 nested `while` loops are pretty much unavoidable with this approach, however as the format of the user input files are getting more complex, the more `while` loops we will need to introduce, making the code **not scalable**.

Both functions have to change all the time because they **take on more than one responsibility**. They read the file, they must be aware of the user input file format. Even though there are 2 distinct functions for each of the DataClasses there's still a high chance that both of these functions need to change if the format of Activity or the format of JournalEntry changes.

The dependency on the file opening function and their imperative nature makes these code blocks **difficult to test**.

And finally, there's quite a lot of repetition going on, both functions have bunch of common elements so the code **is not DRY**.

### Repository Tag

You can check out the entire code for the _Current Solution_ on [here](https://github.com/szabikr/habit-tracker/tree/v1.0.0), it's Tag v1.0.0.

### Solution

Perhaps the main issue is that we are processing the file line by line. A better approach would be to load the entire contents of the file into memory. A `List[str]` representing the lines of the file would be ideal. Would like to mention that the largest file so far is `6.5KB`, if and when the file size grows so that it's not efficient to load all of it into memory then I'll consider using a generator function instead.

A function that solves this issue might look something like:

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

Next step is to identify well definined units in the codebase that could be abstracted out into functions. At a first glance I can see 3 of these units:

1. Extract a `journal_entry`/`activity` date

```python
...
    try:
        habtis_date = utils.extend_date(line) # extends date with current year
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

I took the liberty to refactor these individual codeblocks, make them simpler, reduce unnecessary abstractions and define them in the context of functions. Functions that have arguments with types and return type.

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

In case of the second codeblock there is the `parse_activity_line` function call that is totally an unnecessary abstraction considering that the entire codeblock is about parsing the activity line, so its implementation can just be places within the function. And `guess_life_aspect` is a different concern, so it shouldn't be part of the parser at all. In case the `life_aspect` is not defined in the activity line, a `None` result should be returned. A solution which declares a so called `ParsedActivity` NamedTuple would look like this:

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

Parsing the journal entry lines is a super simple opperation, essentially we want to chain all the lines together separated by a new line (`\n`) character.

```python
from typing import List

def parse_journal_entry(lines: List[str]) -> str:
    return r"\n".join(lines)
```

You might think, _"Why do we even need a separate function for a one liner?"_. The question is valid, but considering that this one liner solves a problem specific for our domain, it deserves its own function. Also if the format of journal entry in the `user_input` file changes we know exactly which part of the codebase has to be altered.
