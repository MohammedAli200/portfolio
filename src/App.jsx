import React, { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-dark-bg min-h-screen">
      <CustomCursor />
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
    </div>
  );
}

export default App;
