import Link from "next/link";
import { GITHUB_PROFILE_URL, GITHUB_USERNAME } from "@/lib/github";
import { SCHOLAR_PROFILE } from "@/data/publications";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Eduardo Valentín Pérez Hernández
          </p>
          <div className="flex gap-5">
            <Link
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href={SCHOLAR_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              Google Scholar
            </Link>
            <Link
              href="mailto:eduardo.valentin.perez.2000@gmail.com"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
