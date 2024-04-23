import React from 'react'
import RenderBlocks from '@/utils/RenderBlocks'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function Page({ params }: any) {
  console.log(params)
  const page = await getPage(params)
  return (
    <div>
      <RenderBlocks layout={page.layout} />
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

async function getPage(params: any) {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'pages',
  })

  const page = data.docs.filter((page) => {
    return page.slug == params.slug
  })

  console.log('thepage', page)

  return page[0]
}
