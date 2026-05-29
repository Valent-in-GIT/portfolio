import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
  }).format(new Date(dateString));
}

export function truncate(str: string, n: number): string {
  return str.length > n ? str.slice(0, n - 3) + "…" : str;
}

// Language → color mapping (GitHub-inspired)
export const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python:     "#3572A5",
  Rust:       "#dea584",
  Go:         "#00ADD8",
  Java:       "#b07219",
  "C++":      "#f34b7d",
  C:          "#555555",
  HTML:       "#e34c26",
  CSS:        "#563d7c",
  Shell:      "#89e051",
  Jupyter:    "#DA5B0B",
  MATLAB:     "#e16737",
  R:          "#198CE7",
};

export function getLangColor(lang: string | null): string {
  if (!lang) return "#8b949e";
  return LANG_COLORS[lang] ?? "#8b949e";
}
