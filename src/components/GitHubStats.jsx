import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaHistory } from 'react-icons/fa';

const GitHubStats = () => {
  const username = 'MohammedAli200';

  const stats = [
    { label: 'Total Repos', value: '25+', icon: <FaCodeBranch /> },
    { label: 'Verified Commits', value: '500+', icon: <FaHistory /> },
    { label: 'Active Rhythm', value: 'Consistent', icon: <FaStar /> },
  ];

  return (
    <section id="github" className="py-40 px-6 bg-light-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Narrative Content */}
          <div className="space-y-12">
            <div>
              <span className="section-label-light">Build Transparency</span>
              <h2 className="text-[4rem] md:text-[5rem] font-bold tracking-tight mb-8">Architectural <br /> <span className="text-earth-primary/50">Consistency</span></h2>
              <p className="text-2xl text-text-secondary leading-relaxed max-w-lg italic border-l-4 border-earth-primary/20 pl-10">
                "Code is the artifact of discipline. My contribution metrics serve as a verified record of professional growth."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="editorial-card p-10 flex flex-col items-center text-center group"
                >
                  <div className="text-2xl text-earth-primary/40 group-hover:text-earth-primary transition-colors mb-6">{stat.icon}</div>
                  <h4 className="text-4xl font-bold text-text-primary mb-2">{stat.value}</h4>
                  <p className="text-[9px] text-text-secondary/40 uppercase font-black tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <a 
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[10px] text-earth-primary/60 hover:text-earth-primary transition-all"
              >
                Inspect Source Forge <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Visual Metrics */}
          <div className="space-y-10 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="editorial-card p-6 overflow-hidden bg-white/50 backdrop-blur-xl"
            >
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&bg_color=ffffff00&title_color=8A5F41&text_color=5a4a3f&icon_color=A77F60&border_color=00000000&hide_border=true`} 
                alt="GitHub Stats" 
                className="w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1.5 }}
              className="editorial-card p-6 overflow-hidden bg-white/50 backdrop-blur-xl"
            >
              <img 
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=default&background=ffffff00&fire=8A5F41&ring=A77F60&stroke=8A5F41&currStreakNum=5a4a3f&sideNums=5a4a3f&sideLabels=5a4a3f&dates=5a4a3f&currStreakLabel=8A5F41&border=00000000&hide_border=true`} 
                alt="GitHub Streak" 
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Background Blob */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-earth-contrast/20 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
