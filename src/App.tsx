import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white/20">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`relative z-10 antialiased font-sans ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        {!isLoading && (
          <>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <BackToTop isDark={true} />
          </>
        )}
      </div>
    </main>
  );
}

