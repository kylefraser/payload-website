'use client'

import Link from 'next/link'

export default function Error() {
  return (
    <div>
      <h2>Error</h2>
      <p>There was an error</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
