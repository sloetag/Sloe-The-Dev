import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  isDark: boolean;
}

export default function BackToTop({ isDark }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress percentage (0 to 1)
      if (totalHeight > 0) {
        setScrollProgress(scrolled / totalHeight);
      }

      // Show button after scrolling down 400px
      if (scrolled > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center border backdrop-blur-md transition-colors duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.15)]
            ${isDark 
              ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-emerald-500/30' 
              : 'bg-black/5 border-black/10 text-zinc-900 hover:bg-black/10 hover:border-emerald-500/30'
            }
          `}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          data-hoverable="true"
          aria-label="Back to top"
        >
          {/* Radial progress ring around the button */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="19"
              className="stroke-current opacity-10"
              strokeWidth="2"
              fill="transparent"
            />
            <motion.circle
              cx="22"
              cy="22"
              r="19"
              className="stroke-emerald-500"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 19}
              animate={{
                strokeDashoffset: (2 * Math.PI * 19) * (1 - scrollProgress),
              }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
            />
          </svg>

          {/* Icon */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: 'easeInOut' 
            }}
          >
            <ArrowUp size={20} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
