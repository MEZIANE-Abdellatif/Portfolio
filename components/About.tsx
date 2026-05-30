export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <h2 className="text-2xl font-semibold text-gold sm:text-3xl">About</h2>
      <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
        <p>
          Backend Developer with full-stack experience building scalable web
          applications from the ground up.
        </p>
        <p>
          Built 4 live projects from scratch including VPS deployment with CI/CD
          and monitoring.
        </p>
        <p>Based in Warsaw, Poland.</p>
      </div>
    </section>
  );
}
