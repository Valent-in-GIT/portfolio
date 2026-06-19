const roles = [
  {
    id: 1,
    title: "President, Student Activities Committee",
    organization: "IEEE Puebla Section",
    period: "2023 – 2025",
    description: "Led the Student Activities Committee of the IEEE Puebla Section, coordinating events, initiatives, and student engagement across the region.",
    icon: "🏛️",
  },
  {
    id: 2,
    title: "President, Student Branch",
    organization: "IEEE — Benemérita Universidad Autónoma de Puebla (BUAP)",
    period: "2022",
    description: "Led the IEEE Student Branch at BUAP, organizing technical workshops, talks, and community-building activities for engineering students.",
    icon: "🎓",
  },
  {
    id: 3,
    title: "Secretary, Computer Society Professional Chapter",
    organization: "IEEE Puebla Section",
    period: "2025",
    description: "Served as Secretary of the Computer Society Professional Chapter, supporting chapter governance.",
    icon: "💻",
  },
  {
    id: 4,
    title: "Webmaster & Social Media Chair",
    organization: "IEEE Mexican Humanitarian Technology Conference (MHTC) 2025",
    period: "2025",
    description: "Managed the conference website and social media presence, coordinating digital communications and outreach for the event.",
    icon: "🌐",
  },
];

export default function Leadership() {
  return (
    <section className="bg-slate-50 dark:bg-slate-800/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
          Leadership & Service
        </h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">IEEE roles and community contributions</p>

        <div className="mt-8 space-y-4">
          {roles.map((role) => (
            <div key={role.id}
              className="flex gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm">
              <span className="text-2xl shrink-0 mt-0.5">{role.icon}</span>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">{role.title}</h3>
                    <p className="text-sm font-medium text-brand-600 dark:text-brand-400">{role.organization}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                    {role.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
