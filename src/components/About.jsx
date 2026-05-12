import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-light-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Header & Vision */}
          <div className="space-y-12">
            <div>
              <span className="section-label-light">The Narrative</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight text-text-primary">
                A Journey of <br /> <span className="text-earth-primary/50">Purpose.</span>
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium italic border-l-2 border-earth-primary/20 pl-8">
              "Mapping the trajectory from raw curiosity to architectural mastery. Every phase is a deliberate step toward impact."
            </p>
          </div>

          {/* Minimalist Timeline/Points */}
          <div className="space-y-16">
            {[
              { 
                label: "The Origin", 
                content: "Curiosity ignited at the university lab, deconstructing engines and building foundations in Java and C." 
              },
              { 
                label: "The Ascent", 
                content: "Mastering the Full Stack at Infosys Springboard, architecting systems for 2000+ users." 
              },
              { 
                label: "The Market", 
                content: "Delivering professional-grade freelance solutions, bringing corporate rigor to creative visionaries." 
              },
              { 
                label: "The Frontier", 
                content: "Currently engineering an institutional university portal while exploring AI-driven interfaces." 
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-2 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-earth-primary/40 group-hover:bg-earth-primary transition-colors" />
                  <span className="text-[10px] font-black uppercase tracking-[6px] text-earth-secondary/40">{step.label}</span>
                </div>
                <p className="text-lg text-text-secondary/80 pl-6 leading-relaxed max-w-lg">
                  {step.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
