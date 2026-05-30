import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <h2 className="text-2xl font-semibold text-gold sm:text-3xl">Skills</h2>
      <div className="mt-8 space-y-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/50">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
