import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateMeta } from '../../../utils/generateMeta'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  let page
  const payload = await getPayload({
    config: configPromise,
  })
  try {
    page = await payload.find({
      collection: 'blog',
    })
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render static fallback pages for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  return generateMeta({ doc: page })
}

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
