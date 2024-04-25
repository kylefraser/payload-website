'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>There was an error</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
