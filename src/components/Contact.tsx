"use client";

import { resume } from "@/data/resume";

export default function Contact() {
  return (
    <p className="py-12 text-xs text-neutral-600">
      &copy; {new Date().getFullYear()} {resume.name}
    </p>
  );
}
