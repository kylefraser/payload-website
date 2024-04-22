import React from 'react'
import RichTextParser from '@/utils/RichTextParser'

export default async function Blog({ params }: any) {
  const blog = await getBlog(params)
  return (
    <div>
      <h1>Hello</h1>
      <RichTextParser content={blog.body} />
    </div>
  )
}

export const generateStaticParams = async () => {
  const blogs = await fetch('http://localhost:3001/api/blog?limit=100').then((res) => res.json())

  return blogs.docs.map(({ slug, id }: any) => {
    return [{ slug: slug }]
  })
}

async function getBlog(params: any) {
  const res = await fetch(`http://localhost:3001/api/blog?slug=${params.slug}`)
  const blogs = await res.json()

  return blogs.docs[0]
}
