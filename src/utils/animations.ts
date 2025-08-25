// utils/animations.ts
import { Variants, Transition } from 'framer-motion';

export type AnimationType =
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'scaleIn'
  | 'scaleInUp'
  | 'scaleInDown'
  | 'slideInUp'
  | 'slideInDown'
  | 'slideInLeft'
  | 'slideInRight'
  | 'rotateIn'
  | 'bounceIn'
  | 'staggerChildren'
  | 'custom';

export interface AnimationConfig {
  type: AnimationType;
  duration?: number;
  delay?: number;
  staggerChildren?: number;
  transition?: Transition;
  customVariants?: Variants;
}

export const getAnimationVariants = (config: AnimationConfig): Variants => {
  const {
    type,
    duration = 0.6,
    delay = 0,
    staggerChildren = 0.1,
    customVariants,
  } = config;

  if (customVariants) return customVariants;

  switch (type) {
    case 'fadeIn':
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration, delay },
        },
      };

    case 'fadeInUp':
      return {
        hidden: { opacity: 0, y: -180 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: 'easeOut' },
        },
      };

    case 'fadeInDown':
      return {
        hidden: { opacity: 0, y:180 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: 'easeOut' },
        },
      };

    case 'fadeInLeft':
      return {
        hidden: { opacity: 0, x: -180 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay, ease: 'easeOut' },
        },
      };

    case 'fadeInRight':
      return {
        hidden: { opacity: 0, x: 180 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay, ease: 'easeOut' },
        },
      };

    case 'scaleIn':
      return {
        hidden: { opacity: 0, scale: 1.2 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration, delay, ease: 'easeOut' },
        },
      };

    case 'rotateIn':
      return {
        hidden: { opacity: 0, rotate: -180 },
        visible: {
          opacity: 1,
          rotate: 0,
          transition: { duration, delay, ease: 'easeOut' },
        },
      };

    case 'bounceIn':
      return {
        hidden: { opacity: 0, scale: 0.3 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            type: 'spring',
            damping: 10,
            stiffness: 100,
            delay,
          },
        },
      };

    case 'staggerChildren':
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration,
            delay,
            staggerChildren,
          },
        },
      };

    default:
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration, delay },
        },
      };
  }
};
