import { Button } from '@/components/Button'
import Link from 'next/link'

export default function CallToAction({ heading, text, buttonLabel, link, ...props }: any) {
  return (
    <div {...props} className="bg-green-dark-2 p-8 flex flex-col gap-4 my-16">
      <h3 className="text-xl">{heading}</h3>
      <p>{text}</p>
      <Link href={link}>
        <Button>{buttonLabel}</Button>
      </Link>
    </div>
  )
}
