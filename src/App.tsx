import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white/20">
      <CustomCursor />
      
      <div className="relative z-10 antialiased font-sans">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

