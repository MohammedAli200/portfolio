// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// const projects = [
//   {
//     title: "AI Synthesis Platform",
//     category: "Intelligence Interface",
//     description: "An advanced digital infrastructure leveraging Gemini AI and Firebase for real-time institutional insight generation. This featured system streamlines complex data processing through a conversational AI layer.",
//     tech: ["React", "Gemini", "Firebase", "Tailwind"],
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
//     featured: true
//   },
//   {
//     title: "Cinematic Visuals",
//     category: "High-End Portfolio",
//     description: "A high-performance sanctuary for visual arts, designed with a focus on refined motion and clean editorial aesthetics.",
//     tech: ["Framer", "React", "CSS"],
//     image: "https://images.unsplash.com/photo-1452581764120-0433290680dc?auto=format&fit=crop&q=80&w=1000",
//     featured: false
//   },
//   {
//     title: "Institutional Portal",
//     category: "Full Stack System",
//     description: "A scalable modular system architected for student resource streamlining and academic management.",
//     tech: ["Node", "MongoDB", "React"],
//     image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000",
//     featured: false
//   },
//   {
//     title: "Eco-Track System",
//     category: "Sustainability Tool",
//     description: "Real-time carbon footprint monitoring dashboard built with focused performance and clear data visualization.",
//     tech: ["Chart.js", "Express", "React"],
//     image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
//     featured: false
//   }
// ];

// const ProjectCard = ({ project, isFeatured }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8, ease: "easeOut" }}
//     viewport={{ once: true }}
//     className={`editorial-card group overflow-hidden ${isFeatured ? 'lg:flex gap-12' : ''}`}
//   >
//     <div className={`relative overflow-hidden ${isFeatured ? 'lg:w-3/5 h-[250px] sm:h-[400px] lg:h-[500px]' : 'aspect-video'}`}>
//       <img 
//         src={project.image} 
//         alt={project.title} 
//         className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
//       />
//       <div className="absolute top-6 right-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
//         <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 flex items-center justify-center text-text-primary hover:bg-earth-primary hover:text-white transition-all shadow-lg">
//           <FaGithub size={18} />
//         </a>
//         <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 flex items-center justify-center text-text-primary hover:bg-earth-primary hover:text-white transition-all shadow-lg">
//           <FaExternalLinkAlt size={16} />
//         </a>
//       </div>
//     </div>

//     <div className={`p-6 md:p-10 flex flex-col justify-center ${isFeatured ? 'lg:w-2/5 space-y-6 md:space-y-8' : 'space-y-4 md:space-y-6'}`}>
//       <div className="space-y-2">
//         <span className="text-[10px] font-black uppercase tracking-widest text-earth-secondary/60 block">{project.category}</span>
//         <h3 className={`${isFeatured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} font-bold group-hover:text-earth-primary transition-colors tracking-tight`}>
//           {project.title}
//         </h3>
//       </div>
//       <p className="text-text-secondary/70 leading-relaxed italic text-base md:text-lg">
//         "{project.description}"
//       </p>
//       <div className="flex flex-wrap gap-2 md:gap-3 pt-6 border-t border-black/5">
//         {project.tech.map(t => (
//           <span key={t} className="px-3 py-1 bg-light-contrast/30 text-[9px] font-black uppercase tracking-widest text-text-secondary/60 rounded-md">
//             {t}
//           </span>
//         ))}
//       </div>
//     </div>
//   </motion.div>
// );

// const Projects = () => {
//   const featured = projects.find(p => p.featured);
//   const others = projects.filter(p => !p.featured);

//   return (
//     <section id="projects" className="py-24 md:py-40 px-6 bg-light-contrast/10 relative">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-20 md:mb-32">
//           <span className="section-label-light">The Showcase</span>
//           <h2 className="text-[2.5rem] md:text-[5rem] font-bold tracking-tight">Curated <span className="text-earth-primary/50">Creations</span></h2>
//         </div>

//         <div className="space-y-12 md:space-y-20">
//           {/* Featured Project */}
//           {featured && <ProjectCard project={featured} isFeatured={true} />}

//           {/* Grid Layout for others */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//             {others.map((project, index) => (
//               <ProjectCard key={index} project={project} isFeatured={false} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "NESTANA",
    category: "Full Stack Collaboration",
    description: "A student-centric networking ecosystem featuring secure Clerk authentication and dynamic community engagement. Awarded 1st Prize for innovation in departmental engineering showcases.",
    tech: ["MongoDB", "Express", "React", "Node", "Clerk"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/MohammedAli200/NESTANA.git",
    external: "#",
    featured: true
  },
  {
    title: "Student Shield",
    category: "Health Analytics",
    description: "A predictive mental health dashboard utilizing dynamic data visualization to identify academic risk factors and facilitate campus resource management. Secured 3rd place in a regional hackathon.",
    tech: ["React", "Chart.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/MohammedAli200/Student-Shield.git",
    external: "#",
    featured: false
  },
  {
    title: "Fest Management",
    category: "Event Infrastructure",
    description: "A high-traffic registration engine for institutional festivals, integrated with Cloudinary for seamless media handling and automated validation workflows for 500+ participants.",
    tech: ["MERN Stack", "Cloudinary", "Vercel"],
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/MohammedAli200/presto-cse-fest",
    external: "https://presto-cse-fest.vercel.app",
    featured: false
  },
  {
    title: "Studio Management",
    category: "Professional Services",
    description: "An automated collaboration suite for creative studios, streamlining client communication through WhatsApp/Email API integration and high-performance media galleries.",
    tech: ["React", "Tailwind", "WhatsApp API", "Render"],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/MohammedAli200/vasu_studioz_atp.git",
    external: "https://vasu-studioz-atp.vercel.app/",
    featured: false
  }
];

const ProjectCard = ({ project, isFeatured }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className={`editorial-card group overflow-hidden bg-white/50 backdrop-blur-sm rounded-2xl ${isFeatured ? 'lg:flex gap-12' : ''}`}
  >
    <div className={`relative overflow-hidden ${isFeatured ? 'lg:w-3/5 h-[300px] md:h-[450px] lg:h-[550px]' : 'aspect-video'}`}>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      <div className="absolute top-6 right-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
        <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-text-primary hover:bg-earth-primary hover:text-white transition-all shadow-xl">
          <FaGithub size={20} />
        </a>
        <a href={project.external} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-text-primary hover:bg-earth-primary hover:text-white transition-all shadow-xl">
          <FaExternalLinkAlt size={18} />
        </a>
      </div>
    </div>

    <div className={`p-8 md:p-12 flex flex-col justify-center ${isFeatured ? 'lg:w-2/5 space-y-6' : 'space-y-4'}`}>
      <div className="space-y-3">
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-earth-secondary/80 block border-l-2 border-earth-primary pl-3">{project.category}</span>
        <h3 className={`${isFeatured ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'} font-bold group-hover:text-earth-primary transition-colors tracking-tight leading-none`}>
          {project.title}
        </h3>
      </div>
      <p className="text-text-secondary/80 leading-relaxed text-base md:text-lg font-medium">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 pt-6 border-t border-black/10">
        {project.tech.map(t => (
          <span key={t} className="px-4 py-1.5 bg-black/5 text-[10px] font-bold uppercase tracking-wider text-text-secondary rounded-full">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const featured = projects.find(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 md:py-48 px-6 bg-[#f8f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:mb-40">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-earth-primary font-bold tracking-[0.3em] uppercase text-xs block mb-4"
          >
            Engineering Portfolio
          </motion.span>
          <h2 className="text-[3rem] md:text-[6rem] font-extrabold tracking-tighter leading-none">
            Technical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-earth-primary to-earth-secondary/40">Shipments</span>
          </h2>
        </div>

        <div className="space-y-16 md:space-y-32">
          {featured && <ProjectCard project={featured} isFeatured={true} />}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {others.map((project, index) => (
              <ProjectCard key={index} project={project} isFeatured={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;