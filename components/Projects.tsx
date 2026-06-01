import { ExternalLink, Github } from "lucide-react";
import BrowserMockup from "@/components/BrowserMockup";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <RevealOnScroll delay={index * 80}>
      <article className="project-glass-card flex h-full flex-col overflow-hidden rounded-lg transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1">
        <BrowserMockup url={project.live} title={project.name} />

        <div className="flex flex-grow flex-col p-5 sm:p-6">
          <h3 className="text-lg font-bold text-white">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#999999]">
            {project.description}
          </p>

          <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
            {project.tags.slice(0, 4).map((tag) => (
              <li key={tag} className="tag-glass-pill">
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-center gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white/60 transition-colors hover:text-gold"
                aria-label={`${project.name} on GitHub`}
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            ) : null}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white/60 transition-colors hover:text-gold"
              aria-label={`Visit ${project.name} live site`}
            >
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}

export default function Projects() {
  return (
    <>
      <div className="section-divider" aria-hidden="true" />
      <section id="projects">
        <RevealOnScroll>
          <SectionHeading index={2}>Some Things I&apos;ve Built</SectionHeading>
          <p className="-mt-4 mb-10 max-w-2xl text-white/65">
            A selection of production applications I&apos;ve designed, built,
            and shipped.
          </p>
        </RevealOnScroll>

        <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <li key={project.name}>
              <ProjectCard project={project} index={index} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
