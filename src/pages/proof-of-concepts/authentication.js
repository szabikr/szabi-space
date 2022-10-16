import { proofOfConcepts } from '../../data'
import GithubAnchor from '../../components/github-anchor'

export default function Authentication({ repoLink }) {
  return (
    <>
      <header>
        <h1>Authentication in a Single Page Application</h1>
        <GithubAnchor repoLink={repoLink} />
      </header>
      <main>
        <section>
          <h2>Motivation</h2>
          <p>
            The idea for this proof of concept came when I was implementing a
            Habit Tracker web application (called Move to Done at the time). In
            order to release a product like this, the Authentication feature is
            crucial. I could have configured a Firebase authentication service
            or any other third party auth provider as a matter of fact, however
            I wanted to see what's underneath the implementation and see how
            difficult would it be to develop it for myself.
          </p>
          <p>
            Have to tell you that it was one of the most challenging proof of
            concepts that I've ever done. The most challenging part of this
            project is that the browser is a public space, so when using
            authentication tokens, there's always a possiblity that somebody
            steals the token on flight.
          </p>
          <p>
            Common cyber attacks in the browsers that I considered are:
            <ol>
              <li>
                Cross Site Scripting (XSS) - makes storing{' '}
                <code>access_token</code> in <code>localStorage</code> not
                viable
              </li>
              <li>
                Cross Site Request Forgery (CSRF) - makes storing{' '}
                <code>access_token</code> in browser cookies not viable
              </li>
            </ol>
          </p>
          <p>
            For any authorised requests the user must have an{' '}
            <code>access_token</code> which is going to be valid only for a
            short period of time till they complete the wanted operations i.e.
            10mins. This would be a super secure solution as even if the
            attacker receives this <code>access_token</code> they would be able
            to make only a handful of operations, till the token expires. <br />
            However, in this case the user must authenticate every 10mins which
            degrades the user experience significantly.
          </p>
          <p>
            Now you might think, what happens if the attacker gets hold of the{' '}
            <code>refresh_token</code>? They could just keep on requesting new
            access tokens on behalf of the authenticated user. Yeah, that might
            absolutely happen, this is why the refresh tokens need to be
            invalidated and recreated with every new <code>access_token</code>.
            On refresh we need to check if the <code>refresh_token</code> that a
            potentially authenticated user provides has already been
            invalidated. And if so, lock down the account, invalidate all
            refresh, access tokens and require the user to authenticate. With
            this method, the attacker won't be able to do anything with the
            stolen token.
          </p>
          <p>
            However, there's that possibility that the attacker received the new
            access token first and replaced the refresh token, and this will
            only be reveald when the real user tries to get their refreshed
            access token.
          </p>
        </section>
        <section>
          <h2>How it works</h2>
          <p>
            The user has to register with their email address and password. The
            email has to be a unique, valid email address and the password has
            to contain at least one lowercase, uppercase, number, non alpha
            numberic character and the length has to be between 8 and 32
            characters.
          </p>
          <p>
            When all the validations are met, the web server hashes the password
            and creates a username that is just the email address. Saves the
            user details and the hashed password to the database and returns the
            email and username.
          </p>
          <p>
            The password is hashed so that even if attackers get to the database
            the passwords stay unrevealed.
          </p>
          <p>
            On login the given password is hashed again and checked against the
            database. If the hashes and emails match the user will be provided
            with an <code>access_token</code> that they can use to make
            authenticated requests and a <code>refresh_token</code> that they
            can use to acquire a new <code>access_token</code> in case the old
            one got expired.
          </p>
          <p>
            In case the <code>access_token</code> expires the user can refresh
            it with their <code>refresh_token</code>.
          </p>
          <p>
            The <code>refresh_token</code> (1) must be valid, (2) must not be
            expired and (3) must not have been used previously. All these
            validation errors result in an Access Denied. <br />
            If all conditions are met, the user will be granted a new{' '}
            <code>access_token</code>, <code>refresh_token</code> and the old{' '}
            <code>refresh_token</code> will be invalidated, meaning that any
            refresh api calls made with the old <code>refresh_token</code>{' '}
            result in an account lockdown and the user must authenticate again
            using their credentials.
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
  const repoLink = proofOfConcepts.find(
    (poc) => poc.name == 'Authentication',
  ).repoLink
  return {
    props: { repoLink },
  }
}
