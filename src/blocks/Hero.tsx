import Image from 'next/image'
import React from 'react'

export default function Hero({ heading, text, backgroundImage, ...props }: any) {
  return (
    <div className="container mx-auto py-4 px-6 flex flex-col justify-between items-center">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p>{text}</p>
      {backgroundImage && (
        <Image
          src={backgroundImage.url}
          height={backgroundImage.height}
          width={backgroundImage.width}
          alt={backgroundImage.alt}
        />
      )}
    </div>
  )
}
