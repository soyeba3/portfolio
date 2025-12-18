"use client";

import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    company: "Hidayah Lab",
    position: "Software Engineer",
    period: "December 2023 - Present",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Lead Full-Stack Engineer for a multi-tenant SaaS platform using Next.js, NestJS, and PostgreSQL",
      "Architected a multi-lingual, multi-tenant LMS with Time Zone support, ensuring accurate scheduling for live classes across global student bases",
      "Implemented complex database schemas with PostgreSQL and Drizzle ORM to handle tenant data isolation and subscription management",
      "Integrated secure payment gateways and managed user authentication/authorization roles (Student, Teacher, Admin)",
      "Currently developing a 1-on-1 learning mobile application with cross-timezone synchronization for real-time booking",
    ],
    projects: [
      "Academy Suite",
      "Tarsheed Academy",
      "Uni Assist",
      "Tarsheed One-to-One",
    ],
  },
  {
    company: "Repliq Limited",
    position: "Trainee Software Developer",
    period: "August 2023 – October 2023",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Contributed to enterprise-level Next.js applications by optimizing performance and working with senior developers to resolve critical bugs and enhance code quality.",
    ],
    projects: ["HR Pro"],
  },
  {
    company: "C-Sunshine",
    position: "Frontend Developer",
    period: "April 2023 – July 2023",
    location: "Bratislava, Slovakia (Remote)",
    highlights: [
      "Maintained existing web applications, ensuring cross-browser compatibility while implementing UI enhancements and resolving front-end bugs to improve user experience.",
    ],
    projects: [],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-zinc-950">
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
            Career
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Work{" "}
            <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-violet-500/30 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-linear-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {exp.position}
                        </h3>
                        <p className="text-violet-400 font-medium text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-zinc-400">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-zinc-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {exp.projects.length > 0 && (
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-sm text-zinc-500 mb-2">
                          Key Projects:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((project) => (
                            <span
                              key={project}
                              className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-sm border border-violet-500/20"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
