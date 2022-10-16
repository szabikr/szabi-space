import Link from 'next/Link'

export default function ProofOfConcepts({ proofOfConcepts }) {
  return (
    <section>
      <h3>Proof of Concepts</h3>
      <p>Implementations that solve well defined problems.</p>
      <ul>
        {proofOfConcepts.map((poc) => (
          <li key={poc.name}>
            <h4>
              {poc.pageUrl ? (
                <Link href={poc.pageUrl}>
                  <a>{poc.name}</a>
                </Link>
              ) : (
                <a
                  href={poc.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {poc.name}
                </a>
              )}
            </h4>
            <p>{poc.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
