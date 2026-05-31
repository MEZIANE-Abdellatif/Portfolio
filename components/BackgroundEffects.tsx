export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-gold/[0.03] blur-[120px]" />
      <div className="absolute -right-[10%] top-[40%] h-[400px] w-[400px] rounded-full bg-gold/[0.02] blur-[100px]" />
    </div>
  );
}
