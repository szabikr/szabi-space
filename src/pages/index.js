import Work from '../components/work'

export default function App() {
  return (
    <>
      <header>
        <h1>Hi. I'm Szabi. A Software Engineer.</h1>
      </header>
      <main>
        <section>
          <ul>
            <li>
              <h4>
                <a
                  href="/assets/Szabi_Keresztes_Software_Engineer_CV.pdf"
                  target="_blank"
                >
                  CV
                </a>
              </h4>
              <p>PDF</p>
            </li>
            <li>
              <h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/szabikr"
                >
                  Github
                </a>
              </h4>
              <p>Profile</p>
            </li>
            <li>
              <h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/szabolcs-keresztes-598935ba"
                >
                  LinkedIn
                </a>
              </h4>
              <p>Profile</p>
            </li>
          </ul>
        </section>
        <Work />
      </main>

      <footer></footer>
    </>
  )
}
