export default function Contact() {
  return (
    <section id="contact" className="py-10 pb-16">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact</h2>

      <div className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
        <p>
          Email:{" "}
          <a className="text-blue-900 underline" href="mailto:ofox@villanova.edu">
            ofox@villanova.edu
          </a>
        </p>
        <p>
          Phone:{" "}
          <a className="text-blue-900 underline" href="tel:+15165281222">
            (516) 528-1222
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a className="text-blue-900 underline" href="https://github.com/ofox24" target="_blank" rel="noreferrer">
            ofox24
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            className="text-blue-900 underline"
            href="https://www.linkedin.com/in/owen-fox-308101229/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/ofox24
          </a>
        </p>
      </div>
    </section>
  );
}
