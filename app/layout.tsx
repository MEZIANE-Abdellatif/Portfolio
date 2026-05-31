import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SideSocial from "@/components/SideSocial";
import SideEmail from "@/components/SideEmail";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <BackgroundEffects />
        <ScrollProgress />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <Navbar />
        <SideSocial />
        <SideEmail />
        <div id="content" className="relative z-[1] flex min-h-screen flex-col">
          <main className="mx-auto w-full max-w-[1600px] flex-1 px-6 pb-0 pt-[200px] sm:px-10 md:px-[100px] lg:px-[150px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
