import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-40 px-6 bg-light-bg bg-texture overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Connection Context */}
          <div className="space-y-16">
            <div>
              <span className="section-label-light">Collaboration</span>
              <h2 className="text-[4rem] md:text-[5rem] font-bold tracking-tight mb-8">Let's Create <br /> <span className="text-earth-primary/50">Impact.</span></h2>
              <p className="text-2xl text-text-secondary leading-relaxed max-w-lg italic border-l-4 border-earth-primary/20 pl-10">
                "Whether it's a revolutionary platform or a cinematic digital home, I'm ready to architect what's next."
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-text-primary group-hover:bg-earth-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[8px] text-earth-secondary/40 mb-1">Direct Channel</p>
                  <p className="text-xl font-bold text-text-primary group-hover:text-earth-primary transition-colors">alimohammed3731@gmail.com</p>
                </div>
              </div>

              <div 
                className="flex items-center gap-8 group cursor-pointer" 
                onClick={() => window.open('https://wa.me/9052404441')}
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-text-primary group-hover:bg-earth-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[8px] text-earth-secondary/40 mb-1">Instant Access</p>
                  <p className="text-xl font-bold text-text-primary group-hover:text-earth-primary transition-colors">+91 9052404441</p>
                </div>
              </div>
            </div>

            <div className="flex gap-8 pt-6">
              {[
                { icon: <FaGithub />, link: "https://github.com/MohammedAli200" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mohammed-ali-46a95a2b7/" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center text-text-secondary/60 hover:border-earth-primary hover:text-earth-primary hover:bg-earth-primary/5 transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Editorial Form */}
          <div className="editorial-card p-12 md:p-20 relative overflow-hidden bg-white/50 backdrop-blur-xl">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[10px] text-earth-secondary/60 ml-4">Full Name</label>
                <input 
                  id="name"
                  type="text" 
                  className="w-full bg-black/[0.02] border-b border-black/10 p-6 text-text-primary focus:outline-none focus:border-earth-primary transition-all text-xl placeholder:text-text-secondary/20"
                  placeholder="Identity"
                  required
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[10px] text-earth-secondary/60 ml-4">Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  className="w-full bg-black/[0.02] border-b border-black/10 p-6 text-text-primary focus:outline-none focus:border-earth-primary transition-all text-xl placeholder:text-text-secondary/20"
                  placeholder="mail@example.com"
                  required
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[10px] text-earth-secondary/60 ml-4">The Strategic Brief</label>
                <textarea 
                  id="message"
                  rows="4"
                  className="w-full bg-black/[0.02] border-b border-black/10 p-6 text-text-primary focus:outline-none focus:border-earth-primary transition-all text-xl resize-none placeholder:text-text-secondary/20"
                  placeholder="Outline your vision..."
                  required
                />
              </div>
              <button type="submit" className="btn-editorial w-full flex items-center justify-center gap-6 py-6 group">
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" /> Dispatch Signal
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
