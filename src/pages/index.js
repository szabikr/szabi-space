import Link from 'next/link'
import Weather from '../components/weather'
import Logo from '../components/logo'

export default function App() {
  return (
    <>
      <header>
        <h1>Welcome to <strong>szabi.space</strong></h1>
        <h2>Building responsive, dynamic applications powered by the cloud.</h2>
      </header>
      <div className="content">
        <Logo />

        <h3>Experienced with</h3>
        <ul>
          <li>Front-end State Management</li>
          <li>UI/UX Development</li>
          <li><Link href="/agile"><a>Agile Delivery</a></Link></li>
        </ul>

        <h3>Currently experimenting with</h3>
        <ul>
          <li>NextJS - SSG & SSR</li>
          <li>Jest with Testing Library</li>
          <li>AWS Route 53, CloudFront, S3</li>
          <li>CI/CD with GitHub Actions</li>
          <li>CSS3</li>
        </ul>
        <h3>
          Check out my CV
          {' '}
          <a 
            href="/assets/Szabi_Keresztes_Software_Engineer_CV.pdf"
            target="_blank"
          >
            here
          </a>.
        </h3>
      </div>
      
      <footer>
        <p>
          <code>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/szabolcs-keresztes-598935ba">LinkedIn</a>
          </code>
        </p>
        <p>
          <code>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/szabikr">Github</a>
          </code>
        </p>
        <div style={{ paddingTop: 24}}>
          <h3>Weather report for you</h3>
          <Weather />
        </div>
      </footer>
    </>
  )
}
