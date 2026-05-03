import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
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
import AdminDashboard from './components/AdminDashboard';
import { AnalyticsProvider } from './components/AnalyticsProvider';

const PageLoader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center"
  >
    <div className="relative w-48 h-[1px] bg-white/10 overflow-hidden mb-6">
      <motion.div
        initial={{ left: "-100%" }}
        animate={{ left: "100%" }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full bg-accent"
      />
    </div>
    <motion.div 
      initial={{ opacity: 0, letterSpacing: "20px" }}
      animate={{ opacity: 1, letterSpacing: "5px" }}
      className="text-white font-black uppercase text-[10px] tracking-[10px]"
    >
      NEURAL LINK ESTABLISHED
    </motion.div>
  </motion.div>
);

const MainSite = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <CustomCursor />
      <AIAssistant />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[100] origin-left" style={{ scaleX }} />
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const newRipple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
  };

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    
    window.addEventListener('mousedown', addRipple);

    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => { 
      lenis.destroy(); 
      clearTimeout(timer);
      window.removeEventListener('mousedown', addRipple);
    };
  }, []);

  return (
    <AnalyticsProvider>
      <div className="relative bg-black min-h-screen selection:bg-neon-primary selection:text-white overflow-x-hidden">
        {/* Shockwave Layer */}
        <div className="fixed inset-0 pointer-events-none z-[999]">
          <AnimatePresence>
            {ripples.map(ripple => (
              <motion.div
                key={ripple.id}
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 4, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  left: ripple.x,
                  top: ripple.y,
                  width: '100px',
                  height: '100px',
                  marginLeft: '-50px',
                  marginTop: '-50px',
                  border: '2px solid rgba(250, 235, 146, 0.3)',
                  borderRadius: '50%',
                  boxShadow: '0 0 50px rgba(153, 41, 234, 0.2)'
                }}
              />
            ))}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {isLoading && <PageLoader />}
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
