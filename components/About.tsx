import { GITHUB_PROFILE_URL, GITHUB_USERNAME } from "@/lib/github";
import { SCHOLAR_PROFILE } from "@/data/publications";
import type { GitHubUser } from "@/types";

interface Props {
  user: GitHubUser | null;
}

export default function About({ user }: Props) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              About me
            </h2>
            <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
              <p>
                I&apos;m <strong className="text-slate-800">Eduardo Valentín Pérez Hernández</strong>,
                a second-year Master of Science in Computer Science (MSCS) student.
                My work sits at the intersection of software engineering and research —
                I build open-source tools and publish findings to contribute back
                to the academic community.
              </p>
              <p>
                When I&apos;m not coding or writing papers, I enjoy exploring new
                technologies, reading about distributed systems, and contributing
                to interesting open-source projects.
              </p>
            </div>

            {/* Stats row */}
            {user && (
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <p className="text-2xl font-bold text-slate-900">{user.public_repos}</p>
                  <p className="text-sm text-slate-500">Public repos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{user.followers}</p>
                  <p className="text-sm text-slate-500">Followers</p>
                </div>
              </div>
            )}
          </div>

          {/* Info card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Quick info
            </h3>
            <ul className="space-y-3">
              <InfoRow
                icon="🎓"
                label="Degree"
                value="MSCS — 2nd Year"
              />
              {user?.location && (
                <InfoRow icon="📍" label="Location" value={user.location} />
              )}
              <InfoRow
                icon="💻"
                label="GitHub"
                value={`@${GITHUB_USERNAME}`}
                href={GITHUB_PROFILE_URL}
              />
              <InfoRow
                icon="📚"
                label="Scholar"
                value="Google Scholar Profile"
                href={SCHOLAR_PROFILE}
              />
              <InfoRow
                icon="✉️"
                label="Email"
                value="eduardo.valentin.perez.2000@gmail.com"
                href="mailto:eduardo.valentin.perez.2000@gmail.com"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-lg">{icon}</span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p>
        {href ? (
          <a
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="text-sm text-brand-600 hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-slate-700">{value}</p>
        )}
      </div>
    </li>
  );
}
