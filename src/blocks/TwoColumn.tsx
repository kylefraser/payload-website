import Image from 'next/image'
import React from 'react'

export default function TwoColumn({ heading, text, backgroundImage, direction, ...props }: any) {
  return (
    <div className="container grid grid-cols-12 bg-gray-200 mx-auto py-20 px-6 justify-between items-center">
      <div className="col-span-6">
        <h2 className="text-4xl font-bold">{heading}</h2>
        <p className="text-base">{text}</p>
      </div>
      <div className="col-span-6 flex justify-center items-center">
        <Image
          src={backgroundImage.url}
          width={backgroundImage.width}
          height={backgroundImage.height}
          alt={backgroundImage.alt}
        />
      </div>
    </div>
  )
}
