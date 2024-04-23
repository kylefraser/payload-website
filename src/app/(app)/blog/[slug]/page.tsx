import React from 'react'
import RichTextParser from '@/utils/RichTextParser'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

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
  })

  if (!data?.docs[0]) {
    notFound()
  }

  return (
    <div>
      <h1>Hello</h1>
      <RichTextParser content={data.docs[0].body} />
    </div>
  )
}
