"use client";

import Section from "./Section";
import { resume } from "@/data/resume";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-4">
        {resume.projects.map((project) => (
          <div
            key={project.name}
            className="group rounded-lg p-4 transition-colors hover:bg-neutral-800/40"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-medium text-white">{project.name}</h3>
              <div className="flex gap-3 text-xs">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400/80 hover:text-emerald-300"
                  >
                    Live &rarr;
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-neutral-300"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
            {project.client && (
              <p className="mt-1 text-sm text-neutral-500">
                Built for{" "}
                <a
                  href={project.client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400/80 hover:text-emerald-300"
                >
                  {project.client.name}
                </a>
              </p>
            )}
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
