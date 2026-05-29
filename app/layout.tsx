import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Eduardo Valentín Pérez Hernández",
    template: "%s | Eduardo V. Pérez",
  },
  description:
    "MSCS student — software engineer and researcher. Open-source projects and scientific publications.",
  keywords: [
    "Eduardo Valentín Pérez",
    "MSCS",
    "computer science",
    "software engineer",
    "researcher",
    "portfolio",
  ],
  authors: [{ name: "Eduardo Valentín Pérez Hernández" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://valent-in-git.github.io",
    siteName: "Eduardo V. Pérez — Portfolio",
    title: "Eduardo Valentín Pérez Hernández",
    description: "MSCS student — software engineer and researcher.",
  },
  twitter: {
    card: "summary",
    title: "Eduardo Valentín Pérez Hernández",
    description: "MSCS student — software engineer and researcher.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
