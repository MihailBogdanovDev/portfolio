"use client";

import Section from "./Section";
import { resume } from "@/data/resume";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {resume.experience.map((job, i) => (
          <div
            key={i}
            className="group grid gap-1 rounded-lg p-4 transition-colors hover:bg-neutral-800/40 sm:grid-cols-[140px_1fr] sm:gap-4"
          >
            <span className="text-sm font-medium uppercase tracking-wide text-neutral-500 sm:pt-1">
              {job.period}
            </span>
            <div>
              <h3 className="text-base font-medium text-white">
                {job.role}{" "}
                <span className="text-emerald-400/80">
                  &middot;{" "}
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-300"
                  >
                    {job.company}
                  </a>
                </span>
              </h3>
              <ul className="mt-2 space-y-1">
                {job.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-sm leading-relaxed text-neutral-400"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
