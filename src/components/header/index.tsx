import Link from 'next/link'
import ResumeButton from '../common/resume-button'
import { HeaderProps } from '../../types/props'
import { MutableRefObject } from 'react'

export default function Header({
  expertiseSectionRef,
  experienceSectionRef,
  projectsSectionRef,
  blogSectionRef,
  contactSectionRef,
}: HeaderProps) {
  function handleNavItemClick(
    e,
    ref: MutableRefObject<HTMLElement>,
    hashString: string,
  ) {
    e.preventDefault()
    history.pushState({}, '', `#${hashString}`)
    ref.current.scrollIntoView({ behavior: 'smooth' })
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
              onClick={(e) =>
                handleNavItemClick(e, expertiseSectionRef, 'expertise')
              }
            >
              Expertise
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) =>
                handleNavItemClick(e, experienceSectionRef, 'experience')
              }
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) =>
                handleNavItemClick(e, projectsSectionRef, 'projects')
              }
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#blog"
              onClick={(e) => handleNavItemClick(e, blogSectionRef, 'blog')}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) =>
                handleNavItemClick(e, contactSectionRef, 'contact')
              }
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
