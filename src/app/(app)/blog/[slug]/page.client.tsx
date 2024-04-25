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
      {data.title}
      <RichTextParser content={data.body} />
    </div>
  )
}
