import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://abdellatifmeziane.dev";

export const metadata: Metadata = {
  title: "Abdellatif Meziane | Backend Developer · Node.js · TypeScript · Docker",
  description:
    "Abdellatif Meziane is a Backend Developer based in Warsaw, Poland. Specializes in Node.js, TypeScript, PostgreSQL, Docker, CI/CD, and production deployment.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Abdellatif Meziane | Backend Developer · Node.js · TypeScript · Docker",
    description:
      "Abdellatif Meziane is a Backend Developer based in Warsaw, Poland. Specializes in Node.js, TypeScript, PostgreSQL, Docker, CI/CD, and production deployment.",
    url: siteUrl,
    siteName: "Abdellatif Meziane",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdellatif Meziane | Backend Developer · Node.js · TypeScript · Docker",
    description:
      "Abdellatif Meziane is a Backend Developer based in Warsaw, Poland. Specializes in Node.js, TypeScript, PostgreSQL, Docker, CI/CD, and production deployment.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdellatif Meziane",
  jobTitle: "Backend Developer",
  url: siteUrl,
  email: "abdellatif.meziane18@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warsaw",
    addressCountry: "PL",
  },
  knowsAbout: [
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "CI/CD",
    "REST APIs",
  ],
  sameAs: [
    "https://www.linkedin.com/in/abdellatif-meziane",
    "https://github.com/abdellatifmeziane",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
