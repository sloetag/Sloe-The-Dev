import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Code2, PenTool, Layout, Layers, Terminal as TerminalIcon, Cpu, Brain, Atom } from 'lucide-react';

const skills = [
  { name: 'React & Next.js', icon: Atom, category: 'Frontend' },
  { name: 'TypeScript . JavaScript', icon: TerminalIcon, category: 'Languages' },
  { name: 'Tailwind CSS . Bootstrap . Shadcn',  icon: PenTool, category: 'Styling' },
  { name: 'Framer Motion . GSAP', icon: Layout, category: 'Animation' },
  { name: 'Web Performance . SEO', icon: Cpu, category: 'Optimization' },
  { name: 'Prompt Engineering . Generative AI . Google AI', icon: Brain, category: 'Artificial Intelligence'},
  { name: 'State Management', icon: Layers, category: 'Architecture' },
  
]

function ReactIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
    </svg>
  );
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div style={{ y, opacity }} className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-gray-400 max-w-xl mb-16">
            A curated stack optimized for building high-performance, accessible, and visually stunning web applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col items-start gap-4 transition-colors cursor-pointer"
                data-hoverable="true"
              >
                <div className="p-3 rounded-xl bg-white/5 text-white">
                  <skill.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">{skill.name}</h3>
                  <p className="text-sm font-mono text-gray-500">{skill.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
    </section>
  );
}
