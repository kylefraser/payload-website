import { getPayload } from 'payload'
import configPromise from '@payload-config'
import RenderBlocks from '@/utils/RenderBlocks'

const Page = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'index',
      },
    },
  })

  return (
    <div>
      <RenderBlocks layout={data.docs[0].layout} />
    </div>
  )
}

export default Page
