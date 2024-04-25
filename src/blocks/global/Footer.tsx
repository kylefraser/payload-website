import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'

export default async function Footer() {
  const payload = await getPayload({ config })

  const footer = await payload.findGlobal({
    slug: 'footer',
  })

  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  return (
    <footer className="container grid grid-cols-12 mx-auto py-4 px-6 bg-gray-400">
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
      <ul className="col-start-12">
        {footer?.bottomNavLinks?.map((link: any, i: number) => (
          <li key={link.label}>
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
