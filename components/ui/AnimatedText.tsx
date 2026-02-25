"use client"

import { motion } from "framer-motion"

export default function AnimatedText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ")

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}