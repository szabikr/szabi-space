import Link from 'next/link'

export default function BackToHomeButton() {
  return (
    <p>
      <Link href="/">
        <a className="button">Return to Home</a>
      </Link>
    </p>
  )
}
