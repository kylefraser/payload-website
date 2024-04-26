import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import Image from 'next/image'

export default function Hero({ heading, text, backgroundImage, layout, ...props }: any) {
  return (
    <section className="container grid grid-cols-12 mx-auto py-20 px-6 gap-x-4 gap-y-20">
      {layout === 'default' && (
        <>
          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
            <h2 className="text-4xl font-bold">{heading}</h2>
            <p className="text-base">{text}</p>
          </div>
          {backgroundImage.url && (
            <div className="col-span-12 lg:col-span-6 xl:col-span-6 xl:col-start-7 relative">
              <Image
                src={backgroundImage.url}
                alt={backgroundImage.alt}
                fill
                className="object-contain"
              />
            </div>
          )}
        </>
      )}
      {!layout && (
        <>
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 flex flex-col justify-center items-center text-center gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold">{heading}</h1>
              <p className="text-base">{text}</p>
            </div>
            <div className="flex flex-row gap-4">
              <Button>Primary</Button>
              <Button outline>Secondary</Button>
            </div>
          </div>
          {backgroundImage.url && (
            <div className="col-span-12 lg:col-span-6 lg:col-start-4 relative">
              <Image
                src={backgroundImage.url}
                alt={backgroundImage.alt}
                width={backgroundImage.width}
                height={backgroundImage.height}
                className="object-contain"
              />
            </div>
          )}
          <div className="col-span-12">
            <Card />
          </div>
        </>
      )}
    </section>
  )
}
