import type { Metadata } from "next";
import Link from "next/link";
import PublicationCard from "@/components/PublicationCard";
import { publications, SCHOLAR_PROFILE } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Scientific publications by Eduardo Valentín Pérez Hernández — journal articles, conference papers, and more.",
};

export default function PublicationsPage() {
  // Sort newest first
  const sorted = [...publications].sort((a, b) => b.year - a.year);

  const years = Array.from(new Set(sorted.map((p) => p.year))).sort(
    (a, b) => b - a
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Publications
        </h1>
        <p className="mt-2 text-slate-500">
          {publications.length} publication{publications.length !== 1 ? "s" : ""} ·{" "}
          <Link
            href={SCHOLAR_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Full profile on Google Scholar ↗
          </Link>
        </p>
      </div>

      {publications.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-16 text-center text-slate-400">
          No publications yet. Edit{" "}
          <code className="font-mono text-sm">data/publications.ts</code> to
          add yours.
        </div>
      ) : (
        <div className="space-y-12">
          {years.map((year) => (
            <div key={year}>
              <h2 className="mb-4 text-lg font-semibold text-slate-700 border-b border-slate-100 pb-2">
                {year}
              </h2>
              <div className="space-y-4">
                {sorted
                  .filter((p) => p.year === year)
                  .map((pub) => (
                    <PublicationCard key={pub.id} pub={pub} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
