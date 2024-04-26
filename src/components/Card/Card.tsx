'use client'

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

      setMenuPosition({ top: e.clientY - theRef.top - 10, left: e.clientX - theRef.left - 10 })
    }
    ref?.current.addEventListener('mousemove', updateMousePosition)
    return () => {
      ref?.current.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div className="relative overflow-hidden  w-[300px] border border-gray-100" ref={ref}>
      <h2
        className="text-4xl font-bold bg-clip-text"
        style={{
          background: `radial-gradient(circle at center,#dfedf4 0,#628699 20%,#628699 100%)`,
          backgroundPosition: `${menuPosition.left}px ${menuPosition.top}px`,
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        This is some text
      </h2>
    </div>
  )
}

export default Card
