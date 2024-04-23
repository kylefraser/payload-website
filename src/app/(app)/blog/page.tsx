import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Link from 'next/link'

export default async function Blog() {
  const payload = await getPayloadHMR({ config })

  const blogPosts = await payload.find({
    collection: 'blog',
  })

  return (
    <div className="container mx-auto py-4 px-6">
      <h1 className="text-5xl font-bold">Hello Blog</h1>
      {blogPosts.docs.map((post: any, i: number) => (
        <div key={post} className="p-6 border border-gray-600 w-max">
          <Link href={`/blog/` + post.slug}>
            <h1>{post.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  )
}
