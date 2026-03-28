"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "4+ Projects",
    description: "Enterprise-grade applications",
  },
  {
    icon: Users,
    title: "2+ Years",
    description: "Professional experience",
  },
  {
    icon: Rocket,
    title: "SaaS Expert",
    description: "Multi-tenant platforms",
  },
  {
    icon: Zap,
    title: "Full-Stack",
    description: "End-to-end solutions",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-zinc-950">
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
            About Me
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Crafting Digital{" "}
            <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-zinc-400 leading-relaxed">
              As a{" "}
              <span className="text-white font-medium">
                Software Engineer at Hidayah Lab
              </span>
              , I build sophisticated software solutions that
              power educational platforms, mobile applications, and enterprise
              systems.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              My expertise spans across building{" "}
              <span className="text-violet-400">
                multi-tenant SaaS platforms
              </span>
              ,<span className="text-violet-400"> real-time applications</span>,
              and
              <span className="text-violet-400"> mobile apps</span> using
              cutting-edge technologies like Next.js, React Native, Node.js, and
              PostgreSQL.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              I thrive on solving complex problems—from designing scalable
              database schemas to implementing seamless payment integrations and
              video conferencing solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
