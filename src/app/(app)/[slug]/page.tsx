import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { generateMeta } from '../../../utils/generateMeta'
import { PageTemplate } from './page.client'

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = params
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
        _status: {
          equals: 'published',
        },
      },
    })
  } catch (error) {}

  return generateMeta({ doc: page?.docs[0] })
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
    return notFound()
  }

  return <PageTemplate page={data?.docs[0]} />
}
