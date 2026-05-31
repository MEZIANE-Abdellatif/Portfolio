export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Express.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "REST APIs", level: 5 },
      { name: "JWT", level: 4 },
      { name: "PostgreSQL", level: 5 },
      { name: "MongoDB", level: 4 },
      { name: "Prisma", level: 4 },
      { name: "Docker", level: 5 },
      { name: "CI/CD", level: 4 },
      { name: "GitHub Actions", level: 4 },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Tailwind CSS", level: 5 },
    ],
  },
];

export const techMarquee = [
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "React",
  "Next.js",
  "Prisma",
  "CI/CD",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "GitHub Actions",
];
