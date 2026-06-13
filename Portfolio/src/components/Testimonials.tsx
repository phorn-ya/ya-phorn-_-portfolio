import { motion } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { useState } from 'react';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">Testimonials</h2>
          <div className="w-20 h-1.5 bg-rose-500 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden p-4">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-slate-800 p-10 lg:p-16 rounded-[3rem] shadow-2xl relative border border-slate-100 dark:border-slate-700"
            >
              <Quote size={64} className="absolute -top-4 -left-4 text-rose-500/10 rotate-12" />
              
              <div className="relative z-10">
                <p className="text-xl lg:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed italic mb-10 text-center">
                  "{TESTIMONIALS[active].content}"
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={TESTIMONIALS[active].avatar} 
                    alt={TESTIMONIALS[active].name}
                    className="w-16 h-16 rounded-full border-4 border-rose-500/20"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-bold dark:text-white leading-tight">{TESTIMONIALS[active].name}</h4>
                    <p className="text-rose-500 text-sm font-bold">{TESTIMONIALS[active].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <button 
              onClick={prev}
              className="p-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-rose-500 hover:text-white transition-all shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-rose-500 hover:text-white transition-all shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
