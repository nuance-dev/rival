import React, { ReactNode } from 'react';
import { motion, Variant, HTMLMotionProps } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';

// Animation variants for different animation types
export const fadeIn: Record<string, Variant> = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUp: Record<string, Variant> = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: Record<string, Variant> = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: Record<string, Variant> = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: Record<string, Variant> = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Record<string, Variant> = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Record<string, Variant> = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type AnimationVariant = 
  | 'fadeIn'
  | 'fadeInUp' 
  | 'fadeInDown' 
  | 'fadeInLeft' 
  | 'fadeInRight' 
  | 'scaleIn';

// Extend HTMLMotionProps to include our custom properties
type ScrollAnimationProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
  /** Animation variant to use */
  variant?: AnimationVariant;
  /** Custom animation variants if provided */
  customVariant?: Record<string, Variant>;
  /** Threshold for triggering animation (0-1) */
  threshold?: number;
  /** Whether to trigger animation once or on every scroll */
  triggerOnce?: boolean;
  /** Delay before animation starts (ms) */
  delay?: number;
};

const getVariant = (variant: AnimationVariant | undefined, customVariant: Record<string, Variant> | undefined) => {
  if (customVariant) return customVariant;
  
  switch (variant) {
    case 'fadeIn': return fadeIn;
    case 'fadeInUp': return fadeInUp;
    case 'fadeInDown': return fadeInDown;
    case 'fadeInLeft': return fadeInLeft;
    case 'fadeInRight': return fadeInRight;
    case 'scaleIn': return scaleIn;
    default: return fadeIn;
  }
};

/**
 * A component that animates its children when scrolled into view
 */
export default function ScrollAnimation({
  children,
  variant = 'fadeIn',
  customVariant,
  threshold = 0.2,
  triggerOnce = true,
  delay = 0,
  transition = { duration: 0.5 },
  className = '',
  ...props
}: ScrollAnimationProps) {
  const { ref, shouldAnimate } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay,
  });

  const animationVariants = getVariant(variant, customVariant);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={shouldAnimate ? 'visible' : 'hidden'}
      variants={animationVariants}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * A container that staggers the animations of its children
 */
export function ScrollAnimationGroup({
  children,
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
  className = '',
  ...props
}: Omit<ScrollAnimationProps, 'variant' | 'customVariant'>) {
  const { ref, shouldAnimate } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay,
  });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={shouldAnimate ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
} 