import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaHistory } from 'react-icons/fa';

const GitHubStats = () => {
  const username = 'MohammedAli200';

  return (
    <section id="github" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <span className="text-moss-highlight text-xs font-black uppercase tracking-[15px] mb-8 block">Artifact Repository</span>
            <h2 className="section-title mb-10 text-earth-light">BUILD <br /> <span className="text-earth-secondary/40">VELOCITY</span></h2>
            <p className="text-earth-light/40 text-xl leading-relaxed mb-16 max-w-lg italic border-l-4 border-earth-primary/20 pl-10">
              "Continuous delivery of architectural innovations, verified through open-source contribution metrics."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { label: 'Repos', value: '25+', icon: <FaCodeBranch /> },
                { label: 'Commits', value: '500+', icon: <FaHistory /> },
                { label: 'Growth', value: 'Consistent', icon: <FaStar /> },
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="card-earth p-8 border-earth-light/5 flex flex-col items-center text-center bg-earth-primary/5"
                >
                  <div className="text-2xl text-moss-highlight/40 mb-6">{point.icon}</div>
                  <h4 className="text-3xl font-black text-earth-light mb-2">{point.value}</h4>
                  <p className="text-[9px] text-earth-secondary uppercase font-black tracking-widest">{point.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16">
              <a 
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[8px] text-moss-highlight/60 hover:text-moss-highlight transition-all hover:translate-x-2"
              >
                Access Source Forge <FaGithub size={20} />
              </a>
            </div>
            
            <div className="glow-spot -top-20 -left-20 w-80 h-80 bg-moss-highlight/5 -z-10" />
          </div>

          <div className="space-y-12 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-earth-primary/[0.05] p-4 rounded-[3rem] border border-earth-light/5 hover:border-moss-highlight/30 transition-all duration-700 shadow-2xl relative"
            >
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=0f0f0f&title_color=CCD67F&text_color=F3E4C9&icon_color=A77F60&border_color=8A5F41&hide_border=false`} 
                alt="GitHub Stats" 
                className="w-full h-auto rounded-[2.5rem] opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 rounded-[3.5rem] border border-moss-highlight/5 pointer-events-none" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-earth-primary/[0.05] p-4 rounded-[3rem] border border-earth-light/5 hover:border-moss-highlight/30 transition-all duration-700 shadow-2xl relative"
            >
              <img 
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=0f0f0f&fire=CCD67F&ring=A77F60&stroke=8A5F41&currStreakNum=F3E4C9&sideNums=F3E4C9&sideLabels=A77F60&dates=A77F60&currStreakLabel=CCD67F&border=8A5F41&hide_border=false`} 
                alt="GitHub Streak" 
                className="w-full h-auto rounded-[2.5rem] opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 rounded-[3.5rem] border border-moss-highlight/5 pointer-events-none" />
            </motion.div>
            
            <div className="glow-spot -bottom-20 -right-20 w-96 h-96 bg-earth-primary/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
