import { motion } from 'motion/react';
import { User, Heart, Users, Target, Search, Code2 } from 'lucide-react';
import aboutImage from '../image/about.jpg';

const BADGES = [
  { text: 'Creative Problem Solver', icon: Target },
  { text: 'Team Player', icon: Users },
  { text: 'Quick Learner', icon: Search },
  { text: 'Detail Oriented', icon: Heart },
];

export default function About() {
  return (
    <section id="about" className="py-18 px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-500 mb-4">
            <User size={32} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-rose-500 rounded-full" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[2.75rem] border-2 border-rose-500/25" />
            <div className="absolute -bottom-8 -right-8 h-44 w-44 rounded-full bg-rose-500/10 blur-2xl" />
            <div className="absolute -left-5 bottom-12 z-20 hidden rounded-2xl border border-slate-100 bg-white/90 px-5 py-4 shadow-xl shadow-slate-200/60 backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/90 dark:shadow-none sm:flex">
              <div className="mr-3 rounded-xl bg-rose-500 p-2 text-white">
                <Code2 size={18} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-rose-500">Focus</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Frontend Developer</p>
              </div>
            </div>

            <div className="relative z-10 overflow-hidden rounded-[2.75rem] border-[8px] border-white bg-slate-100 shadow-2xl shadow-slate-300/60 dark:border-slate-800 dark:bg-slate-800 dark:shadow-black/20">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/20 via-transparent to-white/10" />
              <img
                src={aboutImage}
                alt="Ya Phorn"
                className="h-[32rem] w-full object-cover object-center transition-transform duration-700 hover:scale-105 sm:h-[38rem] lg:h-[42rem]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full justify-center"
          >
            <h3 className="text-2xl font-bold dark:text-white mb-6">
              I am a passionate <span className="text-rose-500">frontend web developer</span> with a strong curiosity for technology and innovation.
            </h3>

            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-10">
              <p>
                My journey began with a fascination for how websites function, pushing me to explore deeply into the world of web development.
              </p>
              <p>
                Currently studying at Passerelles Numériques Cambodia, I thrive on building meaningful digital experiences. I am committed to transforming ideas into beautiful, functional realities.
              </p>
              <p>
                I value clean code, elegant design, and the impact of tech. When I'm not coding, you'll find me learning new frameworks, watching tech documentaries, or gaming with friends.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {BADGES.map((badge, i) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-l-4 border-rose-500 shadow-sm"
                >
                  <badge.icon size={18} className="text-rose-500" />
                  <span className="text-sm font-semibold dark:text-gray-200">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
