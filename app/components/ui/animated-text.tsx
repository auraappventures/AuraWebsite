"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedText = ({
  words,
  className = "",
  delay = 0,
}: {
  words: string[];
  className?: string;
  delay?: number;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000 + delay);

    return () => clearInterval(interval);
  }, [words.length, delay]);

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
