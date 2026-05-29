import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { getRepos, GITHUB_PROFILE_URL } from "@/lib/github";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open-source projects by Eduardo Valentín Pérez Hernández, fetched live from GitHub.",
};

export default async function ProjectsPage() {
  const repos = await getRepos();

  // Group by primary language
  const languages = Array.from(
    new Set(repos.map((r) => r.language ?? "Other"))
  ).sort();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Projects
        </h1>
        <p className="mt-2 text-slate-500">
          {repos.length} public repositories · pulled live from{" "}
          <Link
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            GitHub
          </Link>
        </p>
      </div>

      {repos.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-16 text-center text-slate-400">
          Could not load repositories. Add a{" "}
          <code className="font-mono text-sm">GITHUB_TOKEN</code> to your
          environment variables to increase the API rate limit.
        </div>
      ) : (
        <>
          {/* Stats bar */}
          <div className="mb-8 flex flex-wrap gap-2">
            {languages.map((lang) => {
              const count = repos.filter(
                (r) => (r.language ?? "Other") === lang
              ).length;
              return (
                <span
                  key={lang}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {lang} <span className="text-slate-400">({count})</span>
                </span>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
