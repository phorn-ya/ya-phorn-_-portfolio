import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-500 mb-4">
            <Award size={32} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">My Skills</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg">
            A comprehensive overview of my technical expertise and proficiency levels across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700"
            >
              <h3 className="text-xl font-bold dark:text-white mb-8 border-b border-slate-100 dark:border-slate-700 pb-4">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon size={16} style={{ color: skill.color }} />
                        <span className="text-sm font-bold dark:text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-xs font-bold text-rose-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-rose-500 to-rose-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
