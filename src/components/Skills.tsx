"use client";

import { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiMqtt,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiKotlin,
  SiSwift,
  SiFlutter,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiAmazonwebservices,
  SiKubernetes,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi, TbBrandCSharp, TbSql } from "react-icons/tb";
import Section from "./Section";
import { resume } from "@/data/resume";

const iconMap: Record<string, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  React: SiReact,
  "Vue.js": SiVuedotjs,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  Java: FaJava,
  "C#": TbBrandCSharp,
  SQL: TbSql,
  MQTT: SiMqtt,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  Kotlin: SiKotlin,
  Swift: SiSwift,
  Flutter: SiFlutter,
  Docker: SiDocker,
  Git: SiGit,
  "CI/CD": SiGithubactions,
  "REST APIs": TbApi,
  AWS: SiAmazonwebservices,
  Kubernetes: SiKubernetes,
};

function SkillChip({ name }: { name: string }) {
  const Icon = iconMap[name];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700/50 bg-neutral-800/40 px-3 py-1.5 text-sm text-neutral-300">
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
        Experience with
      </h3>
      <div className="flex flex-wrap gap-2">
        {resume.skills.map((skill) => (
          <SkillChip key={skill} name={skill} />
        ))}
      </div>

      {resume.learning.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-2">
            {resume.learning.map((skill) => (
              <SkillChip key={skill} name={skill} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
