import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'blogs',
  })

  return (
    <div className="container mx-auto py-4 px-6">
      <h1>Hello Blog</h1>
      {data.docs.map((post: any, i: number) => (
        <h1>{post.title}</h1>
      ))}
    </div>
  )
}
