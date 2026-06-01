export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    name: "Job Tracker",
    description:
      "Full-stack job tracking platform with Docker, CI/CD, and production monitoring",
    tags: ["Node.js", "TypeScript", "Docker", "PostgreSQL"],
    github: "",
    live: "https://app.apptracker.live/",
  },
  {
    name: "Maison Snow",
    description:
      "Luxury fashion e-commerce with Stripe, NextAuth, and admin panel",
    tags: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
    github: "",
    live: "https://maison-snow-project.vercel.app/",
  },
  {
    name: "Mazzinka",
    description:
      "Full-stack e-commerce with Google OAuth and email verification",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "",
    live: "https://mazzinka.com",
  },
  {
    name: "AtlasUtils",
    description: "Multi-tool platform with Arabic RTL and full i18n support",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    github: "",
    live: "https://atlasutils.com",
  },
];
