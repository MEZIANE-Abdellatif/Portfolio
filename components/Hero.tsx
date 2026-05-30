export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Abdellatif Meziane
      </h1>
      <p className="mt-4 text-lg text-gold sm:text-xl">
        Backend Developer | Node.js · TypeScript · PostgreSQL · Docker
      </p>
      <p className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
        Building, securing, and shipping real web applications to production.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#projects"
          className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-gold px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
