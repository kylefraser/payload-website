import React from 'react'

export default function TwoColumn({ heading, text, image, direction }) {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  )
}
