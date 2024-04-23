import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

export default async function Header() {
  const payload = await getPayload({ config })

  const nav = await payload.findGlobal({
    slug: 'nav',
  })

  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  return (
    <header className="container mx-auto py-4 px-6 flex justify-between items-center">
      <Link href={'/'}>
        <Image
          src={settings?.logo?.url}
          width={settings?.logo?.width / 5}
          height={settings?.logo?.height / 5}
          alt={settings?.logo?.alt}
        />
      </Link>
      <ul>
        {nav?.navLinks?.map((link: any, i: number) => (
          <li key={link}>
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
