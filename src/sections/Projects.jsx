import { motion } from "framer-motion";

const projects = [
  {
    title: "Sports Analytics Dashboard",
    description:
      "Interactive dashboard analyzing MLB stadium factors (wind, elevation, temp) vs home run rates.",
    stack: ["React", "Python", "Data Viz"],
    links: {
      github: "https://github.com/ofox24",
      live: null,
    },
  },
  {
    title: "C-Minus Compiler",
    description:
      "Compiler project with scanner + parser and JVM-compatible code generation (course project).",
    stack: ["Java", "JFlex", "jacc", "Compilers"],
    links: {
      github: "https://github.com/ofox24",
      live: null,
    },
  },
  {
    title: "Portfolio Site",
    description:
      "Personal portfolio built with React + Tailwind and deployed on Vercel, with dark mode and animations.",
    stack: ["React", "Tailwind", "Vercel"],
    links: {
      github: "https://github.com/ofox24",
      live: "https://github.com/ofox24/WebPortfolio",
    },
  },
];

function Badge({ children }) {
  return (
    <span className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-300">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projects
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            A few things I have built end-to-end. More on GitHub.
          </p>
        </div>
        <a
          href="https://github.com/ofox24"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
        >
          View GitHub →
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition dark:border-slate-800 dark:bg-slate-950"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {p.title}
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              {p.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>

            <div className="mt-5 flex gap-3 text-sm font-semibold">
              <a
                href={p.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-100 transition dark:border-slate-800 dark:hover:bg-slate-900"
              >
                GitHub
              </a>
              {p.links.live ? (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-slate-900 px-3 py-2 text-white hover:opacity-90 transition dark:bg-white dark:text-slate-900"
                >
                  Live
                </a>
              ) : (
                <span className="px-3 py-2 text-slate-500 dark:text-slate-500">
                  Live link soon
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
