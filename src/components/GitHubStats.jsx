import React from 'react';
import { motion } from 'framer-motion';

const GitHubStats = () => {
  const username = 'MohammedAli200'; // Updated from user request

  return (
    <section className="py-24 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          GitHub <span className="gradient-text">Statistics</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=000000&title_color=9929EA&text_color=FAEB92&icon_color=CC66DA&border_color=333333`} 
              alt="GitHub Stats" 
              className="w-full max-w-[500px] mx-auto rounded-xl shadow-2xl border border-white/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=000000&fire=CC66DA&ring=9929EA&stroke=9929EA&currStreakNum=FAEB92&sideNums=FAEB92&sideLabels=FAEB92&dates=FAEB92&currStreakLabel=9929EA&border=333333`} 
              alt="GitHub Streak" 
              className="w-full max-w-[500px] mx-auto rounded-xl shadow-2xl border border-white/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:col-span-2"
          >
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=000000&title_color=9929EA&text_color=FAEB92&border_color=333333`} 
              alt="Top Languages" 
              className="w-full max-w-[500px] mx-auto rounded-xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
