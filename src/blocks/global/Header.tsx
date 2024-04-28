import { getPayload } from 'payload'
import config from '@payload-config'
import { HeaderTemplate } from './Header.client'

export default async function Header() {
  const payload = await getPayload({ config })

  let globals = [{ slug: 'settings' }, { slug: 'nav' }]

  //@ts-expect-error
  const data = await Promise.all(globals.map((global) => payload.findGlobal({ slug: global.slug })))

  return <HeaderTemplate data={data} />
}
