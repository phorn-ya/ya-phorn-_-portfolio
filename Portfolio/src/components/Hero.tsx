import { motion } from "motion/react";
import {
  LayoutGrid,
  MessageSquare,
  ArrowDown,
  Code2,
  Globe,
  Rocket,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../image/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-100 dark:bg-slate-900 px-6 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-5xl"
          >
            👋
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-6lg md:text-7xl lg:text-8lg font-extrabold leading-none">
            <span className="text-slate-900 dark:text-white">
              Hi, I'm
            </span>{" "}
            <span className="text-rose-500">Ya</span>{" "}
            <span className="text-rose-500">Phorn</span>
          </h1>

          {/* Subtitle */}
          <div className="mt-8">
            <h2 className="text-3xl lg:text-4xl text-slate-600 dark:text-slate-300">
              A Passionate{" "}
              <span className="text-rose-500 font-semibold">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    2000,
                    "Frontend Developer",
                    2000,
                    "UI/UX Designer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h2>

            <p className="mt-5 text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              Crafting Interactive & Meaningful Experiences
              for the Modern Web.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-bold shadow-xl shadow-rose-500/30 flex items-center gap-2 transition"
            >
              <LayoutGrid size={20} />
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white rounded-full font-bold flex items-center gap-2 transition"
            >
              <MessageSquare size={20} />
              Get In Touch
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Circle Background */}
          <div className="absolute w-[550px] h-[550px] rounded-full border border-rose-300 opacity-50" />

          {/* Floating Icons */}
          <div className="absolute top-20 left-0 bg-green-100 p-4 rounded-2xl shadow-lg rotate-12">
            <Code2 className="text-green-600" size={28} />
          </div>

          <div className="absolute top-60 -left-8 bg-blue-100 p-4 rounded-2xl shadow-lg -rotate-12">
            <Globe className="text-blue-600" size={28} />
          </div>

          <div className="absolute top-48 right-0 bg-yellow-100 p-4 rounded-2xl shadow-lg rotate-12">
            <Rocket className="text-yellow-600" size={28} />
          </div>

          {/* Image */}
          <div className="relative z-10">
            <div className="border-[8px] border-rose-500 rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="Ya Phorn"
                className="w-[420px] h-[500px] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-slate-500 dark:text-slate-400 font-medium mb-2">
          Scroll Down
        </span>

        <ArrowDown
          size={24}
          className="text-rose-500 animate-bounce"
        />
      </motion.div>
    </section>
  );
}