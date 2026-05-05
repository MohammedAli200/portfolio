import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const ResumeCTA = () => {
  return (
    <section className="py-24 px-6 bg-light-contrast/30 relative overflow-hidden">
      {/* Decorative Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="editorial-card p-10 md:p-20 text-center space-y-10 bg-white/50 backdrop-blur-xl"
        >
          <div className="space-y-4">
            <span className="section-label-light">Credentials</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              Ready to <span className="text-earth-primary/60">Collaborate?</span>
            </h2>
            <p className="text-text-secondary/60 text-lg md:text-xl max-w-2xl mx-auto italic">
              "Download my comprehensive resume to explore the technical depth and professional milestones behind my work."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-editorial flex items-center gap-4 group w-full sm:w-auto justify-center"
            >
              <FaDownload className="group-hover:translate-y-1 transition-transform" />
              Download Resume (PDF)
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline-editorial flex items-center gap-4 w-full sm:w-auto justify-center"
            >
              <FaExternalLinkAlt size={12} />
              View Online
            </motion.a>
          </div>

          <div className="pt-10 flex items-center justify-center gap-8 opacity-40">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
              <FaFilePdf className="text-earth-primary" /> PDF Format
            </div>
            <div className="w-[1px] h-4 bg-black/10" />
            <div className="text-[10px] font-black uppercase tracking-widest">
              Updated 2024
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeCTA;
