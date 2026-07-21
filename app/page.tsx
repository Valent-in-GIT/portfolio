import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Awards from "@/components/Awards";
import Leadership from "@/components/Leadership";
import Talks from "@/components/Talks";
import ProjectCard from "@/components/ProjectCard";
import PublicationCard from "@/components/PublicationCard";
import { getFeaturedRepos, getGitHubUser } from "@/lib/github";
import { publications, SCHOLAR_PROFILE } from "@/data/publications";

export const metadata: Metadata = { title: "Home" };

export default async function HomePage() {
  const [user, featuredRepos] = await Promise.all([
    getGitHubUser(),
    getFeaturedRepos(6),
  ]);
  const featuredPubs = publications.slice(0, 3);

  return (
    <>
      <Hero />
      <About user={user} />
      <Awards />
      <Leadership />
      <Talks />

      {/* Featured Projects */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            title="Featured Projects"
            subtitle="Open-source work pulled live from GitHub"
            cta={{ label: "All projects →", href: "/projects" }}
          />
          {featuredRepos.length === 0 ? (
            <EmptyState message="Could not load GitHub repositories. Check your API token." />
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredRepos.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Recent Publications */}
      <section className="bg-slate-50 dark:bg-slate-800/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            title="Recent Publications"
            subtitle="Scientific papers and research contributions"
            cta={{ label: "All publications →", href: "/publications" }}
          />
          {featuredPubs.length === 0 ? (
            <EmptyState message="No publications added yet. Edit data/publications.ts to add yours." />
          ) : (
            <div className="mt-8 space-y-4">
              {featuredPubs.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          )}
          <div className="mt-6 text-center">
            <Link href={SCHOLAR_PROFILE} target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 transition-colors">
              View full profile on Google Scholar ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({ title, subtitle, cta }: {
  title: string; subtitle: string; cta?: { label: string; href: string };
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">{subtitle}</p>
      </div>
      {cta && (
        <Link href={cta.href}
          className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 transition-colors">
          {cta.label}
        </Link>
      )}
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="mt-8 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 p-10 text-center text-sm text-slate-400 dark:text-slate-500">
      {message}
    </div>
  );
}
