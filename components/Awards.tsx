const awards = [
  {
    id: 1,
    title: "Admission by Outstanding Academic Performance",
    organization: "INAOE — M.Sc. Computer Science Program",
    year: "2024",
    description: "Admitted to the master's program based on distinguished undergraduate academic performance.",
    icon: "🏅",
  },
  {
    id: 2,
    title: "Student Travel Grant",
    organization: "IEEE Brain Discovery & Neurotechnology Workshop 2025",
    year: "Sep 12–13, 2025",
    location: "Vancouver, BC, Canada",
    description: "Competitive travel grant awarded to attend the IEEE Brain Discovery & Neurotechnology Workshop.",
    icon: "✈️",
  },
  {
    id: 3,
    title: "Student Travel Grant",
    organization: "10th Graz Brain-Computer Interface Conference 2026",
    year: "Sep 14–17, 2026",
    location: "Graz, Styria, Austria",
    description: "Competitive travel grant awarded to present research at the premier international BCI conference.",
    icon: "✈️",
  },
];

export default function Awards() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
          Awards & Grants
        </h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">Recognitions and competitive funding</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <div key={award.id}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm">
              <span className="text-2xl">{award.icon}</span>
              <h3 className="mt-3 font-semibold text-slate-900 dark:text-slate-100 leading-snug">{award.title}</h3>
              <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">{award.organization}</p>
              {award.location && (
                <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">📍 {award.location}</p>
              )}
              <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">{award.year}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
