import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 px-6 md:px-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-bold tracking-tighter mb-6"
            >
              Let's build something <br className="hidden md:block"/> extraordinary.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl"
            >
              Currently available for freelance opportunities. 
              If you have a project that needs some creative frontend magic, I'd love to hear from you.
            </motion.p>
          </div>

          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:faalonge007@gmail.com"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white text-black flex flex-col items-center justify-center group flex-shrink-0"
            data-hoverable="true"
          >
            <span className="font-medium text-lg">Say Hi</span>
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </div>

        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono text-gray-500">
          <p>© {new Date().getFullYear()} Dele The Dev. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://twitter.com/_dele_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" data-hoverable="true">Twitter</a>
            <a href="https://linkedin.com/in/faith-alonge7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" data-hoverable="true">LinkedIn</a>
            <a href="https://github.com/sloetag" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" data-hoverable="true">GitHub</a>
          </div>
        </div>
      </div>

      {/* Abstract Background Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
