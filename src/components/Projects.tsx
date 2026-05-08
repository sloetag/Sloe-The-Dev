import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Velox Automobiles',
    description: 'A headless e-commerce experience built with Next.js, featuring seamless transitions and optimistic UI updates.',
    tech: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600',
    color: 'from-purple-500/20 to-blue-500/20',
  },
  {
    id: 2,
    title: 'Little Lemon Restaurant',
    description: 'Real-time data visualization dashboard with highly interactive charts and a custom brutalist design system.',
    tech: ['TypeScript', 'Recharts', 'Tailwind', 'Zustand'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 3,
    title: 'AI Companion App',
    description: 'A sophisticated conversational interface wrapping language models, complete with streaming responses and markdown support.',
    tech: ['React', 'OpenAI', 'Framer Motion', 'Radix UI'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600',
    color: 'from-orange-500/20 to-red-500/20',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-24">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400 max-w-xl">
            Recent projects that showcase my focus on animation, detail, and robust architecture.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
    >
      <div className="w-full md:w-1/2 relative group rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10" data-hoverable="true">
        {/* Placeholder image representation since we are mock */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0`} />
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col">
        <div className="font-mono text-sm text-gray-500 mb-4">0{index + 1}</div>
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t: string) => (
            <span key={t} className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 text-gray-300">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors" data-hoverable="true">
            View Live <ExternalLink size={16} />
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors" data-hoverable="true">
            Source <Github size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
