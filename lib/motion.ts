import { Variants } from "framer-motion";

// Premium, slow, elegant transition curves
export const transitionPremium = {
  type: "spring",
  duration: 1.2,
  bounce: 0.05,
};

export const transitionFast = {
  type: "spring",
  duration: 0.6,
  bounce: 0,
};

export const fadeInVariants = (reduced: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

export const fadeUpVariants = (reduced: boolean): Variants => ({
  hidden: {
    opacity: 0,
    y: reduced ? 0 : 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPremium,
  },
});

export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const scaleUpVariants = (reduced: boolean): Variants => ({
  hidden: {
    opacity: 0,
    scale: reduced ? 1 : 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionPremium,
  },
});

export const lineDrawVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};
