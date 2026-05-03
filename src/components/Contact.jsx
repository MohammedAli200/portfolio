import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaDownload, FaHandshake, FaUserPlus } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Contact Info */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-xs font-bold uppercase tracking-[5px] mb-4 block">Let's Interface</span>
            <h2 className="text-6xl font-black mb-8 uppercase tracking-tighter">
              Start a <br /><span className="gradient-text">Conversation</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed max-w-md">
              Whether you have a breakthrough idea or just want to discuss the future of tech, I'm just a ping away.
            </p>

            <div className="space-y-6 mb-16">
              {[
                { icon: <FaEnvelope />, label: "Email", value: "mohammed.ali@example.com", color: "9929EA" },
                { icon: <FaWhatsapp />, label: "WhatsApp", value: "+91 90524 04441", color: "25D366" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className={`p-5 glass-panel text-white group-hover:bg-[#${item.color}] transition-all duration-500 border-white/5`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{item.label}</p>
                    <p className="text-xl font-medium tracking-tight group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <motion.a
                href="https://wa.me/919052404441?text=Hi%20Mohammed,%20I'd%20like%20to%20hire%20you!"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 p-4 glass-panel border-neon-primary/20 text-neon-primary font-bold uppercase text-xs tracking-widest hover:bg-neon-primary/10 transition-colors"
              >
                <FaHandshake /> Hire Me
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammed-ali-46a95a2b7/"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 p-4 glass-panel border-accent/20 text-accent font-bold uppercase text-xs tracking-widest hover:bg-accent/10 transition-colors"
              >
                <FaUserPlus /> Collaborate
              </motion.a>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/MohammedAli200" target="_blank" rel="noopener noreferrer" className="p-4 glass-panel text-xl hover:text-neon-primary transition-all border-white/5 hover:border-neon-primary/50"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/mohammed-ali-46a95a2b7/" target="_blank" rel="noopener noreferrer" className="p-4 glass-panel text-xl hover:text-neon-secondary transition-all border-white/5 hover:border-neon-secondary/50"><FaLinkedin /></a>
            </div>
          </motion.div>
          
          {/* Decorative blur */}
          <div className="absolute -z-10 top-1/2 left-0 w-64 h-64 bg-neon-primary/10 blur-[100px] rounded-full" />
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-panel p-10 sm:p-14 border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent relative"
        >
          <div className="absolute top-0 right-10 w-20 h-[1px] bg-gradient-to-r from-transparent to-neon-primary" />
          <div className="absolute top-10 right-0 w-[1px] h-20 bg-gradient-to-b from-transparent to-neon-primary" />

          <form className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[3px]">Identity</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-neon-primary focus:outline-none transition-all placeholder:text-gray-700"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[3px]">Digital Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-neon-primary focus:outline-none transition-all placeholder:text-gray-700"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[3px]">Objective</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-neon-primary focus:outline-none transition-all placeholder:text-gray-700"
                placeholder="Subject of message"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[3px]">Transmission</label>
              <textarea 
                rows="4"
                className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-neon-primary focus:outline-none transition-all placeholder:text-gray-700 resize-none"
                placeholder="Detailed message..."
              ></textarea>
            </div>
            <button type="submit" className="neon-button w-full py-5 text-sm font-black uppercase tracking-[5px] shadow-[0_10px_30px_rgba(153,41,234,0.3)]">
              Initialize Send
            </button>
          </form>
        </motion.div>
      </div>

      {/* Final Resume CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <div className="inline-block relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-primary to-neon-secondary rounded-lg blur opacity-25" />
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-4 px-12 py-6 glass-panel border-white/10 text-xl font-black uppercase tracking-[8px] hover:border-accent/50 transition-all"
          >
            <FaDownload className="text-accent" /> Download Dossier
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
