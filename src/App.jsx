import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4">
        <Intro />
        <Projects />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Owen Fox. Built with React + Tailwind. Deployed on Vercel.
        </div>
      </footer>
    </div>
  );
}
