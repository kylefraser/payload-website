import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { generateMeta } from '../../../../utils/generateMeta'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { PageTemplate } from './page.client'

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = params

  let page

  const payload = await getPayload({
    config: configPromise,
  })

  try {
    page = await payload.find({
      collection: 'blog',
      where: {
        slug: {
          equals: slug,
        },
        _status: {
          equals: 'published',
        },
      },
      limit: 1,
    })
  } catch (error) {}

  return generateMeta({ doc: page?.docs[0] })
}

export default async function Blog({ params }: any) {
  const { slug } = params

  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'blog',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 100,
  })

  if (!data?.docs[0]) {
    notFound()
  }

  return <PageTemplate page={data?.docs[0]} />
}
