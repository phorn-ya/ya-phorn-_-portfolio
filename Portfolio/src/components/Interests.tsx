import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { INTERESTS } from '../constants';

export default function Interests() {
  return (
    <section id="interests" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-500 mb-4">
            <Heart size={32} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">My Interests</h2>
          <div className="w-20 h-1.5 bg-rose-500 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {INTERESTS.map((interest, idx) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-10 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 hover:border-rose-500 dark:hover:border-rose-500 transition-all duration-300 shadow-xl shadow-slate-200/50 dark:shadow-none text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-2xl bg-white dark:bg-slate-700 flex items-center justify-center text-rose-500 shadow-lg group-hover:scale-110 transition-transform mb-8">
                <interest.icon size={32} />
              </div>
              <h3 className="text-xl font-bold dark:text-white mb-4 group-hover:text-rose-500 transition-colors">
                {interest.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
