export default function Education() {
  return (
    <section id="education" className="py-10">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Education</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Villanova University, Villanova, PA</h3>
          <p className="text-slate-800">
            <span className="font-semibold">BS, Computer Science</span> | GPA: 3.82/4.0 (Aug 2022 - Jun 2026)
          </p>
          <p className="text-slate-700">
            Activities: Software Development Society, Programming Team, Sports Analytics Club
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Chaminade High School, New York, NY</h3>
          <p className="text-slate-700">
            GPA: 96/100 | Awards: Spanish Dictation Award, Honor Roll, National Honor Society (Graduated 2022)
          </p>
        </div>
      </div>
    </section>
  );
}
