import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Eduardo Valentín Pérez Hernández",
    template: "%s | Eduardo V. Pérez-Hernández",
  },
  description:
    "MSCS student. Open-source projects and scientific publications.",
  keywords: [
    "Eduardo Valentín Pérez",
    "MSCS",
    "computer science",
    "researcher",
    "portfolio",
  ],
  authors: [{ name: "Eduardo Valentín Pérez Hernández" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://valent-in-git.github.io",
    siteName: "Eduardo V. Pérez-Hernández — Portfolio",
    title: "Eduardo Valentín Pérez Hernández",
    description: "MSCS student.",
  },
  twitter: {
    card: "summary",
    title: "Eduardo Valentín Pérez Hernández",
    description: "MSCS student.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-white dark:bg-slate-900 transition-colors">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
