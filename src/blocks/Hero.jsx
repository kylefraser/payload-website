import Image from 'next/image'
import React from 'react'

export default function Hero({ heading, text, backgroundImage }) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p>{text}</p>
      <Image
        src={backgroundImage.url}
        height={backgroundImage.height}
        width={backgroundImage.width}
        alt={backgroundImage.alt}
      />
    </div>
  )
}
