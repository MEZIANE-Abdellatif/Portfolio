"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

function getThumbnailUrl(live: string): string {
  try {
    const { origin } = new URL(live);
    return `${origin}/opengraph-image`;
  } catch {
    return "";
  }
}

function ProjectThumbnail({ name, live }: { name: string; live: string }) {
  const [hasError, setHasError] = useState(false);
  const thumbnailUrl = live ? getThumbnailUrl(live) : "";

  if (!thumbnailUrl || hasError) {
    return (
      <div
        className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-white/5 to-gold/10"
        aria-hidden="true"
      >
        <span className="text-3xl font-bold text-gold/50">{name.charAt(0)}</span>
      </div>
    );
  }

  return (
    <div className="relative h-48 w-full overflow-hidden bg-white/5">
      <Image
        src={thumbnailUrl}
        alt={`${name} screenshot`}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setHasError(true)}
        unoptimized
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <h2 className="text-2xl font-semibold text-gold sm:text-3xl">Projects</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-transform duration-300 hover:scale-[1.02]"
          >
            <ProjectThumbnail name={project.name} live={project.live} />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-white/70">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gold/10 px-3 py-1 text-xs text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white/70 transition-colors hover:text-gold"
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
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white/70 transition-colors hover:text-gold"
                    aria-label={`Visit ${project.name} live site`}
                  >
                    <ExternalLink className="h-5 w-5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
