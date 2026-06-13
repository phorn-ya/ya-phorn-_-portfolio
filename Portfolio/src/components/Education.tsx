import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATIONS } from '../constants';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-500 mb-4">
            <GraduationCap size={32} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">My Education</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg mb-6">
            The academic path and training experiences that shaped my foundation in web development.
          </p>
          <div className="w-20 h-1.5 bg-rose-500 rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 lg:left-1/2 lg:-translate-x-1/2" />

          {EDUCATIONS.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="relative grid gap-6 pb-12 pl-12 last:pb-0 lg:grid-cols-[1fr_4rem_1fr] lg:gap-8 lg:pl-0"
            >
              <div className="absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-50 bg-rose-500 dark:border-slate-900 lg:left-1/2" />

              <div className={`lg:row-start-1 ${idx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-3'}`}>
                <article className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-500/10 dark:border-slate-700 dark:bg-slate-800 dark:shadow-none">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-500 to-pink-400" />
                  <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="w-fit rounded-2xl bg-rose-500 p-3 text-white shadow-lg shadow-rose-500/25">
                      <GraduationCap size={20} />
                    </div>
                    <div className="flex w-fit items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-bold text-rose-500 dark:bg-rose-500/10 lg:hidden">
                      <Calendar size={15} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-rose-500 dark:text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="mb-4 font-bold text-rose-500">{edu.institution}</h4>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map(tag => (
                      <span key={tag} className="rounded-full border border-rose-100 bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-rose-500 dark:border-rose-900/30 dark:bg-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </div>

              <div className="hidden lg:col-start-2 lg:row-start-1 lg:block" />

              <div className={`hidden lg:row-start-1 lg:flex lg:items-center ${
                idx % 2 === 0 ? 'lg:col-start-3 lg:justify-start' : 'lg:col-start-1 lg:justify-end'
              }`}>
                <div className="flex items-center gap-2 rounded-2xl border border-rose-100 bg-white px-5 py-3 text-lg font-bold text-rose-500 shadow-lg shadow-slate-200/50 dark:border-rose-900/30 dark:bg-slate-800 dark:shadow-none">
                  <Calendar size={18} />
                  <span>{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
