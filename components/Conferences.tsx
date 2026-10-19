"use client";

import Link from "next/link";
import { conferences } from "@/data/conferences";
import type { Conference } from "@/types";

const STATUS_CONFIG = {
  "cfp-open":  { label: "CFP Open",  classes: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800" },
  "upcoming":  { label: "Upcoming",  classes: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800" },
  "past":      { label: "Past",      classes: "bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-700 dark:text-slate-400 dark:border-slate-600" },
  "tba":       { label: "TBA",       classes: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800" },
} as const;

function daysUntil(isoDate: string): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(isoDate);
  return Math.ceil((target.getTime() - now.getTime()) / 86_400_000);
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
}

function formatDateRange(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  const sameYear = s.getFullYear() === e.getFullYear();
  const sameMonth = sameYear && s.getMonth() === e.getMonth();

  const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
  if (sameMonth) {
    return `${s.toLocaleDateString("en-US", opts)}–${e.getDate()}, ${e.getFullYear()}`;
  }
  return `${s.toLocaleDateString("en-US", opts)} – ${e.toLocaleDateString("en-US", { ...opts, year: "numeric" })}`;
}

function DeadlineChip({ label, date }: { label: string; date: string }) {
  const days = daysUntil(date);
  const past = days < 0;

  let urgency = "bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400";
  if (!past) {
    if (days <= 14) urgency = "bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800";
    else if (days <= 45) urgency = "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800";
    else urgency = "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800";
  }

  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-slate-400 dark:text-slate-500">{label}</span>
      <span className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium ${urgency}`}>
        <span>📅</span>
        <span>{formatDate(date)}</span>
        {!past && (
          <span className="font-semibold">· {days}d left</span>
        )}
        {past && <span className="opacity-60">(passed)</span>}
      </span>
    </div>
  );
}

function ConferenceCard({ conf }: { conf: Conference }) {
  const status = STATUS_CONFIG[conf.status];
  const isPast = conf.status === "past";

  return (
    <article className={`rounded-xl border bg-white dark:bg-slate-800 p-5 shadow-sm flex flex-col gap-4 transition-opacity ${isPast ? "opacity-60 border-slate-200 dark:border-slate-700" : "border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-700"}`}>
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${status.classes}`}>
              {status.label}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">{conf.acronym}</span>
            <span className="text-xs text-slate-300 dark:text-slate-600">·</span>
            <span className="text-xs text-slate-400 dark:text-slate-500 capitalize">{conf.frequency}</span>
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
            <Link
              href={conf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              {conf.shortName} ↗
            </Link>
          </h3>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-snug">{conf.fullName}</p>
        </div>
      </div>

      {/* Conference date & location */}
      {conf.conferenceDate && (
        <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
          <span className="mt-0.5 shrink-0">🗓️</span>
          <div>
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {formatDateRange(conf.conferenceDate.start, conf.conferenceDate.end)}
            </span>
            <span className="mx-1.5 text-slate-300 dark:text-slate-600">·</span>
            <span>📍 {conf.conferenceDate.city}, {conf.conferenceDate.country}</span>
          </div>
        </div>
      )}

      {/* Deadlines */}
      {conf.deadlines && conf.deadlines.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {conf.deadlines.map((d) => (
            <DeadlineChip key={d.label} label={d.label} date={d.date} />
          ))}
        </div>
      )}

      {/* Topics */}
      <div className="flex flex-wrap gap-1.5">
        {conf.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full bg-slate-100 dark:bg-slate-700 px-2 py-0.5 text-xs text-slate-600 dark:text-slate-300"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Notes */}
      {conf.notes && (
        <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-3">
          {conf.notes}
        </p>
      )}
    </article>
  );
}

export default function Conferences() {
  const sorted = [...conferences].sort((a, b) => {
    const order = { "cfp-open": 0, "upcoming": 1, "tba": 2, "past": 3 };
    return order[a.status] - order[b.status];
  });

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
          Conferences of Interest
        </h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Venues I follow — with CFP / CFA deadlines and conference dates
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {sorted.map((conf) => (
            <ConferenceCard key={conf.id} conf={conf} />
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-400 dark:text-slate-500 text-center">
          Deadlines shown in your local time. Always verify on the official site before submitting.
        </p>
      </div>
    </section>
  );
}
