import Link from 'next/link'

export default function BackToHomeButton() {
  return (
    <p>
      <Link href="/">
        <button>
          <strong>{'< '}</strong>Back to Home
        </button>
      </Link>
    </p>
  )
}
