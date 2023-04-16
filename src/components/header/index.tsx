import Link from 'next/link'
import ResumeButton from '../common/resume-button'
import { HeaderProps } from '../../types/props'

export default function Header({ onNavItemClick }: HeaderProps) {
  function handleNavItemClick(e, itemId: string) {
    e.preventDefault()
    onNavItemClick(itemId)
  }

  return (
    <header>
      <Link href="/">
        <span className="logo">szabikr.</span>
      </Link>
      <nav>
        <ul>
          <li>
            <a
              href="#expertise"
              onClick={(e) => handleNavItemClick(e, 'expertise')}
            >
              Expertise
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleNavItemClick(e, 'experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleNavItemClick(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#blog" onClick={(e) => handleNavItemClick(e, 'blog')}>
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavItemClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <ResumeButton />
    </header>
  )
}
