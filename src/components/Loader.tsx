import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void; key?: any }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Elegant, varying ticks to feel organic
      const increment = Math.floor(Math.random() * 8) + 3;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] select-none"
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%', 
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Container */}
      <div className="relative flex flex-col items-center">
        {/* Giant Serif Symbolic Logo with Literata */}
        <div className="flex items-center justify-center font-serif text-8xl md:text-9xl font-semibold tracking-tighter gap-3 text-white">
          <motion.span
            initial={{ opacity: 0, x: -30, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 select-none"
          >
            &lt;
          </motion.span>
          
          <motion.span
            initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-emerald-500 select-none font-light"
          >
            /
          </motion.span>
          
          <motion.span
            initial={{ opacity: 0, x: 30, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 select-none"
          >
            &gt;
          </motion.span>
        </div>

        {/* Dynamic Numerical Indicator */}
        <motion.div 
          className="mt-8 font-mono text-xs tracking-[0.2em] text-gray-500 flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span>building experience</span>
          <span className="text-emerald-500 font-bold">{progress}%</span>
        </motion.div>
      </div>

      {/* Footer Branding built with majestic Literata Serif */}
      <div className="absolute bottom-16 flex flex-col items-center gap-2 text-center">
        <div className="overflow-hidden">
          <motion.h1
            className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white/90"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            deletheDev
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}
      
