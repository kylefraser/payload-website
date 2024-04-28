'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import RichTextParser from '@/utils/RichTextParser'

export const PageTemplate = ({ page }: any) => {
  const { data } = useLivePreview({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    initialData: page,
  })

  return (
    <div>
      <div className="container grid grid-cols-12 mx-auto py-20 px-6 w-full">
        <h1 className="text-6xl font-bold col-span-6 mb-16">{data.title}</h1>
        <div className="col-span-12">
          <RichTextParser content={data.body} />
        </div>
      </div>
    </div>
  )
}
