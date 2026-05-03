import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AIAssistant from './components/AIAssistant';

const PageLoader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center"
  >
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "200px" }}
      transition={{ duration: 1.5, ease: "circIn" }}
      className="h-[1px] bg-accent mb-4"
    />
    <motion.h1 
      initial={{ opacity: 0, letterSpacing: "20px" }}
      animate={{ opacity: 1, letterSpacing: "5px" }}
      className="text-white font-black uppercase text-xl"
    >
      INITIALIZING
    </motion.h1>
  </motion.div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen selection:bg-neon-primary selection:text-white">
      <AnimatePresence>
        {isLoading && <PageLoader />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <AIAssistant />
          
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
            style={{ scaleX }}
          />

          <Navbar />
          
          <main>
            <div id="home">
              <Hero />
            </div>
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <GitHubStats />
            <Contact />
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
