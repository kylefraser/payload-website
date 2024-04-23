import React from 'react'
import RenderBlocks from '@/utils/RenderBlocks'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

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

export const generateStaticParams = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'pages',
  })

  return data.docs.map(({ slug, id }: any) => {
    return [{ slug: slug !== 'index' ? slug.split('/') : false }]
  })
}
