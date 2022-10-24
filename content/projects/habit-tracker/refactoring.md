## Refactoring

### User Input file Parser

The application has to contain a **parser** that takes a user input file such as the one below and transforms it into Lists of DataClasses. Currently we care about two of these DataClasses: `Activity` and `JournalEntry`.

User Input File Example

```
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

```
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

```
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

```
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
            activity_date = utils.get_activity_date(line)
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

            raw_activity_props, more_info = parse_activity_line(line)

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

```
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
            record_date = utils.get_activity_date(line)
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

Firstly, I think the current solution is **not self explanatory**, it could use some comments and additional documentation in order for a new developer to understand what's going on.

The 3 nested `while` loops are pretty much unavoidable with this approach, however as the format of the user input files are getting more complex, the more `while` loops we will need to introduce, making the code **not scalable**.

Both functions have to change all the time because they **take on more than one responsibility**. They read the file, they must be aware of the user input file format. Even though there are 2 distinct functions for each of the DataClasses there's still a high chance that both of these functions need to change if the format of Activity or the format of JournalEntry changes.

The dependency on the file opening function makes these code blocks **difficult to test**.

And finally, there's quite a lot of repeition going on, both functions have bunch of common elements so the code **is not DRY**.
