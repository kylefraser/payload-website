'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const Card = ({ reverse }: any) => {
  const ref = useRef<any>()
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
  })

  useEffect(() => {
    if (ref?.current) {
      const updateMousePosition = (e: any) => {
        var theRef = ref?.current.getBoundingClientRect()

        setMenuPosition({
          top: e.clientY - theRef.top + 1000,
          left: e.clientX - theRef.left + 1000,
        })
      }
      ref?.current?.addEventListener('mousemove', updateMousePosition)
      return () => {
        ref?.current?.removeEventListener('mousemove', updateMousePosition)
      }
    }
  }, [ref])

  return (
    <div className="grid grid-cols-12 relative gap-y-10" ref={ref}>
      <div
        style={{
          background: `radial-gradient(circle at center,#A7FFA9  0,#090D01 20%,#090D01 100%)`,
          backgroundPosition: '-101vw -18vw',
          filter: 'blur(400px)',
          zIndex: '-1',
          top: -300,
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
          gridColumnStart: reverse ? '6' : '1',
        }}
      >
        The{' '}
        <span
          className="text-[#A7FFA9]"
          style={{
            WebkitTextFillColor: '#A7FFA9',
            textShadow: '0px 0px  20px rgba(100, 212, 107,0.2)',
          }}
        >
          next-generation platform
        </span>{' '}
        for the New Wave of American Outdoor Enthusiast.
      </h2>
      <div
        className="col-span-9 grid grid-cols-4 auto-rows-min gap-4"
        style={{ gridColumnStart: reverse ? '4' : '1' }}
      >
        <div className="bg-green-dark-a2 w-full border-[#0F1A10] border-r flex flex-col space-between gap-40 p-8 rounded">
          <p className="text-green-dark-12 font-mono text-sm">Courses</p>
          <div className="flex flex-col gap-4 mt-auto">
            <h3 className="text-green-dark-12 font-bold text-xl">Get training</h3>
            <a href="/">Learn more</a>
          </div>
        </div>
        <div className="bg-green-dark-a2 w-full border-[#0F1A10] border-r flex flex-col space-between gap-40 p-8 rounded">
          <p className="text-green-dark-12 font-mono text-sm">Courses</p>
          <div className="flex flex-col gap-4 mt-auto">
            <h3 className="text-green-dark-12 font-bold text-xl">Get training</h3>
            <a href="/">Learn more</a>
          </div>
        </div>
        <div className="bg-green-dark-a2 w-full border-[#0F1A10] border-r flex flex-col space-between gap-40 p-8 rounded">
          <p className="text-green-dark-12 font-mono text-sm">Courses</p>
          <div className="flex flex-col gap-4 mt-auto">
            <h3 className="text-green-dark-12 font-bold text-xl">Get training</h3>
            <a href="/">Learn more</a>
          </div>
        </div>
        <div className="bg-green-dark-a2 w-full border-[#0F1A10] border-r flex flex-col space-between gap-40 p-8 rounded">
          <p className="text-green-dark-12 font-mono text-sm">Courses</p>
          <div className="flex flex-col gap-4 mt-auto">
            <h3 className="text-green-dark-12 font-bold text-xl">Get training</h3>
            <a href="/">Learn more</a>
          </div>
        </div>
      </div>
      {/* TODO: Video */}
      {/* <div className="col-span-12">
        <video autoPlay controls loop style={{ width: '100vw', height: '100vw' }}>
          <source src="/video.mp4" />
        </video>
      </div> */}
    </div>
  )
}

export default Card
