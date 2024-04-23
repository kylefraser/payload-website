'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto py-20 px-6 text-center">
      <h2 className="text-5xl font-bold">404 - Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
