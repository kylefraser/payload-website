import Image from 'next/image'

export default function TwoColumn({ heading, text, backgroundImage, direction, ...props }: any) {
  const SecondContainer = () => {
    return (
      <div className="col-span-6 flex justify-center items-center">
        <Image
          src={backgroundImage.url}
          width={backgroundImage.width}
          height={backgroundImage.height}
          alt={backgroundImage.alt}
        />
      </div>
    )
  }

  return (
    <div className="container grid grid-cols-12 bg-gray-200 mx-auto py-20 px-6 justify-between items-center">
      {direction === 'reverse' && <SecondContainer />}
      <div className="col-span-6">
        <h2 className="text-4xl font-bold">{heading}</h2>
        <p className="text-base">{text}</p>
      </div>
      {direction === 'default' && <SecondContainer />}
    </div>
  )
}
