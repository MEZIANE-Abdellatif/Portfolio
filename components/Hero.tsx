import { stats } from "@/data/stats";
import TechMarquee from "@/components/TechMarquee";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-var(--nav-height))] flex-col justify-center overflow-hidden !py-0">
      <div
        className="hero-glow pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-noise pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />

      <div className="hero-stagger relative z-[1]">
        <div className="mb-6 flex items-center gap-3">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="font-mono text-sm text-emerald-400">
            Available for opportunities
          </span>
        </div>

        <p className="mb-7 ml-1 font-mono text-gold md:text-base">
          Hi, my name is
        </p>

        <div className="relative">
          <div
            className="pointer-events-none absolute -left-8 top-1/2 -z-10 h-[280px] w-[min(100%,520px)] -translate-y-1/2 sm:-left-12"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(201, 168, 76, 0.18) 0%, rgba(201, 168, 76, 0.06) 45%, transparent 72%)",
              filter: "blur(24px)",
            }}
          />
          <h1 className="m-0 text-[clamp(40px,8vw,80px)] font-semibold leading-[1.1] text-foreground">
            Abdellatif Meziane.
          </h1>
        </div>

        <h2 className="mt-1.5 text-[clamp(40px,8vw,80px)] font-semibold leading-[1.1] text-muted">
          I build backends that ship.
        </h2>

        <p className="mt-5 max-w-[540px] text-muted">
          Building, securing, and shipping real web applications to production.
          Specializing in Node.js, TypeScript, PostgreSQL, Docker, and CI/CD.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <dt className="font-mono text-xs text-muted">{stat.label}</dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="#projects" className="btn-filled w-fit">
            View Projects
          </a>
          <a href="#contact" className="btn-outline w-fit">
            Contact Me
          </a>
        </div>
      </div>

      <TechMarquee />
    </section>
  );
}
