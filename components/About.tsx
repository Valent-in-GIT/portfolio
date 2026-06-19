import { GITHUB_USERNAME } from "@/lib/github";
import type { GitHubUser } from "@/types";

interface Props {
  user: GitHubUser | null;
}

export default function About({ user }: Props) {
  return (
    <section className="bg-slate-50 dark:bg-slate-800/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
              About me
            </h2>
            <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
              <p>
                Hi, I&apos;m Eduardo Valentín Pérez Hernández. I hold a B.Sc. in Mechatronics Engineering
                from the Benemérita Universidad Autónoma de Puebla (BUAP) and I am currently pursuing an
                M.Sc. in Computer Science at the National Institute of Astrophysics, Optics and Electronics (INAOE).
                My research interests lie at the intersection of Brain-Computer Interfaces (BCIs), biosignal processing,
                artificial intelligence, and language models.
              </p>
              <p>
                I am particularly interested in developing intelligent
                systems that bridge neural activity and human-computer interaction. Beyond research, I enjoy working on
                robotics, embedded systems, and open-source projects, and actively contributing to the engineering
                community through IEEE.
              </p>
            </div>

            {/* Stats row */}
            {user && (
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{user.public_repos}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Public repos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{user.followers}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Followers</p>
                </div>
              </div>
            )}
          </div>

          {/* Info card */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Quick info
            </h3>
            <ul className="space-y-3">
              <InfoRow icon="🎓" label="Degree" value="M.Sc. Computer Science — INAOE" />
              {user?.location && (
                <InfoRow icon="📍" label="Location" value={user.location} />
              )}
              <InfoRow
                icon="💻"
                label="GitHub"
                value={`@${GITHUB_USERNAME}`}
                href="https://github.com/Valent-in-GIT"
              />
              <InfoRow
                icon="📚"
                label="Scholar"
                value="Google Scholar Profile"
                href="https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=ACrTK9UvNiskhdd26VlKmYBqyM2WhnaauMnL5Q0PK3rYQR2Eq6hXUcvwrR8-h3zysyrLPHwgyeSEKbphr835QQ&user=nNHPDbEAAAAJ"
              />
              <InfoRow
                icon="💼"
                label="LinkedIn"
                value="linkedin.com/in/valent-in00"
                href="https://www.linkedin.com/in/valent-in00/"
              />
              <InfoRow
                icon="✉️"
                label="Email"
                value="eduardo.perezherna@ieee.org"
                href="mailto:eduardo.perezherna@ieee.org"
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
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">{label}</p>
        {href ? (
          <a
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="text-sm text-brand-600 dark:text-brand-400 hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-slate-700 dark:text-slate-300">{value}</p>
        )}
      </div>
    </li>
  );
}
