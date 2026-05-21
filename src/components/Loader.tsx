import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800); // Total loader duration
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%', 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <motion.div
        className="text-white font-mono text-6xl md:text-8xl font-bold tracking-tighter flex items-center justify-center gap-2"
      >
        <motion.span
          initial={{ opacity: 0, x: -50, rotate: -20 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-gray-300"
        >
          &lt;
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0, rotate: 90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
          className="text-emerald-500"
        >
          /
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 50, rotate: 20 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
          className="text-gray-300"
        >
          &gt;
        </motion.span>
      </motion.div>
      
      <motion.div 
        className="mt-8 overflow-hidden"
      >
        <motion.div
          className="font-mono text-sm tracking-[0.3em] text-gray-400 font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          DELE THE DEV
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
