"use client";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useLayoutEffect } from "react";

export const AnimatedNumber = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useLayoutEffect(() => {
    const animation = animate(count, 500, {
      duration: 2
    });
  }, []);

  return <motion.p>{rounded}</motion.p>;
};
