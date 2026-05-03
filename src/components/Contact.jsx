import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-16 relative">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-moss-highlight text-xs font-black uppercase tracking-[15px] mb-8 block"
              >
                Inquiries & Proposals
              </motion.span>
              <h2 className="section-title mb-10 text-earth-light leading-tight">LET'S BUILD <br /> <span className="text-earth-secondary/40">THE FUTURE</span></h2>
              <p className="text-earth-light/40 text-2xl italic leading-relaxed max-w-lg border-l-4 border-moss-highlight/20 pl-10">
                "Whether it's a revolutionary platform or a cinematic sanctuary, let's architect it with precision and purpose."
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-16 h-16 rounded-[1.5rem] bg-earth-primary/5 flex items-center justify-center text-earth-secondary group-hover:text-moss-highlight group-hover:bg-moss-highlight/5 transition-all duration-700">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[8px] text-earth-secondary/40 mb-2">Electronic Mail</p>
                  <p className="text-earth-light text-lg font-medium group-hover:text-moss-highlight transition-colors">mohammedali@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group cursor-pointer" onClick={() => window.open('https://wa.me/9052404441')}>
                <div className="w-16 h-16 rounded-[1.5rem] bg-earth-primary/5 flex items-center justify-center text-earth-secondary group-hover:text-moss-highlight group-hover:bg-moss-highlight/5 transition-all duration-700">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[8px] text-earth-secondary/40 mb-2">Direct Messaging</p>
                  <p className="text-earth-light text-lg font-medium group-hover:text-moss-highlight transition-colors">+91 9052404441</p>
                </div>
              </div>

              <div className="flex gap-8 pt-10">
                {[
                  { icon: <FaGithub />, link: "https://github.com/MohammedAli200" },
                  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mohammed-ali-46a95a2b7/" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-[1.5rem] bg-earth-primary/5 flex items-center justify-center text-earth-secondary hover:text-moss-highlight hover:bg-moss-highlight/5 hover:-translate-y-2 transition-all duration-700"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="glow-spot -bottom-20 -left-20 w-96 h-96 bg-earth-primary/10 -z-10" />
          </div>

          <div className="card-earth border-earth-light/5 p-16 relative bg-earth-primary/[0.03]">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[10px] text-earth-secondary/60 ml-6">Full Identity</label>
                <input 
                  type="text" 
                  className="w-full bg-dark-bg/50 border border-earth-light/5 rounded-[2rem] p-8 text-earth-light focus:outline-none focus:border-moss-highlight/30 transition-all text-lg placeholder:text-earth-light/10"
                  placeholder="The name of your entity"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[10px] text-earth-secondary/60 ml-6">Digital Address</label>
                <input 
                  type="email" 
                  className="w-full bg-dark-bg/50 border border-earth-light/5 rounded-[2rem] p-8 text-earth-light focus:outline-none focus:border-moss-highlight/30 transition-all text-lg placeholder:text-earth-light/10"
                  placeholder="Where can I reach you?"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[10px] text-earth-secondary/60 ml-6">Strategic Brief</label>
                <textarea 
                  rows="5"
                  className="w-full bg-dark-bg/50 border border-earth-light/5 rounded-[2rem] p-8 text-earth-light focus:outline-none focus:border-moss-highlight/30 transition-all text-lg resize-none placeholder:text-earth-light/10"
                  placeholder="Outline your vision..."
                />
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-6 py-8 text-sm group">
                <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" /> Dispatch Signal
              </button>
            </form>
            
            <div className="glow-spot -top-20 -right-20 w-80 h-80 bg-moss-highlight/5 -z-10" />
          </div>
        </div>
      </div>
      
      {/* Footer copyright style */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-[10px] text-earth-secondary/20 whitespace-nowrap">
        © 2024 Mohammed Ali • Architectural Design
      </div>
    </section>
  );
};

export default Contact;
