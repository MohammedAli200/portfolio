import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaHistory } from 'react-icons/fa';

const GitHubStats = () => {
  const username = 'MohammedAli200';

  return (
    <section id="github" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-gray-500 text-xs font-bold uppercase tracking-[10px] mb-6 block">Open Source</span>
            <h2 className="section-title mb-8">BUILD <br /> <span className="text-gray-500">CONSISTENCY</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg italic">
              Verification of work through active contribution and continuous repository management.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Repos', value: '25+', icon: <FaCodeBranch /> },
                { label: 'Commits', value: '500+', icon: <FaHistory /> },
                { label: 'Growth', value: 'Active', icon: <FaStar /> },
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-8 border-white/[0.03] flex flex-col items-center text-center"
                >
                  <div className="text-xl text-gray-500 mb-4">{point.icon}</div>
                  <h4 className="text-2xl font-black mb-1">{point.value}</h4>
                  <p className="text-[9px] text-gray-600 uppercase font-black tracking-widest">{point.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <a 
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[5px] text-gray-400 hover:text-white transition-colors"
              >
                Explore GitHub Profile <FaGithub size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass-panel p-2 overflow-hidden border-white/[0.05] bg-white/[0.01]"
            >
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=030303&title_color=ffffff&text_color=999999&icon_color=ffffff&border_color=333333&hide_border=true`} 
                alt="GitHub Stats" 
                className="w-full h-auto rounded-2xl opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-2 overflow-hidden border-white/[0.05] bg-white/[0.01]"
            >
              <img 
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=030303&fire=ffffff&ring=ffffff&stroke=333333&currStreakNum=ffffff&sideNums=999999&sideLabels=999999&dates=999999&currStreakLabel=ffffff&border=333333&hide_border=true`} 
                alt="GitHub Streak" 
                className="w-full h-auto rounded-2xl opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
