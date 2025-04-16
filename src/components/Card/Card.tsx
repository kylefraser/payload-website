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
      <div className="col-span-8 col-start-3 py-20 mb-40">
        <h2
          className="text-5xl font-bold bg-clip-text leading-tight text-center "
          style={{
            background: `radial-gradient(circle at center,#64D46B 0,#112C13 20%,#112C13 100%)`,
            backgroundPosition: `${menuPosition.left}px ${menuPosition.top}px`,
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '100vw 100vw',
            gridColumnStart: reverse ? '6' : '3',
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
          for the New Wave of Outdoor Enthusiast.
        </h2>
      </div>
      <div className="col-span-4 col-start-5 text-center">
        <h4
          className="text-sm font-bold text-green-dark-11 mb-4"
          style={{ textShadow: '0px 0px  20px rgba(100, 212, 107,0.6)' }}
        >
          Some text here
        </h4>
        <h2 className="text-2xl font-bold">Some Text here too</h2>
        <p className="text-lg text-green text-green-dark-12">And more text would be right here.</p>
      </div>
      <div
        className="col-span-12 grid grid-cols-4 auto-rows-min gap-6"
        style={{ gridColumnStart: reverse ? '4' : '1' }}
      >
        <div className="bg-green-dark-2 w-full border-[#0F1A10] border-r flex flex-col space-between gap-64 p-8 rounded reflect-card relative overflow-hidden">
          <Image
            src="/images/deer.jpeg"
            alt="deer"
            layout="fill"
            className="absolute top-0 left-0 right-0 bottom-0 -z-[1] object-cover hue-rotate-60 mix-blend-difference object-right opacity-20"
          />
          <p className="text-green-dark-12 font-mono font-medium text-md">Guides</p>
          <div className="flex flex-col gap-4 mt-auto">
            <h3 className="text-green-dark-12 font-bold text-2xl">
              Find professionals for your adventure.
            </h3>
            <p className="text-lg">Join together with local experts to claim new trophies.</p>
            <a href="/" className="text-green-dark-12 font-medium">
              Learn more
            </a>
          </div>
        </div>
        <div className="bg-green-dark-2 w-full border-[#0F1A10] border-r flex flex-col space-between gap-64 p-8 rounded reflect-card relative overflow-hidden">
          <Image
            src="/images/beekeeper.jpeg"
            alt="beekeeper"
            layout="fill"
            className="absolute top-0 left-0 right-0 bottom-0 -z-[1] object-cover hue-rotate-60 mix-blend-difference object-right opacity-20"
          />
          <p className="text-green-dark-12 font-mono font-medium text-md">Courses</p>
          <div className="flex flex-col gap-4 mt-auto">
            <h3 className="text-green-dark-12 font-bold text-2xl">Level up your skills</h3>
            <p className="text-lg">Join together with local experts to claim new trophies.</p>
            <a href="/" className="text-green-dark-12 font-medium">
              Learn more
            </a>
          </div>
        </div>
        <div className="bg-green-dark-2 w-full border-[#0F1A10] border-r flex flex-col space-between gap-64 p-8 rounded reflect-card relative overflow-hidden">
          <Image
            src="/images/flyfish.jpeg"
            alt="flyfish"
            layout="fill"
            className="absolute top-0 left-0 right-0 bottom-0 -z-[1] object-cover hue-rotate-[260deg] mix-blend-difference opacity-20"
          />
          <p className="text-green-dark-12 font-mono font-medium text-md">Access</p>
          <div className="flex flex-col gap-4 mt-auto">
            <h3 className="text-green-dark-12 font-bold text-2xl">Discover new opportunities</h3>
            <p className="text-lg">Join together with local experts to claim new trophies.</p>
            <a href="/" className="text-green-dark-12 font-medium">
              Learn more
            </a>
          </div>
        </div>
        <div className="bg-green-dark-2 w-full border-[#0F1A10] border-r flex flex-col space-between gap-64 p-8 rounded reflect-card relative overflow-hidden">
          <Image
            src="/images/kayak.jpeg"
            alt="kayak"
            layout="fill"
            className="absolute top-0 left-0 right-0 bottom-0 -z-[1] object-cover hue-rotate-[277deg] mix-blend-difference opacity-20"
          />
          <p className="text-green-dark-12 font-mono font-medium text-md">Epics</p>
          <div className="flex flex-col gap-4 mt-auto">
            <h3 className="text-green-dark-12 font-bold text-2xl">Unforgettable experiences</h3>
            <p className="text-lg">Join together with local experts to claim new trophies.</p>
            <a href="/" className="text-green-dark-12 font-medium">
              Learn more
            </a>
          </div>
        </div>
        {/* TODO: Video */}
        {/* <div className="col-span-12">
        <video autoPlay controls loop style={{ width: '100vw', height: '100vw' }}>
          <source src="/video.mp4" />
        </video>
      </div> */}
      </div>
    </div>
  )
}

export default Card
