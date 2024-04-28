import { useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const useAnimateInView = (inView: any, start: any) => {
  const ref = useRef<any>(null)
  const control = useAnimation()

  const isInView = useInView(ref, {
    once: false,
    amount: inView, // inView is elements' threshold
  })

  // *** Use one of the side effects

  // *** animate elements when they enter and leave the viewport ***
  // useEffect(() => {
  //   if (isInView) {
  //     control.start("visible")
  //   } else {
  //     control.start("hidden")
  //   }
  // }, [isInView, control])

  // *** animate elements only when they enter the viewport ***
  useEffect(() => {
    if (!ref.current) {
      return
    }
    if (isInView) {
      control.start(start)
    } else {
      const { bottom } = ref?.current?.getBoundingClientRect()
      const isBelowScreenBottom = bottom > window.innerHeight
      if (isBelowScreenBottom) {
        control.start('hidden')
      }
    }
  }, [isInView, control])

  return {
    ref,
    control,
  }
}

// usage
// const { ref, control } = useAnimateInView(0.4)
{
  /* <motion.div
  ref={ref}
  initial={"hidden"}
  animate={control}
  // variants={}
>
  lorem
</motion.div>  */
}

// if you want to animate multiple elements within the same container
// const { ref: containerRef, control: containerControl } = useAnimateInView(0.4)
// const { ref: headingRef, control: headingControl } = useAnimateInView(0.7)
{
  /* <motion.div
  ref={containerRef}
  initial={"hidden"}
  animate={containerControl}
  // variants={}
>
  lorem
</motion.div>  */
}
{
  /* <motion.h1
  ref={headingRef}
  initial={"hidden"}
  animate={headingControl}
  // variants={}
>
  lorem
</motion.h1>  */
}
