import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaHistory } from 'react-icons/fa';

const GitHubStats = () => {
  const username = 'MohammedAli200';

  const stats = [
    { label: 'Repos', value: '25+', icon: <FaCodeBranch /> },
    { label: 'Commits', value: '500+', icon: <FaHistory /> },
    { label: 'Growth', value: 'Active', icon: <FaStar /> },
  ];

  return (
    <section id="github" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="section-label">Build Rhythm</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-earth-light mb-10">OPEN <span className="text-moss-highlight/60">SOURCE</span></h2>
            <p className="text-earth-light/50 text-xl leading-relaxed italic border-l-2 border-moss-highlight/20 pl-8 mb-16">
              "Consistency in code is a reflection of discipline in architecture. Verified through transparent contribution metrics."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="premium-card p-8 flex flex-col items-center text-center"
                >
                  <div className="text-xl text-moss-highlight/40 mb-4">{stat.icon}</div>
                  <h4 className="text-3xl font-bold text-earth-light mb-1">{stat.value}</h4>
                  <p className="text-[9px] text-earth-secondary/60 uppercase font-black tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <a 
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[6px] text-earth-light/40 hover:text-earth-light transition-colors"
              >
                Access Source Repository <FaGithub size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-8 relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="premium-card p-4 overflow-hidden"
            >
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=0f0f0f&title_color=F3E4C9&text_color=999999&icon_color=CCD67F&border_color=333333&hide_border=true`} 
                alt="GitHub Stats" 
                className="w-full h-auto opacity-80"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.5 }}
              className="premium-card p-4 overflow-hidden"
            >
              <img 
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=0f0f0f&fire=CCD67F&ring=CCD67F&stroke=333333&currStreakNum=F3E4C9&sideNums=999999&sideLabels=999999&dates=999999&currStreakLabel=F3E4C9&border=333333&hide_border=true`} 
                alt="GitHub Streak" 
                className="w-full h-auto opacity-80"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
