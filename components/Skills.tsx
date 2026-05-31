import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import SkillBar from "@/components/SkillBar";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <>
      <div className="section-divider" aria-hidden="true" />
      <section id="skills">
        <RevealOnScroll>
          <SectionHeading index={3}>Skills</SectionHeading>
        </RevealOnScroll>

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <RevealOnScroll key={group.label} delay={groupIndex * 80}>
              <div>
                <h3 className="mb-6 flex items-center gap-3 font-mono text-sm text-gold">
                  <span className="h-px w-8 bg-gold/40" aria-hidden="true" />
                  {group.label}
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
