"use client";
import { motion } from "framer-motion";

export const AnimatedHeading = () => {
  // const lines = [
  //   "Find your perfect home with us.",
  //   "Your next home is just a login away!"
  // ];

  const lineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.5,
        duration: 0.8
      }
    })
  };

  return (
    <h1 className="text-4xl font-bold">
      <motion.span
        className="block"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Find your perfect home with us.
      </motion.span>
      <motion.span
        className="block ml-64"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Your next home is just a login away!
      </motion.span>
    </h1>
  );
};
