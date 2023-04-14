import Link from 'next/link'
import ResumeButton from '../common/resume-button'

export default function Header() {
  return (
    <header>
      <Link href="/">
        <span className="logo">szabikr.</span>
      </Link>
      <div className="menu-items">
        <nav>
          <ul>
            <li>
              <a href="#expertise">Expertise</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact-me">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          <ResumeButton />
        </div>
      </div>
    </header>
  )
}
