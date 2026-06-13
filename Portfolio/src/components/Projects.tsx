import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const CATEGORIES: (Project['category'] | 'All')[] = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Design', 'Software'];

export default function Projects() {
  const [filter, setFilter] = useState<Project['category'] | 'All'>('All');

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-500 mb-4">
            <Briefcase size={32} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg mb-10">
            A showcase of my work across different technologies and domains.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none"
              >
                {/* Image Container */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-3">
                      {project.links.github && (
                        <a href={project.links.github} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-rose-500 transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a href={project.links.demo} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-rose-500 transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm dark:bg-slate-900/90 rounded-full text-[10px] font-black uppercase tracking-wider text-rose-500 shadow-sm">
                    {project.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="text-xs font-bold text-rose-500 uppercase tracking-widest block mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold dark:text-white mb-3 group-hover:text-rose-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-[11px] font-bold text-slate-500 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
