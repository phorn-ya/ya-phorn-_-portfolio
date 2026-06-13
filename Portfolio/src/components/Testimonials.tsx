import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { TESTIMONIALS } from "../constants";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () =>
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);

  const prev = () =>
    setActive(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );

  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-100 dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-rose-500">
            Testimonials
          </h2>

          <div className="w-28 h-1 bg-rose-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-10 md:p-16 min-h-[420px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Quote */}
                <Quote
                  size={60}
                  className="text-rose-500 mb-8"
                  strokeWidth={1.5}
                />

                {/* Content */}
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                  "{TESTIMONIALS[active].content}"
                </p>

                {/* Footer */}
                <div className="mt-12 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={TESTIMONIALS[active].avatar}
                      alt={TESTIMONIALS[active].name}
                      className="w-20 h-20 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {TESTIMONIALS[active].name}
                      </h4>

                      <p className="text-rose-500 font-semibold">
                        {TESTIMONIALS[active].role}
                      </p>
                    </div>
                  </div>

                  {/* Arrows */}
                  <div className="flex gap-3">
                    <button
                      onClick={prev}
                      className="w-14 h-14 rounded-full bg-rose-500 text-white flex items-center justify-center hover:scale-110 transition"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <button
                      onClick={next}
                      className="w-14 h-14 rounded-full bg-rose-500 text-white flex items-center justify-center hover:scale-110 transition"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-3 rounded-full transition-all duration-300 ${active === index
                    ? "w-10 bg-rose-500"
                    : "w-3 bg-slate-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}