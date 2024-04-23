import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

export default async function Header() {
  const payload = await getPayloadHMR({ config })

  const header = await payload.findGlobal({
    slug: 'header',
  })

  return (
    <header className="container mx-auto py-4 px-6 flex justify-between items-center">
      <Image
        src={header.logo.url}
        width={header.logo.width / 10}
        height={header.logo.height / 10}
        alt={header.logo.alt}
      />
      <ul>
        {header.navLinks.map((link: any, i: number) => (
          <li key={link}>
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
