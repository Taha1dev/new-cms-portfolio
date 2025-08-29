'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function RotatingFlower() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <div
      ref={ref}
      className="absolute -top-[20rem] lg:left-0 -left-10 w-full flex justify-center overflow-hidden pointer-events-none opacity-100 dark:opacity-50"
    >
      <motion.div
        style={{ rotate }}
        className="relative size-[450px] -translate-y-[-50%]"
      >
        <Image
          src="/steel-flower.webp"
          alt="rotating flower"
          width={200}
          height={100}
          className="w-full opacity-80 select-none"
          draggable="false"
        />
      </motion.div>
    </div>
  )
}
