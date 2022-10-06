import { proofOfConcepts } from '../data'

export default function ProofOfConcepts() {
  return (
    <section>
      <h3>Proof of Concepts</h3>
      <p>Implementations that solve well defined problems.</p>
      <ul>
        {proofOfConcepts.map((poc) => (
          <li key={poc.name}>
            <h4>
              <a href={poc.repoLink} target="_blank" rel="noopener noreferrer">
                {poc.name}
              </a>
            </h4>
            <p>{poc.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
