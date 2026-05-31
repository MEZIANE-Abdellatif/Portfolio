interface SkillBarProps {
  name: string;
  level: number;
  max?: number;
}

export default function SkillBar({ name, level, max = 5 }: SkillBarProps) {
  const percentage = (level / max) * 100;

  return (
    <div className="skill-card">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="font-mono text-sm text-foreground">{name}</span>
        <span className="font-mono text-xs text-gold">{level}/{max}</span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full"
        style={{ background: "var(--divider)" }}
        role="meter"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={`${name} proficiency`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold/70 to-gold transition-[width] duration-700 ease-default"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
