import type { Publication } from "@/types";

/**
 * ─────────────────────────────────────────────────────────────────
 *  HOW TO UPDATE
 *  1. Copy a block below and fill in your paper's details.
 *  2. Set `venueType` to: "journal" | "conference" | "workshop" | "preprint" | "thesis"
 *  3. Add a DOI or URL so readers can reach the paper.
 *  4. Run `npm run build` – changes appear instantly on the site.
 *
 *  Your Google Scholar profile:
 *  https://scholar.google.com/citations?user=dPLSYC0AAAAJ&hl=es
 * ─────────────────────────────────────────────────────────────────
 */
export const publications: Publication[] = [
  // ── Replace / add your real papers below ──────────────────────
  {
    id: "pub-001",
    title: "Your Most Recent Paper Title Here",
    authors: [
      "Pérez Hernández, Eduardo Valentín",
      "Co-Author Name",
    ],
    year: 2024,
    venue: "Conference / Journal Name",
    venueType: "conference",
    abstract:
      "A brief abstract describing the paper, its methods, and main findings. This is shown in the card on hover/expansion.",
    doi: "10.XXXX/XXXXXXXX",
    url: "https://doi.org/10.XXXX/XXXXXXXX",
    citedBy: 0,
    tags: ["Machine Learning", "Computer Science"],
  },
  {
    id: "pub-002",
    title: "Another Paper Title",
    authors: [
      "Pérez Hernández, Eduardo Valentín",
    ],
    year: 2023,
    venue: "Journal of Example Research",
    venueType: "journal",
    abstract: "Abstract of the second paper.",
    doi: "10.XXXX/XXXXXXXX",
    url: "https://scholar.google.com/citations?user=dPLSYC0AAAAJ&hl=es",
    citedBy: 0,
    tags: ["Computer Vision"],
  },
];

export const SCHOLAR_PROFILE =
  "https://scholar.google.com/citations?user=dPLSYC0AAAAJ&hl=es";
