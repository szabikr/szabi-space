## Change Log

### v1.0.0 - Activities and Journal Entries

#### Motivation

Want to introduce a journaling habit through this project and considered to write my daily journal entries in a separate file called `journal.txt` and parse that similarly to a `user_input` file. However, I think it might just get a little too messy with multiple `user_input` files, so the solution is the bake the daily journal entries into the already existing `user_input` file format.

This is starting to get closer to the idea of habit journal. Whereby I have my habits, and a journal for each day so that I can introduce a more personal way of recording my activities. Would be nice to see my journal entries in the context of my habits, and see if there's any correlation between the two.

And to be honest the editing longer text with the wrap flag on here in Vim doesn't seem that bad. The main reason for this feature is to allow the user to get into the habit of Journaling in a very simple way. There's no need for fancy text editors or cool apps, I think the important bit is to get your thoughts down and be able to dig them up using date filter for example.

#### Theoretical Solution

Currently we have the `data.txt` file that contains all the data that is entered into the Habits database (activities). Now that we're doing journaling in the same application, we need more complex storage file structure:

1. `activity.txt` contains the activities just as how it was the `data.txt`
2. `journal_entry.txt` contains the journal entries, with an `id`, `record_date` and `record`

With this I'm creating a dependency to the `user_input` files and their parsing. But that's alright, because a CLI needs to be implemented anyway and that can have features that allow users to introduce their activities and journal entries outside of these user files. As long as we agree that the source of truth for the data is the database, or perhaps the database files: `activity.txt` and `journal.txt` at the early stages of the project.

Mixing the 2 concepts (`activity` and `journal_entry`) into a single user input file is a good first solution, but later on I can create another file that supports Markdown and maybe it has a journal entry for only one day, or for the entire week. I'll see, but for now the best solution is to couple the 2 concepts into the same `user_input` file, and have the python script separate them nicely.

#### Implementation

Follow the link to see the Pull Request on GitHub

[PR: Save journal entries from user inputs](https://github.com/szabikr/habit-tracker/pull/3)
