import { forwardRef } from 'react'
import { useScrollIntoViewRef } from '../../hooks'

const Expertise = forwardRef(function Expertise(props, ref) {
  const sectionRef = useScrollIntoViewRef(ref)

  return (
    <section id="expertise" ref={sectionRef}>
      <h3>My Expertise</h3>
      <ul className="grid expertise">
        <li>
          <h5>Software Engineering</h5>
          <p>
            Experienced in Procedural, Functional and Object Oriented
            Programming: TypeScript, JavaScript, Python.
          </p>
          <p>Excited about code architecture and refactoring.</p>
        </li>
        <li>
          <h5>Front-End Development</h5>
          <p>Passionate about UI/UX and Application State Management.</p>
          <p>Skilled in Semantic HTML, CSS, JS, React, Next.js.</p>
        </li>
        <li>
          <h5>Agile Ways of Working</h5>
          <p>
            Over 6 years of experience working in Scrum, Nexus and Kanban
            frameworks where fast moving teams have to deliver on time, meet the
            requirements and ensure quality.
          </p>
        </li>
      </ul>
    </section>
  )
})

export default Expertise
