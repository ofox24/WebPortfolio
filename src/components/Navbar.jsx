import { useEffect, useState } from "react";

const links = [
  { href: "#intro", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !root.classList.contains("dark");

    if (nextDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setIsDark(nextDark);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between gap-4">
        <a href="#intro" className="font-bold tracking-tight text-slate-900 dark:text-white">
          Owen Fox
        </a>

        <ul className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex rounded-xl border border-slate-200 px-3 py-1.5 text-sm font-semibold hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-900 transition"
          >
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm font-semibold hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-900 transition"
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </div>
      </div>

      <div className="md:hidden px-4 pb-3">
        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
