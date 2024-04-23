import Image from 'next/image'
import Link from 'next/link'

export default async function Header() {
  const data = await getData()

  return (
    <header className="container mx-auto py-4 px-6 flex justify-between items-center">
      <Image
        src={data.logo.url}
        width={data.logo.width / 10}
        height={data.logo.height / 10}
        alt={data.logo.alt}
      />
      <ul>
        {data.navLinks.map((link: any, i: number) => (
          <li key={link}>
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/header`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
