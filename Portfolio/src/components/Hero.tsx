import { motion } from 'motion/react';
import { LayoutGrid, MessageSquare, ArrowDown } from 'lucide-react';
import profileImage from '../image/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-sm font-medium mb-6"
          >
            <span>👋 Hi there!</span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-6">
            Hi, I'm <span className="text-rose-500">Ya Phorn</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            A Passionate <span className="text-slate-900 dark:text-white font-semibold">Web Developer</span>
            <br />
            Crafting Interactive & Meaningful Experiences for the Modern Web
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-rose-500/25 transition-colors"
            >
              <LayoutGrid size={20} />
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 hover:border-rose-500 dark:hover:border-rose-500 rounded-2xl font-bold flex items-center gap-2 transition-all"
            >
              <MessageSquare size={20} />
              Get In Touch
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex items-center gap-2 text-slate-400 text-sm animate-bounce"
          >
            <span>Scroll Down</span>
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="relative lg:block"
        >
          <div className="relative z-10 p-4 bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl border-4 border-rose-500/10 dark:border-rose-500/20 max-w-md mx-auto transform hover:rotate-3 transition-transform duration-500">
            <img 
              src={profileImage}
              alt="Ya Phorn"
              className="w-full h-auto rounded-[2.5rem] object-cover aspect-square shadow-inner"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
