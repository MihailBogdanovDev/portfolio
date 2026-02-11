"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { resume } from "@/data/resume";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const target = window.innerHeight * 0.4;
      let current = navItems[navItems.length - 1].id;

      // First section whose bottom is still below the target line is the active one
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().bottom > target) {
          current = id;
          break;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex h-full flex-col">
      <div className="flex flex-col gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          {resume.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg font-medium text-neutral-300"
        >
          {resume.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xs text-sm leading-relaxed text-neutral-500"
        >
          {resume.tagline}
        </motion.p>

        <nav className="mt-6 hidden flex-col gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 py-1.5 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  isActive ? "text-emerald-400" : "text-neutral-500 hover:text-white"
                }`}
              >
                <span
                  className={`h-px transition-all ${
                    isActive
                      ? "w-10 bg-emerald-400"
                      : "w-6 bg-neutral-600 group-hover:w-10 group-hover:bg-white"
                  }`}
                />
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 flex-1 overflow-hidden rounded-2xl bg-neutral-800 lg:my-6"
      >
        {/* Replace src with your photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photo.JPG"
          alt={resume.name}
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </motion.div>

      <div className="mt-4 flex items-center gap-4 lg:mt-0">
        <a
          href={resume.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 transition-colors hover:text-white"
          aria-label="GitHub"
        >
          <SiGithub className="h-5 w-5" />
        </a>
        <a
          href={resume.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 transition-colors hover:text-white"
          aria-label="LinkedIn"
        >
          <SiLinkedin className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${resume.contact.email}`}
          className="text-neutral-500 transition-colors hover:text-white"
          aria-label="Email"
        >
          <HiOutlineMail className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}
