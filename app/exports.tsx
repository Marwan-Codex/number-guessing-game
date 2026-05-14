'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export const MotionLink = motion(Link);
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionMain = motion.main;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionH1 = motion.h1;
export const MotionH6 = motion.h6;
export const MotionFooter = motion.footer;
export const MotionA = motion.a;

export const parentVariants: {
  hidden: {
    opacity: number,
  },
  visible: {
    opacity: number,
    transition: {
      staggerChildren: number,
    },
  },
} = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};
export const itemVariants: {
  hidden: {
    opacity: number,
    y: number,
  },
  visible: {
    opacity: number,
    y: number,
    transition: {
      duration: number,
    }
  },
} = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

export enum Range {
  Easy_OneTime = 11,
  Medium_Imp = 101,
  Hard_Extreme = 1001,
}
export enum Attempts {
  Easy_Imp = 4,
  Medium = 8,
  Hard = 12,
  Extreme = 10,
  OneTime = 1
}