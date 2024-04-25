import Image from 'next/image'

export default function Hero({ heading, text, backgroundImage, ...props }: any) {
  return (
    <section className="container grid grid-cols-12 bg-gray-100 mx-auto py-20 px-6">
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
    </section>
  )
}
