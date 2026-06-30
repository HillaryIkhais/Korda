'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export const ScrambleText = ({ text, className = '', delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const queue: { from: string, to: string, start: number, end: number, char?: string }[] = [];
    
    for (let i = 0; i < text.length; i++) {
      const from = text[i] || '';
      const to = text[i] || '';
      const start = Math.floor(Math.random() * 40) + delay * 60;
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
    }

    let animationRef: number;
    
    const update = () => {
      let output = '';
      let complete = 0;
      
      for (let i = 0; i < queue.length; i++) {
        const { from, to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            queue[i].char = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          output += `<span class="opacity-50">${queue[i].char}</span>`;
        } else {
          output += from;
        }
      }

      setDisplayText(output);
      
      if (complete === queue.length) {
        setDisplayText(text);
        cancelAnimationFrame(animationRef);
      } else {
        animationRef = requestAnimationFrame(update);
        frame++;
      }
    };

    const timeout = setTimeout(() => {
      animationRef = requestAnimationFrame(update);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationRef);
    };
  }, [text, isInView, delay]);

  return (
    <motion.span 
      ref={ref}
      className={className}
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
};
