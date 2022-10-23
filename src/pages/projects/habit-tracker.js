import { projects } from '../../data'
import GithubAnchor from '../../components/github-anchor'

export default function HabitTracker({ repoLink }) {
  return (
    <>
      <header>
        <h1>Habit Tracker</h1>
        <GithubAnchor repoLink={repoLink} />
      </header>
      <main>
        <section>
          <h2>Change Log</h2>
          <h3>v1.0.0 - Activities and Journal Entries</h3>
          <h4>Motivation</h4>
          <p>
            Want to introduce a journaling habit through this project and
            considered to write my daily journal entries in a separate file
            called <code>journal.txt</code> and parse that similarly to a{' '}
            <code>user_input</code> file. However, I think it might just get a
            little too messy with multiple <code>user_input</code> files, so the
            solution is the bake the daily journal entries into the already
            existing <code>user_input</code> file format.
          </p>
          <p>
            This is starting to get closer to the idea of habit journal. Whereby
            I have my habits, and a journal for each day so that I can introduce
            a more personal way of recording my activities. Would be nice to see
            my journal entries in the context of my habits, and see if there's
            any correlation between the two.
          </p>
          <p>
            And to be honest the editing longer text with the wrap flag on here
            in Vim doesn't seem that bad. The main reason for this feature is to
            allow the user to get into the habit of Journaling in a very simple
            way. There's no need for fancy text editors or cool apps, I think
            the important bit is to get your thoughts down and be able to dig
            them up using date filter for example.
          </p>

          <h4>Theoretical Solution</h4>
          <p>
            Currently we have the <code>data.txt</code> file that contains all
            the data that is entered into the Habits database (activities). Now
            that we're doing journaling in the same application, we need more
            complex storage file structure:
          </p>
          <p>
            <ol>
              <li>
                <code>activity.txt</code> contains the activities just as how it
                was the <code>data.txt</code>
              </li>
              <li>
                <code>journal_entry.txt</code> contains the journal entries,
                with an
                <code>id</code>, <code>record_date</code> and{' '}
                <code>record</code>
              </li>
            </ol>
          </p>
          <p>
            With this I'm creating a dependency to the <code>user_input</code>{' '}
            files and their parsing. But that's alright, because a CLI needs to
            be implemented anyway and that can have features that allow users to
            introduce their activities and journal entries outside of these user
            files. As long as we agree that the source of truth for the data is
            the database, or perhaps the database files:{' '}
            <code>activity.txt</code> and <code>journal.txt</code> at the early
            stages of the project.
          </p>
          <p>
            Mixing the 2 concepts (<code>activity</code> and{' '}
            <code>journal_entry</code>) into a single user input file is a good
            first solution, but later on I can create another file that supports
            Markdown and maybe it has a journal entry for only one day, or for
            the entire week. I'll see, but for now the best solution is to
            couple the 2 concepts into the same <code>user_input</code> file,
            and have the python script separate them nicely.
          </p>
          <h4>Implementation</h4>
          <p>Follow the link to see the Pull Request on GitHub.</p>
          <p>
            <a href="https://github.com/szabikr/habit-tracker/pull/3">
              PR: Save journal entries from user inputs
            </a>
          </p>
        </section>
      </main>
      <footer>
        <GithubAnchor repoLink={repoLink} />
      </footer>
    </>
  )
}

export async function getStaticProps(context) {
  const repoLink = projects.find((poc) => poc.name == 'Habit Tracker').repoLink
  return {
    props: { repoLink },
  }
}
