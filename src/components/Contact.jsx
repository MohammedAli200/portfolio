import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaDownload } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h2>
          <p className="text-gray-400 mb-12 text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out! 
            I'm always open to new opportunities and collaborations.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 group">
              <div className="p-4 glass-panel text-neon-primary group-hover:text-white group-hover:bg-neon-primary transition-all duration-300">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Email</p>
                <p className="text-xl font-medium">mohammed.ali@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-4 glass-panel text-[#25D366] group-hover:text-white group-hover:bg-[#25D366] transition-all duration-300">
                <FaWhatsapp />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">WhatsApp</p>
                <p className="text-xl font-medium">+91 00000 00000</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="p-4 glass-panel text-2xl hover:text-neon-primary transition-colors"><FaGithub /></a>
            <a href="#" className="p-4 glass-panel text-2xl hover:text-neon-secondary transition-colors"><FaLinkedin /></a>
          </div>

          {/* Resume Section */}
          <div id="resume" className="mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 flex items-center justify-between border-neon-primary/20"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">My Resume</h3>
                <p className="text-gray-400 text-sm">Download my latest CV to see full details.</p>
              </div>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neon-button flex items-center gap-2 animate-pulse hover:animate-none"
              >
                <FaDownload /> Download
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-panel p-8"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-neon-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Your Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-neon-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Subject</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-neon-primary focus:outline-none transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea 
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-neon-primary focus:outline-none transition-colors"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button type="submit" className="neon-button w-full text-lg">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
