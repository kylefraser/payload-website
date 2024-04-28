import { getPayload } from 'payload'
import config from '@payload-config'
import { HeaderTemplate } from './Header.client'

export default async function Header() {
  const payload = await getPayload({ config })

  const nav = await payload.findGlobal({
    slug: 'nav',
  })

  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  const data = { nav, settings }

  return <HeaderTemplate data={data} />
}
