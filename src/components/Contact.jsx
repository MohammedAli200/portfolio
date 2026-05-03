import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gray-500 text-xs font-bold uppercase tracking-[10px] mb-6 block"
              >
                Connect
              </motion.span>
              <h2 className="section-title mb-8 text-white">LET'S BUILD <br /> <span className="text-gray-500">TOGETHER</span></h2>
              <p className="text-gray-400 text-xl leading-relaxed italic max-w-lg">
                "Whether it's a complex system or a creative vision, I'm ready to bring it to life with purpose and precision."
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-white transition-all">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">Email</p>
                  <p className="text-white font-medium">mohammedali@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('https://wa.me/9052404441')}>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-white transition-all">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">WhatsApp</p>
                  <p className="text-white font-medium">+91 9052404441</p>
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
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel p-12 border-white/[0.03]">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[5px] text-gray-600 ml-4">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 text-white focus:outline-none focus:border-white/20 transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[5px] text-gray-600 ml-4">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 text-white focus:outline-none focus:border-white/20 transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[5px] text-gray-600 ml-4">Message</label>
                <textarea 
                  rows="5"
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 text-white focus:outline-none focus:border-white/20 transition-all resize-none"
                  placeholder="Describe your vision"
                />
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-4 py-6">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
