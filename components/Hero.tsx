import { MapPin } from "lucide-react";
import { stats } from "@/data/stats";
import TechMarquee from "@/components/TechMarquee";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-var(--nav-height))] flex-col justify-center !py-0">
      <div className="hero-stagger relative z-[1]">
        <div className="badge-gold mb-8 w-fit">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          Available for new opportunities
        </div>

        <h1 className="text-gold-gradient m-0 text-[clamp(40px,8vw,80px)] font-bold leading-[1.05] tracking-tight">
          Abdellatif Meziane
        </h1>

        <p className="mt-6 text-base font-medium tracking-wide text-white/80 sm:text-lg md:text-xl">
          Backend Developer |{" "}
          <span className="text-gold">Node.js</span>
          {" · "}
          <span className="text-gold">TypeScript</span>
          {" · "}
          <span className="text-gold">PostgreSQL</span>
          {" · "}
          <span className="text-gold">Docker</span>
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
          Building, securing, and shipping real web applications to production.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <dt className="font-mono text-xs text-white/60">{stat.label}</dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="#projects" className="btn-primary w-fit">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary w-fit">
            Contact Me
          </a>
        </div>

        <p className="mt-12 flex items-center gap-2 text-sm text-white/50">
          <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
          Warsaw, Poland
        </p>
      </div>

      <TechMarquee />
    </section>
  );
}
