import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'

export default async function Header() {
  const payload = await getPayload({ config })

  const footer = await payload.findGlobal({
    slug: 'footer',
  })

  return (
    <footer className="container mx-auto py-4 px-6 flex justify-between items-center">
      <ul>
        {/* {footer?.bottomNavLinks?.map((link: any, i: number) => (
          <li key={link}>
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))} */}
      </ul>
    </footer>
  )
}
