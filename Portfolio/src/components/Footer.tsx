import { Heart, Coffee, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h3 className="text-3xl font-black mb-6 dark:text-white">
              Ya <span className="text-rose-500">Phorn</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-sm mb-8 font-medium">
              Passionate about creating meaningful digital experiences through clean code, innovative design, and cutting-edge technology. Always learning, always growing.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest px-4 py-2 border rounded-full border-slate-100 dark:border-slate-800">
                <ShieldCheck size={14} className="text-emerald-500" />
                Clean Code
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest px-4 py-2 border rounded-full border-slate-100 dark:border-slate-800">
                <Coffee size={14} className="text-amber-500" />
                Fueled by Coffee
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['About', 'Skills', 'Projects', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-600 dark:text-slate-400 font-bold hover:text-rose-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-8">Let's Connect</h4>
            <ul className="space-y-4">
              {CONTACT_INFO.socials.map(social => (
                <li key={social.name}>
                  <a href={social.link} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-bold hover:text-rose-500 transition-colors group">
                    <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-20 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-400 text-sm font-bold">
            © {new Date().getFullYear()} Ya Phorn. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-sm font-bold">
            Made with <Heart size={14} className="text-rose-500 fill-rose-500" /> and lots of <Coffee size={14} className="text-amber-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
