import Link from "next/link";
import { formatDate, getLangColor, truncate } from "@/lib/utils";
import type { GitHubRepo } from "@/types";

interface Props { repo: GitHubRepo; }

export default function ProjectCard({ repo }: Props) {
  return (
    <article className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <Link href={repo.html_url} target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-brand-600 dark:hover:text-brand-400 transition-colors line-clamp-1">
            {repo.name}
          </Link>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 min-h-[2.5rem]">
            {repo.description ? truncate(repo.description, 120) : "No description provided."}
          </p>
        </div>
        <Link href={repo.html_url} target="_blank" rel="noopener noreferrer"
          aria-label={`Open ${repo.name} on GitHub`}
          className="shrink-0 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>

      {repo.topics.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {repo.topics.slice(0, 4).map((t) => (
            <span key={t} className="rounded-full bg-brand-50 dark:bg-brand-900/30 px-2 py-0.5 text-xs font-medium text-brand-700 dark:text-brand-300">
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          {repo.language && (
            <>
              <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: getLangColor(repo.language) }} />
              {repo.language}
            </>
          )}
        </span>
        <span className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            {repo.forks_count}
          </span>
        </span>
      </div>

      {repo.homepage && (
        <div className="mt-2 border-t border-slate-100 dark:border-slate-700 pt-2">
          <Link href={repo.homepage} target="_blank" rel="noopener noreferrer"
            className="text-xs text-brand-600 dark:text-brand-400 hover:underline">
            🌐 Live site
          </Link>
        </div>
      )}
    </article>
  );
}
