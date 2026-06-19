import type { Metadata } from "next";
import Link from "next/link";
import PublicationCard from "@/components/PublicationCard";
import { publications, SCHOLAR_PROFILE } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
  description: "Scientific publications by Eduardo Valentín Pérez Hernández.",
};

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.year - a.year);
  const years = Array.from(new Set(sorted.map((p) => p.year))).sort((a, b) => b - a);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          Publications
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          {publications.length} publication{publications.length !== 1 ? "s" : ""} ·{" "}
          <Link href={SCHOLAR_PROFILE} target="_blank" rel="noopener noreferrer"
            className="text-brand-600 dark:text-brand-400 hover:underline">
            Full profile on Google Scholar ↗
          </Link>
        </p>
      </div>

      <div className="space-y-12">
        {years.map((year) => (
          <div key={year}>
            <h2 className="mb-4 text-lg font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-700 pb-2">
              {year}
            </h2>
            <div className="space-y-4">
              {sorted.filter((p) => p.year === year).map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
