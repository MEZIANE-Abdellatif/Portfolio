import { techMarquee } from "@/data/skills";

export default function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div
      className="relative mt-16 overflow-hidden py-4"
      style={{ borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)" }}
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max gap-8">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap font-mono text-sm text-muted/70"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
