"use client";

import { useState } from "react";
import Link from "next/link";
import type { Publication } from "@/types";
import { cn } from "@/lib/utils";

const VENUE_BADGE: Record<Publication["venueType"], string> = {
  journal:        "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
  conference:     "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  workshop:       "bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800",
  preprint:       "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
  thesis:         "bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800",
  "book-chapter": "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
};

interface Props { pub: Publication; }

export default function PublicationCard({ pub }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm">
      <div className="flex flex-wrap items-start gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
            {pub.url ? (
              <Link href={pub.url} target="_blank" rel="noopener noreferrer"
                className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                {pub.title}
              </Link>
            ) : pub.title}
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{pub.authors.join(", ")}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-medium text-slate-700 dark:text-slate-300">{pub.venue}</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500 dark:text-slate-400">{pub.year}</span>
            {pub.citedBy !== undefined && pub.citedBy > 0 && (
              <>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500 dark:text-slate-400">Cited by {pub.citedBy}</span>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className={cn("rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize", VENUE_BADGE[pub.venueType])}>
            {pub.venueType}
          </span>
          {pub.accepted && (
            <span className="rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:text-teal-300">
              Accepted
            </span>
          )}
        </div>
      </div>

      {pub.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {pub.tags.map((t) => (
            <span key={t} className="rounded-full bg-slate-100 dark:bg-slate-700 px-2 py-0.5 text-xs text-slate-600 dark:text-slate-300">
              {t}
            </span>
          ))}
        </div>
      )}

      {pub.abstract && (
        <div className="mt-3">
          <button onClick={() => setExpanded(!expanded)}
            className="text-xs font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors">
            {expanded ? "Hide abstract ▲" : "Show abstract ▼"}
          </button>
          {expanded && (
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-slate-200 dark:border-slate-600 pl-3">
              {pub.abstract}
            </p>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-100 dark:border-slate-700 pt-3">
        {pub.doi && (
          <Link href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer"
            className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            DOI ↗
          </Link>
        )}
        {pub.arxivId && (
          <Link href={`https://arxiv.org/abs/${pub.arxivId}`} target="_blank" rel="noopener noreferrer"
            className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            arXiv ↗
          </Link>
        )}
        {pub.url && !pub.doi && (
          <Link href={pub.url} target="_blank" rel="noopener noreferrer"
            className="text-xs font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors">
            View paper ↗
          </Link>
        )}
      </div>
    </article>
  );
}
