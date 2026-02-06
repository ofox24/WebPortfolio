export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Experience & Leadership</h2>

      <div className="space-y-6">
        <div className="rounded-3xl bg-white text-slate-900 p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Villanova Software Engineers</h3>
          <p className="text-slate-600 italic">Vice President (October 2024 - Present)</p>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-800">
            <li>Moderated and monitored user interactions for 10,000+ active users.</li>
            <li>Communicated with users and helped with bug fixes.</li>
            <li>Used personalized dashboard to track response time and user satisfaction.</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white text-slate-900 p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Programming Team</h3>
          <p className="text-slate-600 italic">Member (Fall 2022 - Present)</p>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-800">
            <li>Perfected knowledge in Leetcode/Kattis Problems, solving over 200+ problems.</li>
            <li>Collaborated with peers during meeting time to discuss problem-solving strategies, runtime complexities, and optimization techniques.</li>
            <li>Currently planning a hackathon to promote collaborative coding and problem-solving in a fun and engaging environment.</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white text-slate-900 p-6 shadow-sm">
          <h3 className="text-lg font-semibold">The Crissy Fox Foundation, Massapequa, NY</h3>
          <p className="text-slate-600 italic">Executive Director (2014 - Present)</p>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-800">
            <li>Raised $15,000+ to support families affected by cancer.</li>
            <li>Filed for 501(c)(3) tax-exemption status.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
