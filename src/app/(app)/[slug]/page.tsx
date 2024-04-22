import React from 'react'
import RenderBlocks from '@/utils/RenderBlocks'

export default async function Page({ params }: any) {
  const page = await getPage(params)
  return (
    <div>
      <h1>Hello</h1>
      <RenderBlocks layout={page.layout} />
    </div>
  )
}

export const generateStaticParams = async () => {
  const pages = await fetch('http://localhost:3001/api/pages?limit=100').then((res) => res.json())

  return pages.docs.map(({ slug, id }: any) => {
    return [{ slug: slug }]
  })
}

async function getPage(params: any) {
  const res = await fetch(`http://localhost:3001/api/pages?slug=${params.slug}`)
  const pages = await res.json()

  return pages.docs[0]
}
