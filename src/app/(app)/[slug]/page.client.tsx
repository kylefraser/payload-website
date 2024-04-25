'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import RenderBlocks from '@/utils/RenderBlocks'

export const PageTemplate = ({ page }: any) => {
  const { data } = useLivePreview({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    initialData: page,
  })

  console.log(data)

  return (
    <div>
      {data.title}
      <RenderBlocks layout={data?.layout} />
    </div>
  )
}
