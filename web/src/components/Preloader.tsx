'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const words = ["Reality", "Coherence", "Memory", "Truth"];

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % words.length);
    }, 500);
    
    const timer = setTimeout(() => {
      clearInterval(wordInterval);
      setIsLoading(false);
    }, 2200);
    
    return () => { clearInterval(wordInterval); clearTimeout(timer); };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          exit={{ 
            scale: 0.95,
            opacity: 0,
            borderRadius: "40px",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--orange)]"
        >
          <AnimatePresence mode="wait">
            <motion.span 
              key={wordIndex}
              initial={{ y: 30, opacity: 0, rotate: -2 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -30, opacity: 0, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="text-6xl md:text-8xl font-bold text-white tracking-tight"
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
          
          {/* Bouncing dots */}
          <div className="flex gap-2 mt-8">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                className="w-3 h-3 rounded-full bg-white/60"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
