import { motion, useScroll, useTransform } from 'motion/react';
import { Sun, Moon, Download } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Interests', href: '#interests' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggle } = useDarkMode();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)']
  );

  const shadow = useTransform(
    scrollY,
    [0, 100],
    ['none', '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)']
  );

  return (
    <motion.nav
      style={{ backgroundColor, boxShadow: shadow }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-shadow duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-shrink-0"
        >
          <a href="#home" className="text-xl font-bold font-sans dark:text-white">
            Ya <span className="text-rose-500">Phorn</span>
          </a>
        </motion.div>

        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            id="theme-toggle"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.a
            href="/Phorn-Ya-Resume.pdf"
            download="Phorn-Ya-Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center space-x-2 bg-rose-500 hover:bg-rose-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-rose-500/20"
            id="download-cv"
          >
            <Download size={18} />
            <span>Download CV</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
