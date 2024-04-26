import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from '../../components/ThemeToggle'

export default async function Footer() {
  const payload = await getPayload({ config })

  const footer = await payload.findGlobal({
    slug: 'footer',
  })

  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  return (
    <footer className="container grid grid-cols-12 mx-auto py-4 px-6">
      <div className="flex flex-col gap-8">
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
        <ThemeToggle />
      </div>
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
