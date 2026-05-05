import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AdminDashboard from './components/AdminDashboard';
import { AnalyticsProvider } from './components/AnalyticsProvider';

const PageLoader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="fixed inset-0 z-[1000] bg-[#F9F6F1] flex flex-col items-center justify-center"
  >
    <div className="relative w-24 h-[1px] bg-black/10 overflow-hidden mb-6">
      <motion.div
        initial={{ left: "-100%" }}
        animate={{ left: "100%" }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full bg-earth-primary"
      />
    </div>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-earth-primary/40 font-bold uppercase text-[9px] tracking-[10px]"
    >
      Initializing Portfolio
    </motion.div>
  </motion.div>
);

const MainSite = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => { 
      lenis.destroy(); 
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnalyticsProvider>
      <div className="relative bg-[#F9F6F1] min-h-screen selection:bg-earth-primary/20 selection:text-earth-primary overflow-x-hidden">
        <AnimatePresence mode="wait">
          {isLoading && <PageLoader key="loader" />}
        </AnimatePresence>

        {!isLoading && (
          <Routes>
            <Route path="/" element={<MainSite />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        )}
      </div>
    </AnalyticsProvider>
  );
}

export default App;
