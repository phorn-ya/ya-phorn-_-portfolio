import { motion } from 'motion/react';
import { Database, Globe2, Settings, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const CATEGORY_STYLES = [
  {
    icon: Globe2,
    accent: '#2298F2',
    card: 'from-blue-50 to-sky-50 border-blue-200 dark:from-slate-800 dark:to-slate-800 dark:border-blue-900/40',
    shadow: 'shadow-blue-200/60',
  },
  {
    icon: Terminal,
    accent: '#20BF6B',
    card: 'from-emerald-50 to-green-50 border-emerald-200 dark:from-slate-800 dark:to-slate-800 dark:border-emerald-900/40',
    shadow: 'shadow-emerald-200/60',
  },
  {
    icon: Database,
    accent: '#A855F7',
    card: 'from-purple-50 to-fuchsia-50 border-purple-200 dark:from-slate-800 dark:to-slate-800 dark:border-purple-900/40',
    shadow: 'shadow-purple-200/60',
  },
  {
    icon: Settings,
    accent: '#FF5A36',
    card: 'from-orange-50 to-amber-50 border-orange-200 dark:from-slate-800 dark:to-slate-800 dark:border-orange-900/40',
    shadow: 'shadow-orange-200/60',
  },
];

const SKILL_EMOJIS: Record<string, string> = {
  HTML5: '🌐',
  CSS3: '🎨',
  JavaScript: '⚡',
  'Vue.js': '💚',
  'React.js': '⚛️',
  'Tailwind CSS': '🌀',
  PHP: '🐘',
  Laravel: '🚀',
  'Node.js': '🌿',
  TypeScript: '🔷',
  Java: '☕',
  'Spring Boot': '🌱',
  Python: '🐍',
  MySQL: '🗄️',
  PostgreSQL: '🐘',
  LaragonSQL: '🐘',
  Git: '🌿',
  VSCode: '💻',
  Postman: '📮',
  Jira: '📋',
  'Power BI': '📊',
  'AWS Cloud': '☁️',
  WordPress: 'W',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-950 dark:text-white mb-3">
            My <span className="text-rose-500">Skills</span>
          </h2>
          <div className="mb-6 h-1 w-20 rounded-full bg-rose-500" />
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg">
            A comprehensive overview of my technical expertise and proficiency levels across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-[1.75rem] border bg-gradient-to-br p-7 shadow-xl transition-all duration-300 hover:-translate-y-2 dark:shadow-none ${CATEGORY_STYLES[idx].card} ${CATEGORY_STYLES[idx].shadow}`}
            >
              <div
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-lg"
                style={{ backgroundColor: CATEGORY_STYLES[idx].accent, boxShadow: `0 16px 32px ${CATEGORY_STYLES[idx].accent}33` }}
              >
                {(() => {
                  const CategoryIcon = CATEGORY_STYLES[idx].icon;
                  return <CategoryIcon size={28} />;
                })()}
              </div>

              <h3 className="mb-8 text-center text-lg font-black text-slate-950 dark:text-white">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="flex h-5 w-5 items-center justify-center text-base font-black">
                          {SKILL_EMOJIS[skill.name] ?? '•'}
                        </span>
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-xs font-black" style={{ color: skill.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200/80 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${skill.color}, ${CATEGORY_STYLES[idx].accent})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
