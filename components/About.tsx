import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function About() {
  return (
    <>
      <div className="section-divider" aria-hidden="true" />
      <section id="about">
        <RevealOnScroll>
          <SectionHeading index={1}>About Me</SectionHeading>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div className="grid gap-12 md:grid-cols-[3fr_2fr] md:gap-[50px]">
            <div className="text-muted">
              <p className="mb-4">
                Backend Developer with full-stack experience building scalable
                web applications from the ground up.
              </p>
              <p className="mb-4">
                Built 4 live projects from scratch including VPS deployment with
                CI/CD and monitoring — taking products from local development
                all the way to production.
              </p>
              <p className="mb-4">
                Based in{" "}
                <span className="inline-link text-foreground">
                  Warsaw, Poland
                </span>
                , open to remote opportunities across Europe and beyond.
              </p>
              <p className="mb-5">
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
              <ul className="fancy-list grid list-none grid-cols-2 gap-x-2.5 p-0">
                {[
                  "Node.js",
                  "TypeScript",
                  "PostgreSQL",
                  "Docker",
                  "React",
                  "Next.js",
                ].map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-[300px] md:mx-0 md:justify-self-end">
              <div className="group relative">
                <div className="relative z-[1] overflow-hidden rounded-lg transition-transform duration-300 ease-default group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <div className="glass relative aspect-square overflow-hidden">
                    <Image
                      src="/profile.png"
                      alt="Abdellatif Meziane, Backend Developer based in Warsaw"
                      fill
                      className="object-cover object-top grayscale transition-[filter] duration-500 group-hover:grayscale-0"
                      sizes="(max-width: 768px) 280px, 300px"
                    />
                  </div>
                </div>
                <div
                  className="absolute left-3.5 top-3.5 -z-[1] h-full w-full rounded-lg border-2 border-gold transition-transform duration-300 ease-default group-hover:translate-x-2 group-hover:translate-y-2"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
