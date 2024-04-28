import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateMeta } from '../../../utils/generateMeta'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

//TODO: Make this for a page
// export async function generateMetadata(): Promise<Metadata> {
//   let page
//   const payload = await getPayload({
//     config: configPromise,
//   })
//   try {
//     page = await payload.find({
//       collection: 'blog',
//       where: {
//         _status: {
//           equals: 'published',
//         },
//       },
//     })
//   } catch (error) {}

//   console.log('page', page)

//   return generateMeta({ doc: page })
// }

export default async function Blog() {
  const payload = await getPayload({ config: configPromise })

  const blogPosts = await payload.find({
    collection: 'blog',
    where: {
      _status: {
        equals: 'published',
      },
    },
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
