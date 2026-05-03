import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell 
} from 'recharts';
import { FaChartLine, FaUsers, FaMousePointer, FaProjectDiagram, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    visits: [],
    clicks: {},
    totalVisits: 0,
  });

  useEffect(() => {
    // Load data from localStorage (mock database)
    const analytics = JSON.parse(localStorage.getItem('portfolio-analytics') || '{}');
    const visits = analytics.visits || [];
    const clicks = analytics.clicks || {};
    
    // Process visit data for chart
    const processedVisits = visits.slice(-7).map(v => ({
      date: new Date(v.timestamp).toLocaleDateString(),
      count: 1
    }));

    setStats({
      visits: processedVisits,
      clicks: clicks,
      totalVisits: visits.length
    });
  }, []);

  const clickData = Object.entries(stats.clicks).map(([key, value]) => ({
    name: key,
    value: value
  }));

  const COLORS = ['#9929EA', '#CC66DA', '#FAEB92', '#00f3ff', '#ff00ff'];

  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <FaArrowLeft /> Back to Site
          </Link>
          <h1 className="text-3xl font-black uppercase tracking-widest gradient-text">Command Center</h1>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Total Visits', value: stats.totalVisits, icon: <FaUsers />, color: 'neon-primary' },
            { label: 'Avg Session', value: '4m 32s', icon: <FaChartLine />, color: 'neon-secondary' },
            { label: 'Interaction Rate', value: '68%', icon: <FaMousePointer />, color: 'accent' },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-8 border-white/5 bg-white/[0.02]">
              <div className="flex justify-between items-start mb-4">
                <div className={`text-2xl text-${stat.color}`}>{stat.icon}</div>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Real-time</span>
              </div>
              <h3 className="text-4xl font-black mb-1">{stat.value}</h3>
              <p className="text-xs text-gray-500 uppercase font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traffic Chart */}
          <div className="glass-panel p-8 border-white/5 bg-white/[0.02]">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest flex items-center gap-2">
              <FaChartLine className="text-neon-primary" /> Traffic Analytics
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={stats.visits}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="date" stroke="#555" fontSize={10} />
                  <YAxis stroke="#555" fontSize={10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)' }}
                    itemStyle={{ color: '#9929EA' }}
                  />
                  <Line type="monotone" dataKey="count" stroke="#9929EA" strokeWidth={3} dot={{ fill: '#FAEB92' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Interaction Chart */}
          <div className="glass-panel p-8 border-white/5 bg-white/[0.02]">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest flex items-center gap-2">
              <FaProjectDiagram className="text-neon-secondary" /> Feature Interaction
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={clickData}>
                  <XAxis dataKey="name" stroke="#555" fontSize={10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                  <Bar dataKey="value">
                    {clickData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
