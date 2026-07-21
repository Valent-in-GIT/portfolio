import Link from "next/link";

interface Talk {
  title: string;
  event: string;
  institution: string;
  advisor?: string;
  year: number;
  description: string;
  videoUrl?: string;
  tags: string[];
}

const talks: Talk[] = [
  {
    title: "Computer Vision: Human Pose Estimation",
    event: "Academic Symposium — Mathematics Applications",
    institution: "Benemérita Universidad Autónoma de Puebla",
    advisor: "Dr. José Rubén Conde Sánchez",
    year: 2021,
    description:
      "Presentation on human pose estimation through artificial intelligence methods. Covered theoretical foundations and real-world applications ranging from character animation to clinical gait pathology analysis.",
    videoUrl: "https://www.youtube.com/watch?v=VdlTqihHAwY",
    tags: ["Computer Vision", "AI", "Pose Estimation"],
  },
  {
    title: "Precision Agriculture: Fruit Classification with Pattern Recognition",
    event: "Academic Symposium — Mathematics Applications",
    institution: "Benemérita Universidad Autónoma de Puebla",
    advisor: "Dr. José Rubén Conde Sánchez",
    year: 2021,
    description:
      "Presentation on pattern recognition techniques for fruit classification, evaluating KNN, Naïve Bayes, and multilayer neural networks as classification models.",
    videoUrl: "https://www.youtube.com/watch?v=v5yvOETcrfY",
    tags: ["Pattern Recognition", "Machine Learning", "Computer Vision"],
  },
];

export default function Talks() {
  return (
    <section className="bg-slate-50 dark:bg-slate-800/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
          Talks & Presentations
        </h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Academic presentations and invited talks
        </p>

        <div className="mt-8 space-y-4">
          {talks.map((talk, i) => (
            <article
              key={i}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                    {talk.videoUrl ? (
                      <Link
                        href={talk.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                      >
                        {talk.title}
                      </Link>
                    ) : (
                      talk.title
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {talk.event} · {talk.institution}
                  </p>
                  {talk.advisor && (
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                      Advisor: {talk.advisor}
                    </p>
                  )}
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {talk.description}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {talk.year}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                {talk.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 dark:bg-slate-700 px-2 py-0.5 text-xs text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
                {talk.videoUrl && (
                  <Link
                    href={talk.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 transition-colors"
                  >
                    Watch ↗
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
