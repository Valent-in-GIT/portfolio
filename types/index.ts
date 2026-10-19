// ──────────────────────────────────────────────
// GitHub
// ──────────────────────────────────────────────
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  created_at: string;
  fork: boolean;
  visibility: string;
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  company: string | null;
}

// ──────────────────────────────────────────────
// Publications
// ──────────────────────────────────────────────
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;           // journal, conference, or preprint server
  venueType: "journal" | "conference" | "workshop" | "preprint" | "thesis" | "book-chapter";
  abstract?: string;
  doi?: string;
  arxivId?: string;
  url?: string;
  citedBy?: number;
  accepted?: boolean;   // true = accepted but not yet published
  tags: string[];
}

// ──────────────────────────────────────────────
// Conferences of Interest
// ──────────────────────────────────────────────
export interface ConferenceDate {
  start: string;   // ISO date YYYY-MM-DD
  end: string;
  location: string;
  city: string;
  country: string;
}

export interface Conference {
  id: string;
  shortName: string;        // e.g. "ACL 2027"
  fullName: string;
  acronym: string;          // e.g. "ACL", "EMBC"
  url: string;
  conferenceDate?: ConferenceDate;
  deadlines?: {
    label: string;          // e.g. "Abstract submission", "CFP"
    date: string;           // ISO date YYYY-MM-DD
  }[];
  notificationDate?: string;
  frequency: "annual" | "biennial" | "other";
  topics: string[];
  notes?: string;
  status: "cfp-open" | "upcoming" | "past" | "tba";
}

// ──────────────────────────────────────────────
// Navigation
// ──────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}
