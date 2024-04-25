import React from 'react'
import RichTextParser from '@/utils/RichTextParser'

export default function SimpleRichText({ body, ...props }: any) {
  return (
    <div className="container grid grid-cols-12 bg-gray-300 mx-auto py-20 px-6" {...props}>
      <RichTextParser content={body} className={'col-span-12'} />
    </div>
  )
}
