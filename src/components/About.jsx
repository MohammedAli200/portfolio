import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-12 items-center"
      >
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              🚀 I’m a passionate Full-Stack Developer who enjoys turning ideas into real-world digital solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              💻 With a strong foundation in modern web technologies, I build scalable, user-friendly, and performance-driven applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              💡 I love hackathons and fast-paced environments where creativity meets problem-solving.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              📊 Currently exploring Data Science & AI to create smarter solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="font-semibold text-white"
            >
              🌐 Always curious. Always building. Always improving.
            </motion.p>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            {/* Animated decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-primary to-neon-secondary rounded-full opacity-20 blur-2xl animate-pulse" />
            
            {/* Content card */}
            <div className="glass-panel w-full h-full flex flex-col items-center justify-center p-8 text-center border-neon-primary/30">
              <div className="text-6xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-2">Code Enthusiast</h3>
              <p className="text-gray-400 text-sm">Building the future, one line at a time.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
