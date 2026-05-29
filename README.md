# Eduardo V. Pérez — Portfolio

Personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
Auto-deploys to GitHub Pages via GitHub Actions on every push to `main`.

## Features

- **Projects** — pulled live from the GitHub API (`Valent-in-GIT`)
- **Publications** — static list in `data/publications.ts` (easy to update)
- **Professional/corporate design** — white/slate palette, Inter font
- **Static export** — zero server costs, hosted on GitHub Pages

---

## Local development

```bash
# 1. Clone the repo
git clone https://github.com/Valent-in-GIT/<repo-name>.git
cd <repo-name>

# 2. Install dependencies
npm install

# 3. (Optional) Add GitHub token to avoid rate-limiting
cp .env.local.example .env.local
# Edit .env.local and add your token

# 4. Start dev server
npm run dev
# → http://localhost:3000
```

---

## Deploy to GitHub Pages (one-time setup)

### Step 1 — Create a new repo

```
https://github.com/new
```

Name it `<your-username>.github.io` **or** any name you prefer.  
Push this code to the `main` branch.

### Step 2 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

### Step 3 — (Optional) Add GitHub token secret

To avoid the 60 req/hour API rate limit on the build machine:

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens) → **Generate new token (classic)**
2. No scopes needed — public repos are readable without permissions
3. Copy the token
4. Go to your repo → **Settings** → **Secrets and variables** → **Actions**
5. Click **New repository secret** → name: `GH_PAT`, value: your token

### Step 4 — Push and wait ~60 seconds

```bash
git push origin main
```

The Actions workflow (`.github/workflows/deploy.yml`) will build and publish automatically.  
Your site will be live at:

```
https://Valent-in-GIT.github.io/<repo-name>/
```

---

## Updating publications

Edit `data/publications.ts` — add one object per paper:

```ts
{
  id: "pub-003",                          // unique string
  title: "Your Paper Title",
  authors: ["Pérez Hernández, Eduardo Valentín", "Co-Author"],
  year: 2025,
  venue: "Conference or Journal Name",
  venueType: "conference",               // journal | conference | workshop | preprint | thesis
  abstract: "Optional abstract text.",
  doi: "10.XXXX/XXXXXX",                // optional
  url: "https://doi.org/10.XXXX/...",   // optional
  citedBy: 5,                            // optional
  tags: ["Machine Learning", "NLP"],
},
```

Then commit and push — GitHub Actions deploys the update automatically.

---

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout (header + footer)
│   ├── page.tsx            # Home page
│   ├── projects/page.tsx   # All GitHub repos
│   └── publications/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── ProjectCard.tsx
│   └── PublicationCard.tsx
├── data/
│   └── publications.ts     # ← Edit this to add papers
├── lib/
│   ├── github.ts           # GitHub API helpers
│   └── utils.ts            # Shared utilities
├── types/
│   └── index.ts
└── .github/workflows/
    └── deploy.yml          # CI/CD pipeline
```
