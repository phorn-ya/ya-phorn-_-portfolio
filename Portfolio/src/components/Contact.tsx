import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-500 mb-4">
            <MessageSquare size={32} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg">
            Let's discuss your next project or just say hello. I'm always excited to connect with fellow developers and potential collaborators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold dark:text-white mb-6 leading-tight">Let's Start a <span className="text-rose-500">Conversation</span></h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                I'm currently available for freelance work and full-time opportunities. Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                { icon: Phone, label: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
                { icon: MapPin, label: "Location", value: CONTACT_INFO.location, href: "#" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-800 hover:bg-rose-500/5 dark:hover:bg-rose-500/10 border border-slate-100 dark:border-slate-700 group transition-all"
                >
                  <div className="w-12 h-14 rounded-2xl bg-white dark:bg-slate-700 flex items-center justify-center text-rose-500 shadow-md group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                    <p className="text-lg font-bold dark:text-white">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 flex items-center gap-4">
              <span className="text-sm font-bold uppercase tracking-widest">Follow Me</span>
              <div className="flex gap-4">
                {CONTACT_INFO.socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-rose-500 hover:text-white transition-all shadow-md"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-bold inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Internship and Freelance opportunities
            </div>
          </div>

          {/* Form Side */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 lg:p-14 bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-700"
          >
            <div className="flex items-center gap-2 mb-10 text-rose-500 font-bold">
              <div className="p-2 rounded-lg bg-rose-500/10">
                <Send size={18} />
              </div>
              <span>Send Message</span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 focus:outline-none focus:ring-4 focus:ring-rose-500/20 focus:border-rose-500 dark:text-white transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Email</label>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 focus:outline-none focus:ring-4 focus:ring-rose-500/20 focus:border-rose-500 dark:text-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Subject</label>
              <input 
                type="text" 
                placeholder="What's this about?"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 focus:outline-none focus:ring-4 focus:ring-rose-500/20 focus:border-rose-500 dark:text-white transition-all"
              />
            </div>

            <div className="space-y-2 mb-10">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your project or just say hello..."
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 focus:outline-none focus:ring-4 focus:ring-rose-500/20 focus:border-rose-500 dark:text-white transition-all resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-rose-500/25 transition-all flex items-center justify-center gap-3"
            >
              <Send size={20} />
              Send Message
            </motion.button>
            <p className="mt-6 text-center text-xs text-slate-400 font-bold">
              Usually responds within 24 hours
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
