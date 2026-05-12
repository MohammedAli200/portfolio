import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaHistory, FaCheckCircle } from 'react-icons/fa';

const GitHubStats = () => {
  const username = 'MohammedAli200';

  const stats = [
    { label: 'Total Repositories', value: '25+', icon: <FaCodeBranch /> },
    { label: 'Verified Contributions', value: '500+', icon: <FaHistory /> },
    { label: 'Status', value: 'Active', icon: <FaCheckCircle /> },
  ];

  return (
    <section id="github" className="py-24 md:py-32 px-6 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto">

        {/* Minimal Header - Consistent with Skills/Achievements */}
        <div className="mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-earth-primary font-bold tracking-[0.4em] uppercase text-xs block"
          >
            Engineering Record
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-text-primary"
          >
            Development <span className="text-earth-primary/40">Consistency</span>
          </motion.h2>
          <div className="h-1 w-20 bg-earth-primary/20 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Narrative & Quick Stats */}
          <div className="space-y-12">
            <p className="text-lg text-text-secondary/60 leading-relaxed font-medium italic border-l-4 border-earth-primary/20 pl-8 max-w-md">
              "Code is a verified record of discipline. These metrics track my growth through consistent, professional shipments."
            </p>

            <div className="border border-black/5 rounded-2xl bg-white divide-y divide-black/5 overflow-hidden">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center justify-between p-6 group hover:bg-black/[0.01] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="text-xl text-earth-primary/40 group-hover:text-earth-primary transition-colors">
                      {stat.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary/40">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-text-primary tracking-tight">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[5px] text-earth-primary/60 hover:text-earth-primary transition-all group"
              >
                Inspect GitHub Repository <FaGithub size={18} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Minimal Metrics View */}
          <div className="space-y-6">
            <div className="border border-black/5 rounded-2xl p-8 bg-white shadow-sm">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&bg_color=ffffff00&title_color=8A5F41&text_color=5a4a3f&icon_color=A77F60&border_color=00000000&hide_border=true`}
                alt="GitHub Stats"
                className="w-full h-auto opacity-80"
              />
            </div>

            <div className="border border-black/5 rounded-2xl p-8 bg-white shadow-sm">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=default&background=ffffff00&fire=8A5F41&ring=A77F60&stroke=8A5F41&currStreakNum=5a4a3f&sideNums=5a4a3f&sideLabels=5a4a3f&dates=5a4a3f&currStreakLabel=8A5F41&border=00000000&hide_border=true`}
                alt="GitHub Streak"
                className="w-full h-auto opacity-80"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GitHubStats;