import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 bg-light-contrast/30 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-2xl font-black tracking-tighter text-text-primary">
              MOHAMMED <span className="text-earth-primary">ALI</span>
            </h3>
            <p className="text-[10px] font-black uppercase tracking-[8px] text-text-secondary/40">
              Architecting Digital Futures
            </p>
          </div>

          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[5px] text-text-secondary/60">
            <a href="#home" className="hover:text-earth-primary transition-colors">Home</a>
            <a href="#projects" className="hover:text-earth-primary transition-colors">Gallery</a>
            <a href="#about" className="hover:text-earth-primary transition-colors">Narrative</a>
          </div>

          <div className="text-[10px] font-black uppercase tracking-[5px] text-text-secondary/40">
            © {currentYear} All Architectural Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
