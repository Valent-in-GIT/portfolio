import type { GitHubRepo, GitHubUser } from "@/types";

const USERNAME = "Valent-in-GIT";
const BASE = "https://api.github.com";

function headers(): HeadersInit {
  const h: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (process.env.GITHUB_TOKEN) {
    h["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return h;
}

export async function getGitHubUser(): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`${BASE}/users/${USERNAME}`, {
      headers: headers(),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${BASE}/users/${USERNAME}/repos?sort=updated&per_page=100&type=owner`,
      { headers: headers(), next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const repos: GitHubRepo[] = await res.json();
    return repos
      .filter((r) => !r.fork && r.visibility === "public")
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch {
    return [];
  }
}

// ── Pinned repos ──────────────────────────────────────────────────────────────
// List repo names to feature, in display order.
// Leave empty [] to show top repos by stars automatically.
const PINNED: string[] = [
  "CONITACS-EEGNetModel",
  "Neurotutor_v1"
];



export async function getFeaturedRepos(count = 6): Promise<GitHubRepo[]> {
  const repos = await getRepos();

  if (PINNED.length > 0) {
    return PINNED
      .map((name) => repos.find((r) => r.name === name))
      .filter((r): r is GitHubRepo => r !== undefined);
  }

  return repos.slice(0, count);
}

export const GITHUB_PROFILE_URL = `https://github.com/${USERNAME}`;
export const GITHUB_USERNAME = USERNAME;
