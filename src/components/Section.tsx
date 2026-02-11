"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      className="scroll-mt-24 py-12 md:py-16"
    >
      {title && (
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-neutral-500 lg:sr-only">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}
