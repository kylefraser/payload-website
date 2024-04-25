import React from 'react'
import RenderBlocks from '@/utils/RenderBlocks'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'
import { generateMeta } from '../../../utils/generateMeta'

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  let page
  const payload = await getPayload({
    config: configPromise,
  })
  try {
    page = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
    })
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render static fallback pages for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  return generateMeta({ doc: page })
}

export default async function Page({ params }: any) {
  const { slug } = params

  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  if (!data?.docs[0]) {
    notFound()
  }

  return (
    <div>
      <RenderBlocks layout={data.docs[0].layout} />
    </div>
  )
}
