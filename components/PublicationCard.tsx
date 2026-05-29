"use client";

import { useState } from "react";
import Link from "next/link";
import type { Publication } from "@/types";
import { cn } from "@/lib/utils";

const VENUE_BADGE: Record<Publication["venueType"], string> = {
  journal:    "bg-emerald-50  text-emerald-700  border-emerald-200",
  conference: "bg-blue-50     text-blue-700     border-blue-200",
  workshop:   "bg-violet-50   text-violet-700   border-violet-200",
  preprint:   "bg-amber-50    text-amber-700    border-amber-200",
  thesis:     "bg-rose-50     text-rose-700     border-rose-200",
};

interface Props {
  pub: Publication;
}

export default function PublicationCard({ pub }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Top row */}
      <div className="flex flex-wrap items-start gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 leading-snug">
            {pub.url ? (
              <Link
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-600 transition-colors"
              >
                {pub.title}
              </Link>
            ) : (
              pub.title
            )}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {pub.authors.join(", ")}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-medium text-slate-700">{pub.venue}</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500">{pub.year}</span>
            {pub.citedBy !== undefined && pub.citedBy > 0 && (
              <>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">Cited by {pub.citedBy}</span>
              </>
            )}
          </div>
        </div>

        {/* Venue type badge */}
        <span
          className={cn(
            "shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize",
            VENUE_BADGE[pub.venueType]
          )}
        >
          {pub.venueType}
        </span>
      </div>

      {/* Tags */}
      {pub.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {pub.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Abstract toggle */}
      {pub.abstract && (
        <div className="mt-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            {expanded ? "Hide abstract ▲" : "Show abstract ▼"}
          </button>
          {expanded && (
            <p className="mt-2 text-sm text-slate-600 leading-relaxed border-l-2 border-slate-200 pl-3">
              {pub.abstract}
            </p>
          )}
        </div>
      )}

      {/* Links */}
      <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-100 pt-3">
        {pub.doi && (
          <Link
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            DOI ↗
          </Link>
        )}
        {pub.arxivId && (
          <Link
            href={`https://arxiv.org/abs/${pub.arxivId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            arXiv ↗
          </Link>
        )}
        {pub.url && !pub.doi && (
          <Link
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            View paper ↗
          </Link>
        )}
      </div>
    </article>
  );
}
