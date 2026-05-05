import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div>
              <span className="section-label">Get in Touch</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-earth-light mb-8">LET'S <span className="text-moss-highlight/60">CONNECT</span></h2>
              <p className="text-earth-light/50 text-2xl italic leading-relaxed max-w-lg border-l-2 border-moss-highlight/20 pl-8">
                "Whether it's a new opportunity or a complex challenge, I'm ready to build something meaningful together."
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-earth-secondary/60 group-hover:text-moss-highlight group-hover:border-moss-highlight/30 transition-all duration-500">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-earth-secondary/40 mb-1">Electronic Mail</p>
                  <p className="text-earth-light font-medium group-hover:text-moss-highlight transition-colors">alimohammed3731@gmail.com</p>
                </div>
              </div>

              <div 
                className="flex items-center gap-6 group cursor-pointer" 
                onClick={() => window.open('https://wa.me/9052404441')}
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-earth-secondary/60 group-hover:text-moss-highlight group-hover:border-moss-highlight/30 transition-all duration-500">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-earth-secondary/40 mb-1">Direct Message</p>
                  <p className="text-earth-light font-medium group-hover:text-moss-highlight transition-colors">+91 9052404441</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 pt-6">
              {[
                { icon: <FaGithub />, link: "https://github.com/MohammedAli200" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mohammed-ali-46a95a2b7/" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-earth-secondary/40 hover:text-earth-light hover:border-earth-light transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="premium-card p-10 md:p-16 relative overflow-hidden">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[6px] text-earth-secondary/60 ml-4">Full Identity</label>
                <input 
                  type="text" 
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 text-earth-light focus:outline-none focus:border-white/20 transition-all text-base placeholder:text-white/[0.05]"
                  placeholder="The name of your entity"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[6px] text-earth-secondary/60 ml-4">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 text-earth-light focus:outline-none focus:border-white/20 transition-all text-base placeholder:text-white/[0.05]"
                  placeholder="Where can I reach you?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[6px] text-earth-secondary/60 ml-4">Collaborative Brief</label>
                <textarea 
                  rows="4"
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 text-earth-light focus:outline-none focus:border-white/20 transition-all text-base resize-none placeholder:text-white/[0.05]"
                  placeholder="Outline your vision..."
                />
              </div>
              <button className="btn-premium w-full flex items-center justify-center gap-4 py-5 text-sm group">
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[20px] text-earth-secondary/10 whitespace-nowrap">
        MOHAMMED ALI • ARCHITECTING IMPACT
      </div>
    </section>
  );
};

export default Contact;
