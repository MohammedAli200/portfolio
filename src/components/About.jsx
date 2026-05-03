import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const timeline = [
  {
    year: '2023',
    title: 'The Journey Begins',
    description: 'Started exploring the world of web development, mastering HTML, CSS, and JavaScript.',
    icon: <FaCode />,
    side: 'left'
  },
  {
    year: '2023',
    title: 'First Freelance Win',
    description: 'Successfully delivered a custom photography portfolio, marking my entry into professional freelancing.',
    icon: <FaLaptopCode />,
    side: 'right'
  },
  {
    year: '2024',
    title: 'Hackathon Success',
    description: 'Won multiple awards in college hackathons, solidifying my problem-solving and rapid prototyping skills.',
    icon: <FaRocket />,
    side: 'left'
  },
  {
    year: 'Present',
    title: 'Expanding Horizons',
    description: 'Currently building large-scale institutional platforms and exploring the frontiers of AI & Data Science.',
    icon: <FaGraduationCap />,
    side: 'right'
  }
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-xs font-bold uppercase tracking-[5px] mb-4 block">Our Narrative</span>
            <h2 className="text-6xl font-black mb-8 uppercase tracking-tighter">
              Engineering <br /> <span className="gradient-text">Experiences</span>
            </h2>

            <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
              <p>
                🚀 I’m <span className="text-white font-bold">Mohammed Ali</span>, a Full-Stack Developer driven by the challenge of turning complex problems into elegant digital solutions. 
                I don’t just build websites; I craft experiences that resonate with users and drive impact.
              </p>
              <p>
                💡 My approach is rooted in a <span className="text-neon-primary font-bold">Hackathon Mindset</span>—fast-paced, innovative, and always focused on the "how" and "why" behind the code.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="glass-panel p-6 border-white/5">
                  <h4 className="text-neon-primary font-bold text-3xl mb-1">15+</h4>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Projects Completed</p>
                </div>
                <div className="glass-panel p-6 border-white/5">
                  <h4 className="text-neon-secondary font-bold text-3xl mb-1">2+</h4>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative z-10 glass-panel p-10 border-white/5 bg-gradient-to-br from-white/5 to-transparent"
            >
              <div className="text-5xl text-accent mb-6"><FaLaptopCode /></div>
              <h3 className="text-3xl font-bold mb-4 uppercase">The Mission</h3>
              <p className="text-gray-400 italic">
                "To build scalable, intelligent applications that bridge the gap between human imagination and digital reality. Currently diving deep into AI to make software that thinks as well as it performs."
              </p>
            </motion.div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-primary/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-secondary/20 blur-3xl rounded-full" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-black uppercase tracking-widest">Evolution <span className="text-accent">Timeline</span></h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

            <div className="space-y-16 md:space-y-0">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center justify-between md:mb-20 w-full ${
                    item.side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  <div className="hidden md:block w-5/12" />
                  
                  {/* Icon */}
                  <div className="absolute left-[-20px] md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-black border border-white/10 rounded-full flex items-center justify-center text-accent z-10 shadow-[0_0_15px_rgba(250,235,146,0.3)]">
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div className="w-full md:w-5/12 glass-panel p-8 border-white/5 hover:border-accent/30 transition-colors ml-10 md:ml-0">
                    <span className="text-accent text-xs font-bold mb-2 block">{item.year}</span>
                    <h4 className="text-xl font-bold mb-2 uppercase">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
