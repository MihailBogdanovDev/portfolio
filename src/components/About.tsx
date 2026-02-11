"use client";

import Section from "./Section";
import { resume } from "@/data/resume";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="whitespace-pre-line text-base leading-relaxed text-neutral-400">
        {resume.about}
      </p>
    </Section>
  );
}
