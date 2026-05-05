import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 px-6 bg-light-contrast/30 border-t border-black/5 relative overflow-hidden">
      {/* Decorative Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
          
          {/* Brand & Identity */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-black tracking-tighter text-text-primary">
                MOHAMMED <span className="text-earth-primary">ALI</span>
              </h3>
              <p className="text-[11px] font-black uppercase tracking-[10px] text-text-secondary/40">
                Full-Stack Developer
              </p>
            </div>
            <p className="text-lg text-text-secondary/60 leading-relaxed max-w-sm italic">
              "Building scalable digital solutions through precise engineering and refined aesthetics."
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[5px] text-text-primary">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm font-medium text-text-secondary/60 hover:text-earth-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-[1px] bg-earth-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[5px] text-text-primary">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/MohammedAli200" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mohammed-ali-46a95a2b7/" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaInstagram />, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-text-secondary hover:bg-earth-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary/40">Electronic Address</p>
              <a href="mailto:alimohammed3731@gmail.com" className="text-sm font-bold text-earth-primary hover:underline">alimohammed3731@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[5px] text-text-secondary/30">
            © {currentYear} Mohammed Ali. All Architectural Rights Reserved.
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[5px] text-text-secondary/30">
            <a href="#" className="hover:text-text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
