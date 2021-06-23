import Weather from '../components/weather'

export default function App() {
  return (
    <>
      <h1>Welcome to <strong>szabi.space</strong></h1>
      <h2>Building responsive, dynamic applications powered by the cloud</h2>
      <p>Currently experimenting with:</p>
      <ul>
        <li>NextJS - SSG & SSR</li>
        <li>Jest with Testing Library</li>
        <li>AWS S3, Lambda, API Gateway</li>
        <li>CI/CD with GitHub Actions</li>
        <li>CSS3</li>
      </ul>
      <p>
        Check out my CV
        {' '}
        <a 
          href="/Szabi_Keresztes_Software_Engineer_CV.pdf"
          target="_blank"
        >
          here
        </a>
      </p>
      <Weather />
    </>
  )
}
