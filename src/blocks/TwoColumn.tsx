import Image from 'next/image'
import React from 'react'

export default function TwoColumn({ heading, text, backgroundImage, direction, ...props }: any) {
  return (
    <div className="container flex flex-row mx-auto py-4 px-6">
      <div className="flex-[50%]">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="flex-[50%]">
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
