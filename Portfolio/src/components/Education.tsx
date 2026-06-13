import { motion } from 'motion/react';
import { BookOpen, Calendar, GraduationCap } from 'lucide-react';
import { EDUCATIONS } from '../constants';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="mb-4 text-5xl font-black tracking-tight text-slate-950 dark:text-white lg:text-6xl">
            My <span className="text-rose-500">Education</span>
          </h2>
          <div className="h-1 w-24 rounded-full bg-rose-500" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-4 top-3 bottom-3 w-0.5 bg-rose-500 dark:bg-rose-500 md:left-12" />

          {EDUCATIONS.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="relative pb-14 pl-12 last:pb-0 md:pl-28"
            >
              <div className="absolute left-4 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-50 bg-rose-500 dark:border-slate-900 md:left-12" />

              <article className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/70 dark:border-slate-700 dark:bg-slate-800 dark:shadow-none">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-5">
                    <div className="mt-1 text-rose-500">
                      {idx === 0 ? <GraduationCap size={34} strokeWidth={2.2} /> : <BookOpen size={34} strokeWidth={2.2} />}
                    </div>
                    <div>
                      <h3 className="mb-1 text-2xl font-black text-slate-950 dark:text-white">
                        {idx === 0 ? edu.institution : edu.institution.trim()}
                      </h3>
                      <h4 className="text-lg font-bold text-rose-500">
                        {idx === 0 ? edu.degree : edu.degree}
                      </h4>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 text-base text-slate-500 dark:text-slate-400">
                    <Calendar size={19} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {edu.tags.map(tag => (
                    <span key={tag} className="rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-700 dark:bg-rose-500/15 dark:text-rose-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
