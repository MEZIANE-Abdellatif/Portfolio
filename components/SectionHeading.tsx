interface SectionHeadingProps {
  index: number;
  children: React.ReactNode;
}

export default function SectionHeading({ index, children }: SectionHeadingProps) {
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-gold">{formattedIndex}.</span>
      <h2 className="m-0 whitespace-nowrap text-[clamp(26px,5vw,36px)] font-bold tracking-tight text-white">
        {children}
      </h2>
      <span className="section-rule hidden md:block" aria-hidden="true" />
    </div>
  );
}
