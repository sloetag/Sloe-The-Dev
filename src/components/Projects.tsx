import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Velox Automobiles',
    description: 'A modern automotive dealership platform showcasing the latest models with immersive 3D experiences.',
    tech: ['React', 'React Router', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1625870605450-40b1803df06d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cmljJTIwdmVoaWNsZXN8ZW58MHwwfDB8fHww',
    color: 'from-purple-500/20 to-blue-500/20',
    liveUrl: 'https://veloxmobile.vercel.app',
  },
  {
    id: 2,
    title: 'Little Lemon Restaurant',
    description: 'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'GSAP', 'React Router'],
    image: 'https://images.unsplash.com/photo-1582287014914-1db836ccf0f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveUrl: 'https://littlelemon-i.vercel.app',
  },
  {
    id: 3,
    title: 'Wooltown',
    description: ' An enterprise-grade platform built for scaling large, high-volume catalogs.',
    tech: ['React', 'OpenAI', 'Framer Motion', 'Radix UI'],
    image: 'https://plus.unsplash.com/premium_photo-1664201889922-66bc3c778c1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'from-orange-500/20 to-red-500/20',
    liveUrl: 'https://sloethedev.vercel.app',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-24">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
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
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter group-hover:brightness-80"
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
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors" 
              data-hoverable="true"
            >
              View Live <ExternalLink size={16} />
            </a>
          )}
          {project.sourceUrl && (
            <a 
              href={project.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors" 
              data-hoverable="true"
            >
              Source <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
