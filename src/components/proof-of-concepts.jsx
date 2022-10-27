import Link from 'next/link'

export default function ProofOfConcepts({ proofOfConcepts, content }) {
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: content }} />
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
