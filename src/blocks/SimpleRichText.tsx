import React from 'react'
import RichTextParser from '@/utils/RichTextParser'

export default function SimpleRichText({ body, ...props }: any) {
  return (
    <div className="container mx-auto py-10 px-6">
      <RichTextParser content={body} />
    </div>
  )
}
