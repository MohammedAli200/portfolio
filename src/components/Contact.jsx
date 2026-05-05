import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import Magnetic from './Magnetic';

const Contact = () => {
  return (
    <section id="contact" className="py-40 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16">
            <div className="space-y-6">
              <span className="text-moss-highlight text-xs font-black uppercase tracking-[20px] block mb-8">Inquiry</span>
              <h2 className="text-[6rem] md:text-[10rem] font-black leading-[0.8] tracking-tighter">LET'S <br /> <span className="gradient-text-luxury">CONNECT</span></h2>
              <p className="text-earth-light/40 text-3xl md:text-4xl italic leading-relaxed max-w-lg border-l-8 border-moss-highlight/20 pl-12 font-medium">
                "Let's create something meaningful together."
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-10 group cursor-pointer">
                <div className="w-20 h-20 rounded-[2rem] bg-white/[0.03] flex items-center justify-center text-earth-secondary group-hover:text-moss-highlight transition-all duration-700 border border-white/5">
                  <FaEnvelope size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[8px] text-earth-secondary/40 mb-2">Digital Mail</p>
                  <p className="text-earth-light text-2xl font-medium group-hover:text-moss-highlight transition-colors">alimohammed3731@gmail.com</p>
                </div>
              </div>

              <div 
                className="flex items-center gap-10 group cursor-pointer" 
                onClick={() => window.open('https://wa.me/9052404441')}
              >
                <div className="w-20 h-20 rounded-[2rem] bg-white/[0.03] flex items-center justify-center text-earth-secondary group-hover:text-moss-highlight transition-all duration-700 border border-white/5">
                  <FaWhatsapp size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[8px] text-earth-secondary/40 mb-2">Instant Signal</p>
                  <p className="text-earth-light text-2xl font-medium group-hover:text-moss-highlight transition-colors">+91 9052404441</p>
                </div>
              </div>
            </div>

            <div className="flex gap-10 pt-10">
              {[
                { icon: <FaGithub />, link: "https://github.com/MohammedAli200" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mohammed-ali-46a95a2b7/" }
              ].map((social, i) => (
                <Magnetic key={i}>
                  <a 
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 rounded-[2rem] bg-white/[0.03] flex items-center justify-center text-earth-secondary hover:text-moss-highlight transition-all border border-white/5"
                  >
                    {social.icon}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          <div className="luxury-panel p-16 md:p-24 relative overflow-hidden">
            <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <label className="text-xs font-black uppercase tracking-[15px] text-earth-secondary/60 block">Full Identity</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b-2 border-white/5 p-6 text-earth-light focus:outline-none focus:border-moss-highlight transition-all text-2xl placeholder:text-white/[0.05]"
                  placeholder="Entity or Name"
                />
              </div>
              <div className="space-y-6">
                <label className="text-xs font-black uppercase tracking-[15px] text-earth-secondary/60 block">Digital Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b-2 border-white/5 p-6 text-earth-light focus:outline-none focus:border-moss-highlight transition-all text-2xl placeholder:text-white/[0.05]"
                  placeholder="mail@example.com"
                />
              </div>
              <div className="space-y-6">
                <label className="text-xs font-black uppercase tracking-[15px] text-earth-secondary/60 block">Strategic Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-white/5 p-6 text-earth-light focus:outline-none focus:border-moss-highlight transition-all text-2xl resize-none placeholder:text-white/[0.05]"
                  placeholder="Outline your vision..."
                />
              </div>
              <Magnetic>
                <button className="btn-magnetic w-full py-10 flex items-center justify-center gap-8 group">
                  <FaPaperPlane className="group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700" /> Dispatch Signal
                </button>
              </Magnetic>
            </form>
            
            {/* Aesthetic Overlays */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-moss-highlight/5 blur-[100px] -z-10" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[25px] text-earth-secondary/10 whitespace-nowrap">
        MOHAMMED ALI • ARCHITECTING IMPACT
      </div>
    </section>
  );
};

export default Contact;
