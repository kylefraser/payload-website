import Image from 'next/image'
import Link from 'next/link'

export default async function Footer() {
  const data = await getData()

  return (
    <footer className="container mx-auto py-4 px-6 flex justify-between items-center">
      <ul>
        {data.bottomNavLinks.map((link: any, i: number) => (
          <li key={link}>
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/footer`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
