"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Folder, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { projects } from "@/data/projects";

function getThumbnailUrl(live: string): string {
  try {
    const { origin } = new URL(live);
    return `${origin}/opengraph-image`;
  } catch {
    return "";
  }
}

function ProjectImage({ name, live }: { name: string; live: string }) {
  const [hasError, setHasError] = useState(false);
  const thumbnailUrl = live ? getThumbnailUrl(live) : "";

  if (!thumbnailUrl || hasError) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded bg-gold/10">
        <span className="font-mono text-4xl text-gold/40">{name.charAt(0)}</span>
      </div>
    );
  }

  return (
    <div className="group/img relative aspect-video w-full overflow-hidden rounded bg-gold">
      <Image
        src={thumbnailUrl}
        alt=""
        fill
        className="object-cover object-top mix-blend-multiply brightness-90 contrast-100 grayscale transition-[filter] duration-500 group-hover/img:grayscale-0"
        sizes="(max-width: 768px) 100vw, 60vw"
        onError={() => setHasError(true)}
        unoptimized
      />
      <div className="absolute inset-0 z-[1] bg-background mix-blend-screen transition-opacity duration-500 group-hover/img:opacity-60" aria-hidden="true" />
    </div>
  );
}

function FeaturedProject({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isEven = index % 2 === 1;

  return (
    <RevealOnScroll delay={index * 100}>
      <li
        className={`relative grid grid-cols-12 items-center gap-2.5 ${
          index > 0 ? "mt-[70px] md:mt-[100px]" : ""
        }`}
      >
        <div
          className={`relative z-[1] col-span-12 md:col-span-7 md:row-start-1 ${
            isEven
              ? "md:col-start-1 md:text-left"
              : "md:col-start-6 md:text-right"
          }`}
        >
          <p className="mb-2 font-mono text-xs text-gold">Featured Project</p>
          <h3 className="mb-5 text-[clamp(24px,5vw,28px)] font-semibold text-foreground">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          <div className="glass rounded-lg p-6 text-muted transition-[border-color,box-shadow] duration-300 hover:border-[rgba(201,168,76,0.2)]">
            <p>{project.description}</p>
          </div>
          <ul
            className={`mt-6 flex list-none flex-wrap gap-x-5 gap-y-1 p-0 font-mono text-xs text-muted ${
              isEven ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {project.tags.slice(0, 4).map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div
            className={`mt-2.5 flex items-center gap-1 text-foreground ${
              isEven ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2.5 transition-colors hover:text-gold"
                aria-label={`${project.name} on GitHub`}
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2.5 transition-colors hover:text-gold"
                aria-label={`Visit ${project.name} live site`}
              >
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div
          className={`group relative col-span-12 md:col-span-7 md:row-start-1 ${
            isEven ? "md:col-start-6" : "md:col-start-1"
          }`}
        >
          <div className="relative rounded-lg shadow-glass transition-[transform,box-shadow] duration-300 ease-default group-hover:-translate-y-1">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                tabIndex={-1}
                aria-hidden="true"
              >
                <ProjectImage name={project.name} live={project.live} />
              </a>
            ) : (
              <ProjectImage name={project.name} live={project.live} />
            )}
          </div>
        </div>
      </li>
    </RevealOnScroll>
  );
}

function GridProject({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <RevealOnScroll delay={index * 80}>
      <li className="project-card">
        <div className="mb-9 flex w-full items-start justify-between">
          <Folder className="h-10 w-10 text-gold" aria-hidden="true" />
          <div className="mr-[-10px] flex text-muted">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center p-1.5 transition-colors hover:text-gold"
                aria-label={`${project.name} on GitHub`}
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center p-1.5 transition-colors hover:text-gold"
                aria-label={`Visit ${project.name} live site`}
              >
                <ExternalLink className="h-[22px] w-[22px]" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
        <h3 className="mb-2.5 text-xl font-semibold text-foreground">
          {project.name}
        </h3>
        <p className="mb-5 flex-grow text-[17px] text-muted">
          {project.description}
        </p>
        <ul className="mt-auto flex list-none flex-wrap gap-x-4 p-0 font-mono text-xs text-muted">
          {project.tags.slice(0, 4).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </li>
    </RevealOnScroll>
  );
}

export default function Projects() {
  const featured = projects.slice(0, 2);
  const other = projects.slice(2);

  return (
    <>
      <div className="section-divider" aria-hidden="true" />
      <section id="projects">
        <RevealOnScroll>
          <SectionHeading index={2}>Some Things I&apos;ve Built</SectionHeading>
        </RevealOnScroll>

        <ul className="m-0 list-none p-0">
          {featured.map((project, index) => (
            <FeaturedProject
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </ul>

        {other.length > 0 && (
          <>
            <RevealOnScroll delay={100}>
              <h3 className="mt-20 text-center text-[clamp(24px,5vw,28px)] font-semibold text-foreground">
                Other Noteworthy Projects
              </h3>
            </RevealOnScroll>
            <ul className="mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
              {other.map((project, index) => (
                <GridProject
                  key={project.name}
                  project={project}
                  index={index}
                />
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
}
