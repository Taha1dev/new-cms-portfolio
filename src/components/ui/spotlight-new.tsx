"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  // For gradients that work in both light and dark modes
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(270, 80%, 60%, 0.15) 0%, hsla(270, 70%, 50%, 0.10) 25%, hsla(270, 60%, 40%, 0.06) 50%, hsla(270, 50%, 30%, 0.03) 75%, transparent 95%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(270, 85%, 65%, 0.12) 0%, hsla(270, 75%, 55%, 0.08) 40%, hsla(270, 65%, 45%, 0.04) 70%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  const { theme } = useTheme()
  const [opacity, setOpacity] = useState<number>()
  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const effectiveTheme = savedTheme || theme

    setOpacity(effectiveTheme === 'dark' ? 80 : 25)
  }, [theme])
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <motion.div
        animate={{
          x: [0, xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 opacity-${opacity}`}
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left opacity-${opacity}`}
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left opacity-${opacity}`}
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 opacity-${opacity}`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right opacity-${opacity}`}
        />
      </motion.div>
    </motion.div>
  );
};
