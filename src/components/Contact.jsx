import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaComments, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-40 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
          <div className="space-y-20 relative">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block px-6 py-2 rounded-full border border-moss-highlight/20 bg-moss-highlight/5 mb-8"
              >
                <span className="text-moss-highlight text-[10px] uppercase font-black tracking-[10px]">Establish Connection</span>
              </motion.div>
              <h2 className="section-title mb-10 text-earth-light leading-[0.9] tracking-tighter">LET'S BUILD <br /> <span className="gradient-text">THE FUTURE</span></h2>
              <p className="text-earth-light/40 text-2xl italic leading-relaxed max-w-lg border-l-4 border-moss-highlight/20 pl-10">
                "Whether it's a revolutionary AI architecture or a cinematic digital sanctuary, let's collaborate to build something that resonates."
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-center gap-10 group cursor-pointer">
                <div className="w-20 h-20 rounded-[2rem] bg-earth-primary/5 flex items-center justify-center text-earth-secondary group-hover:text-moss-highlight group-hover:bg-moss-highlight/5 transition-all duration-700 shadow-xl border border-white/5">
                  <FaEnvelope size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[8px] text-earth-secondary/40 mb-3">Electronic Mail</p>
                  <p className="text-earth-light text-xl font-medium group-hover:text-moss-highlight transition-colors duration-500">alimohammed3731@gmail.com</p>
                </div>
              </div>

              <div 
                className="flex items-center gap-10 group cursor-pointer" 
                onClick={() => window.open('https://wa.me/9052404441')}
              >
                <div className="w-20 h-20 rounded-[2rem] bg-earth-primary/5 flex items-center justify-center text-earth-secondary group-hover:text-moss-highlight group-hover:bg-moss-highlight/5 transition-all duration-700 shadow-xl border border-white/5">
                  <FaWhatsapp size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[8px] text-earth-secondary/40 mb-3">Instant Consultation</p>
                  <p className="text-earth-light text-xl font-medium group-hover:text-moss-highlight transition-colors duration-500">+91 9052404441</p>
                </div>
              </div>

              <div className="flex gap-10 pt-12">
                {[
                  { icon: <FaGithub />, link: "https://github.com/MohammedAli200", label: "Source" },
                  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mohammed-ali-46a95a2b7/", label: "Network" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-earth-primary/5 flex items-center justify-center text-earth-secondary group-hover:text-moss-highlight group-hover:bg-moss-highlight/5 group-hover:-translate-y-2 transition-all duration-700 border border-white/5 shadow-lg">
                      {social.icon}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-earth-secondary/40 group-hover:text-moss-highlight transition-colors">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="glow-spot -bottom-20 -left-20 w-[500px] h-[500px] bg-earth-primary/10 -z-10" />
          </div>

          <div className="card-earth border-earth-light/5 p-12 md:p-20 relative bg-earth-primary/[0.03] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-6 mb-16 opacity-40">
              <FaComments className="text-moss-highlight text-3xl" />
              <h3 className="text-xs font-black uppercase tracking-[15px]">Strategic Inquiry</h3>
            </div>
            
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[10px] text-earth-secondary/60 ml-6">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark-bg/50 border border-earth-light/5 rounded-[2rem] p-8 text-earth-light focus:outline-none focus:border-moss-highlight/30 transition-all text-lg placeholder:text-earth-light/10"
                    placeholder="Entity Name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[10px] text-earth-secondary/60 ml-6">Electronic Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-dark-bg/50 border border-earth-light/5 rounded-[2rem] p-8 text-earth-light focus:outline-none focus:border-moss-highlight/30 transition-all text-lg placeholder:text-earth-light/10"
                    placeholder="mail@example.com"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[10px] text-earth-secondary/60 ml-6">Collaborative Brief</label>
                <textarea 
                  rows="6"
                  className="w-full bg-dark-bg/50 border border-earth-light/5 rounded-[2rem] p-8 text-earth-light focus:outline-none focus:border-moss-highlight/30 transition-all text-lg resize-none placeholder:text-earth-light/10"
                  placeholder="Outline your strategic vision..."
                />
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-8 py-10 text-sm group relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <FaPaperPlane className="group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700 relative z-10" /> 
                <span className="relative z-10">Dispatch Strategy</span>
              </button>
            </form>
            
            <div className="glow-spot -top-40 -right-40 w-96 h-96 bg-moss-highlight/10 -z-10" />
          </div>
        </div>
      </div>
      
      {/* Visual Identity Footer Overlay */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[20px] text-earth-secondary/10 whitespace-nowrap animate-pulse">
        MOHAMMED ALI • ARCHITECTING IMPACT
      </div>
    </section>
  );
};

export default Contact;
