import { motion } from "framer-motion";
import profileImg from "../assets/IMG_8339.jpeg";

export default function Intro() {
  return (
    <section id="intro" className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="md:col-span-2"
        >
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
            Computer Science @ Villanova • Full-stack SWE
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            I build clean, reliable applications with React and modern backend tools.
          </h1>

          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
            I'm Owen Fox. I enjoy building end-to-end products and turning
            ideas into something people can actually use.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-2xl bg-slate-900 text-white px-5 py-2.5 font-semibold hover:opacity-90 transition dark:bg-white dark:text-slate-900"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 px-5 py-2.5 font-semibold hover:bg-slate-100 transition dark:border-slate-800 dark:hover:bg-slate-900"
            >
              Resume
            </a>
            <a
              href="https://github.com/ofox24"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 px-5 py-2.5 font-semibold hover:bg-slate-100 transition dark:border-slate-800 dark:hover:bg-slate-900"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/owen-fox-308101229/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 px-5 py-2.5 font-semibold hover:bg-slate-100 transition dark:border-slate-800 dark:hover:bg-slate-900"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={profileImg}
            alt="Photo of Owen Fox"
            className="h-44 w-44 md:h-56 md:w-56 rounded-3xl object-cover border border-slate-200 shadow-sm dark:border-slate-800"
          />
        </motion.div>
      </div>
    </section>
  );
}
