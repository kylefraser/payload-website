import serializeLexicalRichText from '@/utils/serializeLexicalRichText'
import React from 'react'

export default function ({ className, content, customClassNames }: any) {
  if (!content?.root?.children) return ''

  return (
    <div className={`${[className].filter(Boolean).join(' ')} richText`}>
      {serializeLexicalRichText({ children: content.root.children, customClassNames })}
    </div>
  )
}
