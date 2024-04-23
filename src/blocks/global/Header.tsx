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
          /* @ts-expect-error */
          src={settings?.logo?.url}
          /* @ts-expect-error */
          width={settings?.logo?.width / 5}
          /* @ts-expect-error */
          height={settings?.logo?.height / 5}
          /* @ts-expect-error */
          alt={settings?.logo?.alt}
        />
      </Link>
      <ul>
        {nav?.navLinks?.map((link: any, i: number) => (
          <li key={link}>
            <Link href={'/' + link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
