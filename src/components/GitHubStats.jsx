import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaHistory, FaProjectDiagram } from 'react-icons/fa';

const GitHubStats = () => {
  const username = 'MohammedAli200';

  const stats = [
    { label: 'Total Repos', value: '25+', icon: <FaCodeBranch />, delay: 0.1 },
    { label: 'Commits (2024)', value: '500+', icon: <FaHistory />, delay: 0.2 },
    { label: 'Active Projects', value: '12+', icon: <FaProjectDiagram />, delay: 0.3 },
  ];

  return (
    <section id="github" className="py-40 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-6 py-2 rounded-full border border-moss-highlight/20 bg-moss-highlight/5 mb-8"
            >
              <span className="text-moss-highlight text-[10px] uppercase font-black tracking-[10px]">Open Source Identity</span>
            </motion.div>
            <h2 className="section-title mb-10 text-earth-light leading-none">BUILD <br /> <span className="gradient-text">CONSISTENCY</span></h2>
            <p className="text-earth-light/40 text-xl leading-relaxed mb-16 max-w-lg italic border-l-4 border-earth-primary/20 pl-10">
              "My code is my legacy. I maintain a rigorous build rhythm to ensure every architectural artifact is polished and performant."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: stat.delay, duration: 0.8, type: "spring" }}
                  viewport={{ once: true }}
                  className="card-earth p-8 border-earth-light/5 flex flex-col items-center text-center bg-earth-primary/[0.03] group hover:border-moss-highlight/30 transition-all duration-500"
                >
                  <div className="text-3xl text-moss-highlight/40 group-hover:text-moss-highlight group-hover:scale-110 transition-all duration-500 mb-6">{stat.icon}</div>
                  <h4 className="text-4xl font-black text-earth-light mb-2">{stat.value}</h4>
                  <p className="text-[10px] text-earth-secondary/60 uppercase font-black tracking-[3px]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16">
              <a 
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-6 text-[11px] font-black uppercase tracking-[8px] text-moss-highlight/60 hover:text-moss-highlight transition-all"
              >
                Inspect Forge Repository <FaGithub size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
            
            <div className="glow-spot -top-20 -left-20 w-80 h-80 bg-moss-highlight/5 -z-10" />
          </div>

          <div className="space-y-12 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="bg-earth-primary/[0.03] p-4 rounded-[4rem] border border-earth-light/5 hover:border-moss-highlight/30 transition-all duration-1000 shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden group"
            >
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=0f0f0f&title_color=CCD67F&text_color=F3E4C9&icon_color=A77F60&border_color=8A5F41&hide_border=true`} 
                alt="GitHub Stats" 
                className="w-full h-auto rounded-[3.5rem] opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
              />
              {/* Overlay highlight */}
              <div className="absolute inset-0 bg-moss-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="bg-earth-primary/[0.03] p-4 rounded-[4rem] border border-earth-light/5 hover:border-moss-highlight/30 transition-all duration-1000 shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden group"
            >
              <img 
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=0f0f0f&fire=CCD67F&ring=A77F60&stroke=8A5F41&currStreakNum=F3E4C9&sideNums=F3E4C9&sideLabels=A77F60&dates=A77F60&currStreakLabel=CCD67F&border=8A5F41&hide_border=true`} 
                alt="GitHub Streak" 
                className="w-full h-auto rounded-[3.5rem] opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-moss-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            
            <div className="glow-spot -bottom-20 -right-20 w-96 h-96 bg-earth-primary/10 -z-10" />
          </div>
        </div>
      </div>
      
      {/* Background Cinematic Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none -z-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </section>
  );
};

export default GitHubStats;
