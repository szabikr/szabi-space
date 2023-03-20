import Link from 'next/link'

export default function LabPage() {
  return (
    <main>
      <h1>Development Lab</h1>
      <ul>
        <li>
          <Link href="/lab/tagline">Tagline</Link>
        </li>
        <li>
          <Link href="/lab/experties">Experties</Link>
        </li>
        <li>
          <Link href="/lab/experience">Experience</Link>
        </li>
        <li>
          <Link href="/lab/projects">Projects</Link>
        </li>
        <li>
          <Link href="/lab/blog">Blog</Link>
        </li>
        <li>
          <Link href="/lab/contact-me">Contact Me</Link>
        </li>
        <li>
          <Link href="/lab/component-library">Component Library</Link>
        </li>
      </ul>
    </main>
  )
}
