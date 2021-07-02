export default function AgilePage() {
  return (
    <>
      <h1>Agile is a <strong>philosophy</strong> rather then a process or methodology</h1>
      <h3>Manifesto</h3>
      <p>We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:</p>
      <ul>
        <li><strong>Individuals and interactions</strong> over processes and tools</li>
        <li><strong>Working software</strong> over comprehansive documentation</li>
        <li><strong>Costumer collaboration</strong> over contract negotiation</li>
        <li><strong>Responding to change</strong> over following a plan</li>
      </ul>
      <p>That is, while there is value in the items on the right, we value the items on the left more.</p>

      <hr />

      <h3>Product lifecycle</h3>
      <p>"No surprises end-game"</p>
      <ul>
        <li>Feasability</li>
        <li>Discovery</li>
        <li>Delivery (alfa, beta, full)</li>
        <li>Retire</li>
      </ul>

      <h3>Multi-disciplinary, self organising teams</h3>
      <p>"Bring yourself to work"</p>
      <ul>
        <li>"T" shaped individuals</li>
        <li>Forming, Storming, Norming and Performing</li>
        <li>Members (main: DM, PO, SA)</li>
      </ul>

      <h3>Scrum Framework</h3>
      <p>
        <a href="https://www.scrum.org/resources/what-is-scrum">More details</a>
      </p>
      <ul>
        <li>User stories</li>
        <li>Board</li>
        <li>Ceremonies</li>
        <li>Plan -{'>'} Build -{'>'} Reflect -{'>'} Plan ...</li>
      </ul>

      <img
        src="/assets/scrum-lifecycle.png"
        alt="scrum lifecycle"
        width="100%"
      />
      <p><i>source: https://www.scrum.org/</i></p>

      <h3>Always look for a better way</h3>
      <img
        src="/assets/too-busy-to-improve.png"
        alt="too busy to improve illustration"
        width="100%"
      />
    </>
  )
}