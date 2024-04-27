'use client'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import Image from 'next/image'
import { useFeatureFlagVariantKey } from 'posthog-js/react'
import { TestingBlock } from './TestingBlock'

export default function Hero({ heading, text, backgroundImage, layout, ...props }: any) {
  return (
    <section className="container grid grid-cols-12 mx-auto py-40 px-6 gap-x-4 gap-y-20">
      {layout === 'default' && (
        <>
          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
            <h2 className="text-4xl font-bold">{heading}</h2>
            <p className="text-base">{text}</p>
          </div>
          {backgroundImage && (
            <div className="col-span-12 lg:col-span-6 xl:col-span-6 xl:col-start-7 relative">
              <Image
                src={backgroundImage.url}
                alt={backgroundImage.alt}
                fill
                className="object-contain"
              />
            </div>
          )}
        </>
      )}
      {!layout && (
        <>
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 flex flex-col justify-center items-center text-center gap-8">
            <div className="flex flex-col gap-4">
              <h1
                className="text-7xl font-bold"
                style={{
                  // background: `radial-gradient(circle at center,rgba(167,255,169,1) 0,#57d46a 20%,#57d46a 100%)`,
                  // WebkitTextFillColor: 'transparent',
                  // backgroundClip: 'text',
                  // backgroundSize: '100% 100%',
                  color: '#64D46B',
                  textShadow: '0px 0px  20px rgba(100, 212, 107,0.2)',
                }}
              >
                {heading}
              </h1>
              <p className="text-lg">{text}</p>
            </div>
            <div className="flex flex-row gap-4">
              <div className="button-container button-alt relative"></div>
            </div>
          </div>
          {backgroundImage && (
            <div className="col-span-12 lg:col-span-6 lg:col-start-4 relative">
              <Image
                src={backgroundImage.url}
                alt={backgroundImage.alt}
                width={backgroundImage.width}
                height={backgroundImage.height}
                className="object-contain"
              />
            </div>
          )}
        </>
      )}
      <Image
        src={'/images/bee.webp'}
        width="100"
        height="80"
        alt="Bee"
        className="invert sepia mix-blend-exclusion animate-glide"
      />
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
      <div className="col-span-12 py-40">
        <Card />
      </div>
      <div className="col-span-12 py-40 flex flex-reverse">
        <TestingBlock />
      </div>
    </section>
  )
}
