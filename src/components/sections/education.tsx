"use client";

import { motion, useInView } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";
import { useRef } from "react";

const education = [
  {
    degree: "Bachelor of Business Administration (B.B.A)",
    field: "Management",
    institution: "University",
    period: "2015 - 2019",
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-24 sm:py-32 bg-zinc-950">
      <div className="absolute inset-0 bg-linear-to-b from-indigo-950/10 via-transparent to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 font-medium text-sm uppercase tracking-wider">
            Background
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Education &{" "}
            <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-violet-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-violet-400 font-medium mb-2">
                      {edu.field}
                    </p>
                    <div className="flex items-center gap-2 text-zinc-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
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
