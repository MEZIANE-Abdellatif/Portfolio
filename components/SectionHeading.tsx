interface SectionHeadingProps {
  index: number;
  children: React.ReactNode;
}

export default function SectionHeading({ index, children }: SectionHeadingProps) {
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <h2 className="mb-10 flex items-center whitespace-nowrap text-[clamp(26px,5vw,32px)] font-semibold text-foreground">
      <span className="mr-2.5 font-mono text-[clamp(16px,3vw,20px)] font-normal text-gold">
        {formattedIndex}.
      </span>
      <span>{children}</span>
      <span
        className="relative ml-5 hidden h-px w-[300px] md:block lg:w-[300px]"
        style={{ background: "var(--divider)" }}
        aria-hidden="true"
      />
    </h2>
  );
}
