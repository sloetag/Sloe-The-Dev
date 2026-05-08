import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Terminal, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-20">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-gray-400 font-mono text-sm sm:text-base mb-6"
        >
          <Terminal size={18} className="text-white" />
          <span>Hello, World. I am Dele</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-6 text-white"
        >
          Frontend <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
            Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
        >
          I craft highly interactive, accessible, and performant web experiences. 
          Specializing in React, TypeScript, and modern animation libraries to bring ideas to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-6"
        >
          <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-black bg-white rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10">View Work</span>
          </a>
          <div className="flex items-center gap-4">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
      
      {/* Abstract Background Element */}
      <motion.div 
        className="absolute top-1/4 right-0 md:right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-white/5 blur-[100px] md:blur-[150px] -z-10 pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}
