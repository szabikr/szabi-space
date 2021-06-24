import Weather from '../components/weather'
import Logo from '../components/logo'

export default function App() {
  return (
    <>
      <header>
        <h1>Welcome to <strong>szabi.space</strong></h1>
        <h2>Building responsive, dynamic applications powered by the cloud.</h2>
      </header>

      <Logo />

      <h3>Experienced with</h3>
      <ul>
        <li>Front-end State Management</li>
        <li>UI/UX Development</li>
        <li>Agile Delivery</li>
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
          href="/Szabi_Keresztes_Software_Engineer_CV.pdf"
          target="_blank"
        >
          here
        </a>.
      </h3>

      <footer>
        <Weather />
      </footer>
    </>
  )
}
