import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Narrative', href: '#about' },
  { name: 'Gallery', href: '#projects' },
  { name: 'Record', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between px-8 py-4 rounded-full transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-black/5' : 'bg-transparent'}`}>
          
          {/* Brand */}
          <a href="#home" className="text-xl font-black tracking-tighter text-text-primary group">
            MOHAMMED <span className="text-earth-primary group-hover:text-text-primary transition-colors">ALI</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[5px] text-text-secondary/60 hover:text-earth-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-earth-primary transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
            <a href="#contact" className="px-6 py-2 bg-text-primary text-white text-[10px] font-black uppercase tracking-[4px] rounded-full hover:bg-earth-primary transition-colors shadow-sm">
              Connect
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-text-primary text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl border-t border-black/5 p-10 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-bold text-text-secondary hover:text-earth-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
