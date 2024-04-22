import RichTextParser from '@/utils/RichTextParser'

export default function SimpleRichText({ body }) {
  return (
    <div className="py-10 px-6">
      <RichTextParser content={body} />
    </div>
  )
}
