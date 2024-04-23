import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export default async function Blog() {
  const payload = await getPayloadHMR({ config })

  const blogPosts = await payload.find({
    collection: 'blog',
  })

  return (
    <div className="container mx-auto py-4 px-6">
      <h1>Hello Blog</h1>
      {blogPosts.docs.map((post: any, i: number) => (
        <h1>{post.title}</h1>
      ))}
    </div>
  )
}
