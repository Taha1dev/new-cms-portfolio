"use client"

import { motion } from "framer-motion"
import { getAnimationVariants, AnimationConfig } from "@/utils/animations"

interface AnimatedSectionProps extends AnimationConfig {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function AnimatedSection({
  children,
  className = "",
  id,
  type = "fadeIn",
  duration = 0.6,
  delay = 0,
  staggerChildren = 0.1
}: AnimatedSectionProps) {
  const variants = getAnimationVariants({ type, duration, delay, staggerChildren })

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </motion.section>
  )
}