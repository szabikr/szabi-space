import Link from 'next/link'
import ResumeButton from '../common/resume-button'

export default function Header() {
  return (
    <header className="dev">
      <div>
        <Link href="/">
          <span className="logo">szabikr.</span>
        </Link>
      </div>
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
              <a href="#contact-me">Contact me</a>
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
