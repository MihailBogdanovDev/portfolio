"use client";

import { motion } from "framer-motion";

const circles = [
  {
    size: 400,
    x: "10%",
    y: "20%",
    color: "rgba(101,130,82,0.18)",
    duration: 25,
  },
  {
    size: 300,
    x: "70%",
    y: "10%",
    color: "rgba(140,160,100,0.15)",
    duration: 30,
  },
  {
    size: 350,
    x: "50%",
    y: "60%",
    color: "rgba(80,110,70,0.12)",
    duration: 28,
  },
  {
    size: 250,
    x: "80%",
    y: "80%",
    color: "rgba(120,140,90,0.10)",
    duration: 22,
  },
];

export default function DynamicBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {circles.map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: c.size,
            height: c.size,
            left: c.x,
            top: c.y,
            background: c.color,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 15, -10, 0],
            scale: [1, 1.05, 0.95, 1.02, 1],
          }}
          transition={{
            duration: c.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
