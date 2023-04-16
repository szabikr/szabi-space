import Link from 'next/link'

import { HeaderProps } from '../../types/props'
import { NavItemIdType } from '../../types/ui'
import { NAV_ITEM_ID } from '../../constants/ui'

import ResumeButton from '../common/resume-button'

export default function Header({ onNavItemClick }: HeaderProps) {
  function handleNavItemClick(e, itemId: NavItemIdType) {
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
              onClick={(e) => handleNavItemClick(e, NAV_ITEM_ID.expertise)}
            >
              Expertise
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleNavItemClick(e, NAV_ITEM_ID.experience)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleNavItemClick(e, NAV_ITEM_ID.projects)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#blog"
              onClick={(e) => handleNavItemClick(e, NAV_ITEM_ID.blog)}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavItemClick(e, NAV_ITEM_ID.contact)}
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
