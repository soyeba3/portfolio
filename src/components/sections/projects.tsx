"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Building2,
  Smartphone,
  Users,
  Video,
  CreditCard,
  Database,
  Shield,
  FileText,
  MessageSquare,
  Calendar,
  BookOpen,
} from "lucide-react";

const projects = [
  {
    title: "Academy Suite",
    subtitle: "Multi-tenant SaaS Platform",
    description:
      "A comprehensive online course platform enabling businesses to launch their own branded academies. Features multi-tenant architecture with complete customer isolation, flexible payment integrations, and meeting platform connections.",
    icon: GraduationCap,
    gradient: "from-violet-600 to-purple-600",
    features: [
      { icon: Building2, text: "Multi-tenant Architecture" },
      { icon: Video, text: "Zoom, Teams & Google Meet" },
      { icon: CreditCard, text: "SSL Commerz & Stripe" },
      { icon: Shield, text: "Role-based Permissions" },
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "Drizzle ORM",
      "MySQL",
      "Redis",
      "BunnyCDN",
    ],
  },
  {
    title: "Tarsheed Academy",
    subtitle: "Islamic Learning Platform",
    description:
      "An immersive Islamic education platform featuring live classes, recorded lessons, voice quizzes for Quranic recitation, and assignment submissions. Designed for structured learning paths including Sirat, Hifz, Namaz, and Ramadan courses.",
    icon: BookOpen,
    gradient: "from-emerald-600 to-teal-600",
    features: [
      { icon: Video, text: "Live & Recorded Classes" },
      { icon: MessageSquare, text: "Voice Quizzes" },
      { icon: FileText, text: "Assignment Submissions" },
      { icon: Calendar, text: "Class Scheduling" },
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "Drizzle ORM",
      "PostgreSQL",
      "BunnyCDN",
      "Gotipath",
    ],
  },
  {
    title: "Uni Assist",
    subtitle: "University Application Platform",
    description:
      "A comprehensive platform connecting students with universities worldwide. Features intelligent agent-based application processing, document management, and real-time messaging between students, agents, and administrators.",
    icon: Building2,
    gradient: "from-blue-600 to-cyan-600",
    features: [
      { icon: Database, text: "University Database" },
      { icon: Users, text: "Agent Management" },
      { icon: FileText, text: "Document Tracking" },
      { icon: MessageSquare, text: "Real-time Messaging" },
    ],
    techStack: ["Next.js", "Hono", "Drizzle ORM", "MySQL", "Lucia Auth"],
  },
  {
    title: "Tarsheed One-to-One",
    subtitle: "Personalized Learning Mobile App",
    description:
      "A React Native mobile application for personalized one-on-one Islamic education. Features parent/child account management, subscription-based learning, progress tracking, and exam management with instructor assignment.",
    icon: Smartphone,
    gradient: "from-orange-600 to-amber-600",
    features: [
      { icon: Users, text: "Parent/Child Accounts" },
      { icon: CreditCard, text: "Subscription Management" },
      { icon: Calendar, text: "Class Routines" },
      { icon: GraduationCap, text: "Exam & Progress Tracking" },
    ],
    techStack: ["React Native", "Expo", "NestJS", "PostgreSQL", "SSL Commerz"],
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-zinc-950">
      <div className="absolute inset-0 bg-linear-to-b from-violet-950/10 via-transparent to-indigo-950/10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 font-medium text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Featured{" "}
            <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Enterprise-grade solutions built at Hidayah Lab, powering
            educational platforms and business applications
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <div className="grid lg:grid-cols-[1fr,auto] gap-6">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl bg-linear-to-br ${project.gradient} flex items-center justify-center shrink-0 shadow-lg`}
                      >
                        <project.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-1">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {project.subtitle}
                        </CardDescription>
                      </div>
                    </div>

                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.features.map((feature) => (
                        <div
                          key={feature.text}
                          className="flex items-center gap-2 text-sm text-zinc-300"
                        >
                          <feature.icon className="w-4 h-4 text-violet-400" />
                          {feature.text}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`hidden lg:block w-2 bg-linear-to-b ${project.gradient} group-hover:w-3 transition-all duration-300`}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
