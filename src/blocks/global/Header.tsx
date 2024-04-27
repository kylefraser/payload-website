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
    <header className="container mx-auto py-6 px-6 flex justify-between items-center">
      <Link href={'/'}>
        <Image
          /* @ts-expect-error */
          src={settings?.logo?.url}
          /* @ts-expect-error */
          width={settings?.logo?.width}
          /* @ts-expect-error */
          height={settings?.logo?.height}
          /* @ts-expect-error */
          alt={settings?.logo?.alt}
          className="brightness-0 dark:brightness-100"
        />
      </Link>
      <nav>
        <ul className="flex flex-row gap-4 items-center">
          {nav?.navLinks?.map((link: any, i: number) => (
            <li key={link.label}>
              <Link href={'/' + link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
