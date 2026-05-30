export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "JWT",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Docker",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
];
