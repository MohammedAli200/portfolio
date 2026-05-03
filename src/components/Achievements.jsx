import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaRocket, FaHandshake } from 'react-icons/fa';

const achievements = [
  {
    title: '1st Prize in Mini Project',
    org: 'College',
    icon: <FaTrophy className="text-yellow-400" />,
    desc: 'Awarded for developing an innovative solution using modern web technologies.'
  },
  {
    title: '3rd Prize in Hackathon',
    org: 'SRIIT College',
    icon: <FaAward className="text-orange-400" />,
    desc: 'Competed with 50+ teams to build a functional prototype within 24 hours.'
  },
  {
    title: 'Finisher – Code Vipassana',
    org: 'Season 8 Hackathon',
    icon: <FaRocket className="text-neon-primary" />,
    desc: 'Successfully completed the intensive coding marathon and project showcase.'
  },
  {
    title: 'Google Build & Blog Marathon',
    org: 'Google Dev Community',
    icon: <FaAward className="text-blue-400" />,
    desc: 'Participant and contributor to the technical blogging and building event.'
  },
];

const Achievements = () => {
  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Achievements Side */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12"
            >
              Achievements & <span className="gradient-text">Certifications</span>
            </motion.h2>

            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-panel p-6 flex items-start gap-4 border-l-4 border-l-neon-primary/50"
                >
                  <div className="text-3xl pt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-neon-primary text-sm font-medium mb-2">{item.org}</p>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Freelance Side */}
          <div id="freelance">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12"
            >
              Freelance <span className="gradient-text">Experience</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-panel p-8 relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 px-4 py-1 bg-neon-secondary text-white text-xs font-bold rounded-bl-lg">
                AVAILABLE FOR HIRE
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-neon-primary/10 rounded-2xl text-neon-primary text-4xl">
                  <FaHandshake />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Independent Developer</h3>
                  <p className="text-gray-400">Freelancing since 2023</p>
                </div>
              </div>

              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-neon-primary mt-1">▹</span>
                  <p className="text-gray-300">Started my freelance journey with a custom <span className="text-white font-medium">Photography Website</span> for a local client.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-primary mt-1">▹</span>
                  <p className="text-gray-300">Currently architecting a comprehensive <span className="text-white font-medium">College Website</span> focusing on scalability and UI.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-primary mt-1">▹</span>
                  <p className="text-gray-300">Delivering high-quality, pixel-perfect front-end solutions with a focus on user experience.</p>
                </li>
              </ul>

              <motion.a
                href="https://wa.me/your-number" // Placeholder
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neon-button inline-block w-full text-center"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
