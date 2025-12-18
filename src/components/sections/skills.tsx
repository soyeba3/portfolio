"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "REST API", "Express"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "Drizzle ORM", "Prisma"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "Vercel", "AWS", "Linux"],
  },
  {
    title: "Integrations",
    skills: [
      "Stripe",
      "SSL Commerz",
      "Zoom API",
      "Google Meet",
      "BunnyCDN",
      "Gotipath",
    ],
  },
  {
    title: "Other",
    skills: ["Multi-tenant SaaS", "Real-time Apps", "Payment Systems"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-zinc-950">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-violet-950/10 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 font-medium text-sm uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Skills &{" "}
            <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
