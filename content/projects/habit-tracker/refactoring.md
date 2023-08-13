# Refactoring User Input Importer in My Habit Tracker CLI

## Requirements

The Habit Tracker App User defines their **activities** and **journal entries** in a user input file which then needs to be parsed and imported.

Such a `user_input` file has the following format:

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

An example of a `user_input` file is:

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

The format of this file makes the input user-friendly and human-readable. It is somewhat similar to a journal that you might write in your notebook. However, the computer has to have some kind of clever representation of this input so that it can process it, insert it into databases, make queries on it, and much more.

There are two data classes that we can define by looking at the `user_input` file, `Activity` and `JournalEntry`. `Activity` contains the details of an activity that happened throughout the day, note that more than one activity can be done in a day. `JournalEntry` contains just the record of that entry and each day can have only one of them, but it is not mandatory.

The properties of these data classes are as follows:

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

We need an algorithm that takes the contents of a `user_input` file and returns a `List[Activity]` and a `List[JournalEntry]`.

## Current Solution

The current solution, which you can check out [here](https://github.com/szabikr/habit-tracker/tree/v1.0.0), constitutes of two main parser functions, `read_activities_from_user_input` and `read_journal_entries_from_user_input`. They both take a `user_input` filename as a string, read the lines from the file one by one, and process the content in a primitive way. Lists of each data class (`Activity` and `JournalEntry`) are constructed imperatively and then returned. In case of crucial errors, an empty list will be generated with a log message saying what went wrong.

Let's see `read_activities_from_user_input` that retrieves the List of Activities from a `user_input` file:

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

And `read_journal_entries_from_user_input` retrieves the List of Journal Entries from a `user_input` file:

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

## Problems with the Current Solution

Firstly, I think the current solution is **not self-explanatory**, it could use some comments and additional documentation for a new developer to understand what's going on. Therefore the **maintenance is difficult**, hence the reason for the two functions, I simply didn't wanna touch the `read_activities_from_user_input` function when building the journal entry parser functionality. We've all been in a situation where we said, or heard somebody say: _"- I'm not changing that! Who knows what's gonna happen??!"_.

The 3 nested `while` loops are pretty much unavoidable with this approach, however as the format of the `user_input` files is getting more complex, the more `while` loops we will need to introduce, making the code **not scalable**.

Both functions have to change all the time because they **take on more than one responsibility**. They read the file, they must be aware of the user input file format. Even though there are 2 distinct functions for each of the DataClasses there's still a high chance that both of these functions need to change if the format of `Activity` or the format of `JournalEntry` changes.

The dependency on the file opening function and their imperative nature makes these code blocks **difficult to test**.

And finally, there's quite a lot of repetition going on, both functions have a bunch of common elements so the code **is not DRY**.

## At a first glance

Perhaps the main issue is that we are processing the file line by line. A better approach would be to load the entire contents of the file into memory. A `List[str]` representing the lines of the file would be ideal because then we can apply any data transformation function that we want. Would like to mention that the largest file so far is `6.5KB`, if and when the file size grows so that it's not efficient to load all of it into memory then I'll consider using a generator function instead.

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

The next step is to identify well-defined units in the existing codebase that could be abstracted away into functions. At a first glance I can see 3 of these units:

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

At this point, I went on and started to fiddle with the code, built these code blocks into functions, and reduced unnecessary abstractions. Had to decide what these functions will return are they going to return the domain models that we defined earlier as data classes or should they return `NamedTuples`. Also, what are going to be the core building blocks and how will those building blocks be put together so that it constructs the User Input Importer. How should I organise the code in modules, packages, and so on.

In my opinion, the best way to find a great solution for something is to try out a bunch of things and see what works best, document it, refine it, create diagrams, etc. I'll let you read about the intermediate steps [here](https://szabi.space/blog/refactoring-user-input-importer-in-my-habit-tracker-cli-v1), but this article will continue with the final, refined solution.

## Proposed Solution

After the refactoring process I came to a solution that is represented by the following code architecture diagram:

[<img src="https://szabi.space/assets/user_input_importer_diagram.png" alt="user input importer code architecture diagram" width="100%" />](https://szabi.space/assets/user_input_importer_diagram.png)

As you can see the code is structured in four packages. One of the packages, `ht_importer` represents the entry point to the solution, and deals with reading the `user_input` file, delegating the parsing and build process, and writing the data to the database. There is a package that contains the models that the application uses `ht_models`. Another package, `ht_parser` contains the algorithm that parses the user input and constructs `raw_models`. And another one `ht_builder` takes `raw_models` and with the help of some side effects (i.e. `quess_life_aspect`) creates the `domain_models`.

Let's look at each package and see their implementation:

### `ht_models` package

It is sensible to start with `ht_models` as this package contains the data structures that other packages pass around to turn the contents of `user_input` files into data that the computer understands. All other packages are dependent on this one and it exists because we wanted to reduce the level of dependency between the packages.

`ht_models` have two modules currently, `raw_models` which represent the parsed user input as it is, and the `domain_models` which are the actual high-level models that we build from the `raw_models` and are supposed to be used in the rest of the application.

`raw_models` are just simple data classes that are designed to contain the raw information given by the user.

```python
from dataclasses import dataclass
from datetime import date
from typing import List

@dataclass
class RawActivity:
    activity_name: str
    life_aspect: str
    more_info: str

RawJournalEntry = str

@dataclass
class RawDay:
    habits_date: date
    activities: List[RawActivity]
    journal_entry: RawJournalEntry
```

`domain_models` are also data classes, but they are more complex and deal with data generated by the system such as `id` and include `to_string` behaviours.

```python
from dataclasses import dataclass, field
from datetime import date
from typing import List
import uuid

@dataclass
class Activity:
    activity_name: str
    activity_date: date
    life_aspect: str
    more_info: str = None
    id: uuid.UUID = field(default_factory=uuid.uuid4)

    def __str__(self):
        more_info_str = "" if self.more_info == None else f" | {self.more_info}"
        return f"{self.activity_date.strftime('%a %d %b')}: {self.activity_name}; {self.life_aspect}{more_info_str}"

    def print(self):
        more_info_str = "null" if self.more_info == None else f"{self.more_info}"
        return f"{self.id};{self.activity_date.strftime('%Y-%m-%d')};{self.activity_name};{self.life_aspect};{more_info_str}"


@dataclass
class JournalEntry:
    record: str
    record_date: date
    id: uuid.UUID = field(default_factory=uuid.uuid4)

    def __str__(self):
        return f"{self.record_date}\n{self.record}"

    def print(self):
        return f"{self.id};{self.record_date};{self.record}"


@dataclass
class UserInput:
    activities: List[Activity]
    journal_entries: List[JournalEntry]
```

### `ht_importer` package

This package is like an orchestrator, has a dependency on every other package and it uses them together with some internal modules to get the job done. It is responsible for reading the data from `user_input`, converting the data (parsing then building), and writing the data to the database.

```python
import sys
import logging
from collections import namedtuple

from ht_builder.exceptions import ActivityValueError, JournalEntryValueError
from ht_parser.parse_user_input import parse_user_input
from ht_builder.build_user_input import build_user_input

from ht_importer.read_user_input import read_user_input
from ht_importer.write_db import append_activities, append_journal_entries

logger = logging.getLogger(__name__)

ImportedEntityCounts = namedtuple("ImportedEntityCounts", ["activity_count", "journal_entry_count"])

def import_user_input(filename: str):
    user_input_lines = read_user_input(filename)

    raw_days = parse_user_input(user_input_lines)

    try:
        user_input = build_user_input(raw_days)
    except ActivityValueError:
        logging.error(f"There has been an issue parsing activities in '{filename}'")
        sys.exit()
    except JournalEntryValueError:
        logging.error(f"There has been an issue parsing journal entries is '{filename}'")
        sys.exit()

    append_activities(user_input.activities)
    append_journal_entries(user_input.journal_entries)

    return ImportedEntityCounts(len(user_input.activities), len(user_input.journal_entries))
```

We've seen the `read_user_input` function earlier in the article which is going to prepare the contents of the `user_input` file as a list of strings. That list of strings is exactly what the `parse_user_input` function needs to generate the `raw_days` (remember the `raw_models`), the `build_raw_input` takes that and returns a list of activities and a list of journal entries wrapped in a `UserInput` data class.
Finally, if the build process didn't raise any exceptions, the activities, and journal entries will be appended to the database using the `append_activities` and `append_journal_entries` functions.

For auditing purposes, we want to return how many of each entity we inserted into the database hence the return of the `NamedTuple` `ImportedEntityCounts`.

The following diagram helps visualise what's happening during the execution of `import_user_input` function:

[<img src="https://szabi.space/assets/import_user_input_activity_diagram.png" alt="import user input activity diagram" width="100%" />](https://szabi.space/assets/import_user_input_activity_diagram.png)

### `ht_parser` package

This package is responsible for taking the list of strings and parsing them into `raw_models`. And it does it by splitting the lines into days, then parsing each day into different sections like date (`str`), list of activities (`List[str]`), and journal entries (`List[str]`). Once we have these sections we pass them on to their respective parser functions to turn them into raw activities (`List[RawActivity]`) and journal entries (`RawJournalEntry`).

```python
import sys
import logging
from typing import List

from ht_models.raw_models import RawDay

from ht_parser.split_list import split_list
from ht_parser.parse_day import parse_day
from ht_parser.parse_activity import parse_activity
from ht_parser.parse_journal_entry import parse_journal_entry

def parse_user_input(lines: List[str]) -> List[RawDay]:
    if len(lines) == 0:
        return []

    days = split_list(lines)

    raw_days = []
    for day in days:
        parsed_day = parse_day(day)

        habits_date = parsed_day.date
        activities = [parse_activity(activity) for activity in parsed_day.activities]
        journal_entry = parse_journal_entry(parsed_day.journal_entry)

        raw_days.append(RawDay(habits_date, activities, journal_entry))

    return raw_days
```

I think it's important to mention here how we parse a string that contains an activity with the `parse_activity` function. Following the format of the `user_input` file, we split the string by the `|` character that separates the `more_info` property from the rest. If there's no `more_info` defined we just leave it as `None`. The other activity properties are separates by the `;` character and the first item will be the `activity_name` while the second is the `life_aspect`. At this point, the `life_aspect` can be `None` because we might guess it later in the `ht_builder` package.

```python
from ht_models.raw_models import RawActivity

def parse_activity(line: str) -> RawActivity:
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

    return RawActivity(activity_name, life_aspect, more_info)
```

Also worth talking about the `parse_journal_entry` function as it is core business logic. It is much simpler than the previous method. Here we just need to join all lines with a new line character. It is important to create the new line special character as a raw string so that when we save it, it stays as a new line special character and doesn't get printed as simply a new line.

```python
from typing import List

from ht_models.raw_models import RawJournalEntry

def parse_journal_entry(lines: List[str]) -> RawJournalEntry:
    if not lines:
        return None
    return r"\n".join(lines)
```

### `ht_builder` package

This package is the final step in our conversion and that's where the `raw_models` turn into `domain_models`. We loop through each `raw_day` and build the date (`build_habits_date`), list of activities (`build_activities`) and if there is any, the journal entry (`build_journal_entry`).

```python
from typing import List

from ht_models.raw_models import RawDay
from ht_models.domain_models import UserInput

from ht_builder.build_habits_date import build_habits_date
from ht_builder.build_activity import build_activity
from ht_builder.build_journal_entry import build_journal_entry

def build_user_input(raw_days: List[RawDay]) -> UserInput:
    activities = []
    journal_entries = []

    for raw_day in raw_days:
        habits_date = build_habits_date(raw_day.habits_date)
        for raw_activity in raw_day.activities:
            activities.append(build_activity(raw_activity, habits_date))
        if raw_day.journal_entry:
            journal_entries.append(build_journal_entry(raw_day.journal_entry, habits_date))

    return UserInput(activities, journal_entries)
```

Let's unpack what those individual builder functions do and how are they implemented. We can start with the `build_habits_date` which is a function that assumes the current year appends it to the parsed `user_input` date and makes a conversion to the default date format. Returns the date if the conversion was successful, otherwise `None`.

```python
import logging
from datetime import date, datetime

logger = logging.getLogger(__name__)

def build_habits_date(partial_date: str) -> date:
    full_date = f"{partial_date} {date.today().year}"
    try:
        habits_date = datetime.strptime(full_date, '%d %b %Y').date()
    except ValueError:
        logger.exception(f"Partial date '{partial_date}' has incorrect format, use '%d %b', i.e. 10 Aug")
        return None
    return habits_date
```

`build_activity` maps the fields of a `RawActivity` to an `Activity` model while trying to fill in the blanks. The `activity_date` comes from the function argument given that the `build_habits_date` successfully converted the date. And `life_aspect` have to be guessed in case it was not provided in the `user_input`. If any of the required arguments of the `Activity` data class are missing an exception will be raised.

```python
import logging
from datetime import date

from ht_models.raw_models import RawActivity
from ht_models.domain_models import Activity

from ht_builder.exceptions import ActivityValueError
from ht_builder.guess_life_aspect import guess_life_aspect

logger = logging.getLogger(__name__)

def build_activity(raw_activity: RawActivity, activity_date: date) -> Activity:
    if not activity_date:
        logger.error(f"activity_date is not defined")
        raise ActivityValueError("Activity date is missing")

    life_aspect = raw_activity.life_aspect or guess_life_aspect(raw_activity.activity_name)
    if not life_aspect:
        logger.error(f"Raw activity '{raw_activity}' is missing life aspect and can't be guessed")
        raise ActivityValueError("Life aspect is missing")

    return Activity(raw_activity.activity_name, activity_date, life_aspect, raw_activity.more_info)
```

`build_journal_entry` is essentially just a constructor that brings the `raw_journal_entry` and the `habits_date` and creates the `JournalEntry` domain model.

```python
from datetime import date

from ht_models.raw_models import RawJournalEntry
from ht_models.domain_models import JournalEntry

from ht_builder.exceptions import JournalEntryValueError

def build_journal_entry(raw_journal_entry: RawJournalEntry, record_date: date) -> JournalEntry:
    if not raw_journal_entry:
        return None
    if not record_date:
        raise JournalEntryValueError
    return JournalEntry(raw_journal_entry, record_date)
```

## Conclusion

Yes, it is crazy how much you can achieve with just these nested `while` loops, and the code stays relatively short. However, there are significant problems with that approach when we are building code that could be used in real life and has to be reliable. Let's take a look at how did we solve the problems outlined in the first section of this article.

Now that we separated the components and defined each part of the algorithm in functions we created a lot of code, but this is a **much more maintainable** code base than before. As a maintainer, you don't have to understand every building block to make a change, but if your task requires you to expand your knowledge of the system, you can because the blocks are small, concise, and easy to reason about.

The code becomes **scalable** because if there are new sections in a day that you wanna track, you just need to build the new parser, and builder functions and handle them in the `parse_user_input` function.

All functions deal with a **single responsibility** and they have only one reason to change.

Reading the `user_input` file has been taken out from the parser so there is no dependency on the mechanism that acquires user input. And all the defined functions in this refactoring are pure so they always return the same output for a specific input making the code **easy to test**.

Finally, but not lastly the code became **DRY**.
