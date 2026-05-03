import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaHistory } from 'react-icons/fa';

const GitHubStats = () => {
  const username = 'MohammedAli200';

  const proofPoints = [
    { label: 'Total Repos', value: '25+', icon: <FaCodeBranch /> },
    { label: 'Contributions', value: '500+', icon: <FaHistory /> },
    { label: 'Consistency', value: '99%', icon: <FaStar /> },
  ];

  return (
    <section id="github" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-[10px] mb-6 block">Proof of Work</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">
              DIGITAL <br /> <span className="gradient-text">FOOTPRINT</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg">
              Consistency is the key to mastery. My GitHub profile serves as a live ledger of my growth, experiments, and architectural breakthroughs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {proofPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-8 border-white/5 bg-white/[0.02] flex flex-col items-center text-center group"
                >
                  <div className="text-2xl text-accent mb-4 group-hover:scale-110 transition-transform">
                    {point.icon}
                  </div>
                  <h4 className="text-3xl font-black mb-1">{point.value}</h4>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{point.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <motion.a 
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[5px] text-white hover:text-accent transition-colors"
              >
                Explore Repository <FaGithub size={20} />
              </motion.a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full" />
            <div className="space-y-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="glass-panel p-2 overflow-hidden border-white/10"
              >
                <img 
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=000000&title_color=9929EA&text_color=FAEB92&icon_color=CC66DA&border_color=333333`} 
                  alt="GitHub Stats" 
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-2 overflow-hidden border-white/10"
              >
                <img 
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=000000&fire=CC66DA&ring=9929EA&stroke=9929EA&currStreakNum=FAEB92&sideNums=FAEB92&sideLabels=FAEB92&dates=FAEB92&currStreakLabel=9929EA&border=333333`} 
                  alt="GitHub Streak" 
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
