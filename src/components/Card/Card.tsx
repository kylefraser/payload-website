'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const Card = () => {
  const ref = useRef<any>()
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
  })

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      var theRef = ref?.current.getBoundingClientRect()

      setMenuPosition({ top: e.clientY - theRef.top + 1000, left: e.clientX - theRef.left + 1000 })
    }
    ref?.current.addEventListener('mousemove', updateMousePosition)
    return () => {
      ref?.current.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div className="grid grid-cols-12 relative gap-y-10" ref={ref}>
      <div
        style={{
          background: `radial-gradient(circle at center,#A7FFA9  0,#090D01 20%,#090D01 100%)`,
          backgroundPosition: '-101vw -18vw',
          filter: 'blur(400px)',
          zIndex: '-1',
        }}
        className="absolute top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vw] translate-x-[-25vw] opacity-30"
      ></div>
      <h2
        className="text-6xl font-bold bg-clip-text col-span-7"
        style={{
          background: `radial-gradient(circle at center,#64D46B 0,#112C13 20%,#112C13 100%)`,
          backgroundPosition: `${menuPosition.left}px ${menuPosition.top}px`,
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          backgroundSize: '100vw 100vw',
        }}
      >
        The{' '}
        <span className="text-[#A7FFA9] ," style={{ WebkitTextFillColor: '#A7FFA9' }}>
          next-generation platform
        </span>{' '}
        for the New Wave of American Outdoor Enthusiast.
      </h2>
      <div className="col-span-9 grid grid-cols-4 auto-rows-min">
        <div className="bg-[#050E05] opacity-50 w-full h-[420px] border-[#0F1A10] border-r "></div>
        <div className="bg-[#050E05] opacity-50 w-full h-[420px] border-[#0F1A10] border-r "></div>
        <div className="bg-[#050E05] opacity-50 w-full h-[420px] border-[#0F1A10] border-r "></div>
        <div className="bg-[#050E05] opacity-50 w-full h-[420px]"></div>
      </div>
      <Image
        src="/images/bee.webp"
        className="col-span-5 col-start-12 sepia invert mix-blend-exclusion absolute top-0 right-0] animate-glide"
        alt="Bee"
        width="100"
        height="80"
      />
      {/* TODO: Video */}
      {/* <div className="col-span-12">
        <video autoPlay controls loop style={{ width: '100vw', height: '100vw' }}>
          <source src="/video.mp4" />
        </video>
      </div> */}
      <div className="h-[1600px] w-[400px]"></div>
    </div>
  )
}

export default Card
