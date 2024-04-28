import { Button } from '@/components/Button'
import Link from 'next/link'

export default function CallToAction({ heading, text, buttonLabel, link }: any) {
  return (
    <div>
      <h3 className="text-xl">{heading}</h3>
      <p>{text}</p>
      <Link href={link}>
        <Button>{buttonLabel}</Button>
      </Link>
    </div>
  )
}
