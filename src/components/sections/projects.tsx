"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Building2,
  Calendar,
  Code2,
  CreditCard,
  Database,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Languages,
  MessageSquare,
  Shield,
  Smartphone,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";

type ProjectLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type ProjectFeature = {
  icon: LucideIcon;
  text: string;
};

type WorkProject = {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  features: ProjectFeature[];
  techStack: string[];
  links: ProjectLink[];
  comingSoon?: string;
};

type PersonalProject = {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  highlights: string[];
  techStack: string[];
  links: ProjectLink[];
  status: string;
  statusVariant: "default" | "secondary" | "outline" | "success" | "warning";
};

const workProjects: WorkProject[] = [
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
      "Stripe",
      "BunnyCDN",
    ],
    links: [
      {
        label: "Marketing Site",
        href: "https://academysuite.io/",
        icon: ExternalLink,
      },
      { label: "Live Demo", href: "https://vasha.ac", icon: ExternalLink },
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
    techStack: ["Next.js", "NestJS", "Drizzle ORM", "PostgreSQL", "Stripe"],
    links: [
      {
        label: "Visit Site",
        href: "https://tarsheedacademy.com",
        icon: ExternalLink,
      },
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
    techStack: ["Next.js", "Drizzle ORM", "MySQL", "Lucia Auth"],
    links: [
      {
        label: "Visit Site",
        href: "https://dev.uniassist.info/",
        icon: ExternalLink,
      },
    ],
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
    links: [],
    comingSoon: "Coming Soon to Play Store",
  },
];

const personalProjects: PersonalProject[] = [
  {
    title: "CodeCollab",
    subtitle: "Real-time collaborative code review platform",
    description:
      "A full-stack collaboration product where developers can open a shared review session, edit code together, discuss in real time, and keep sessions persistent for later.",
    icon: Code2,
    gradient: "from-sky-500 to-indigo-500",
    highlights: [
      "Real-time shared editor with Monaco",
      "Live chat, cursors, and room presence",
      "Line-based annotations for reviews",
      "Persistent sessions with shareable URLs",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Socket.io",
      "Drizzle ORM",
      "Neon PostgreSQL",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://codecollab-soyeb.vercel.app",
        icon: ExternalLink,
      },
      {
        label: "GitHub",
        href: "https://github.com/soyeba3/codecollab",
        icon: Github,
      },
    ],
    status: "Live Product",
    statusVariant: "success",
  },
  {
    title: "Translify",
    subtitle: "AI-powered Bangla-English translator",
    description:
      "An AI translation tool focused on Bangla, English, and Banglish input with model switching, quick copy actions, and a clean interface for everyday translation tasks.",
    icon: Languages,
    gradient: "from-emerald-500 to-cyan-500",
    highlights: [
      "Bangla, English, and Banglish support",
      "Multiple AI model choices in one flow",
      "Fast copy-ready translation output",
      "Validation-focused UX for reliable requests",
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "OpenRouter",
      "Gemini",
      "Tailwind CSS 4",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://translify-soyeb.vercel.app/",
        icon: ExternalLink,
      },
      {
        label: "GitHub",
        href: "https://github.com/soyeba3/translify",
        icon: Github,
      },
    ],
    status: "Open Source",
    statusVariant: "default",
  },
];

const actionLinkClassName =
  "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-zinc-300 hover:text-white transition-all duration-300 border border-white/10 hover:border-violet-500/30";

function WorkProjectCard({
  project,
  index,
  isInView,
}: {
  project: WorkProject;
  index: number;
  isInView: boolean;
}) {
  return (
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
                <CardTitle className="text-2xl mb-1">{project.title}</CardTitle>
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

            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-white/10">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionLinkClassName}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
              {typeof project.comingSoon === "string" ? (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 text-sm text-amber-400 border border-amber-500/20">
                  <Smartphone className="w-4 h-4" />
                  {project.comingSoon}
                </span>
              ) : null}
            </div>
          </div>

          <div
            className={`hidden lg:block w-2 bg-linear-to-b ${project.gradient} group-hover:w-3 transition-all duration-300`}
          />
        </div>
      </Card>
    </motion.div>
  );
}

function PersonalProjectCard({
  project,
  index,
  isInView,
}: {
  project: PersonalProject;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.35 + index * 0.12 }}
      className="h-full"
    >
      <Card className="relative h-full overflow-hidden group p-6 sm:p-7">
        <div
          className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${project.gradient}`}
        />
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div
              className={`w-14 h-14 rounded-2xl bg-linear-to-br ${project.gradient} flex items-center justify-center shrink-0 shadow-lg`}
            >
              <project.icon className="w-7 h-7 text-white" />
            </div>
            <Badge variant={project.statusVariant}>{project.status}</Badge>
          </div>

          <div className="mt-6">
            <CardTitle className="text-2xl">{project.title}</CardTitle>
            <CardDescription className="mt-2 text-base">
              {project.subtitle}
            </CardDescription>
          </div>

          <p className="mt-4 text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          <div className="grid gap-2 mt-6">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300"
              >
                {highlight}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-white/10">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={actionLinkClassName}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

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
            Professional & Personal{" "}
            <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            A curated mix of production systems I helped ship professionally and
            personal products I built to explore real-time collaboration, AI,
            and developer tooling
          </p>
        </motion.div>

        <div className="space-y-24">
          <div>
            <div className="flex flex-col gap-4 mb-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <Badge variant="outline" className="border-violet-500/20">
                  Professional Projects
                </Badge>
                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
                  Production work delivered with Hidayah Lab
                </h3>
              </div>
            </div>

            <div className="grid gap-8">
              {workProjects.map((project, index) => (
                <WorkProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-[2rem] border border-white/10 bg-white/3 p-6 sm:p-8 lg:p-10 backdrop-blur-xl"
          >
            <div className="grid gap-10 lg:grid-cols-[0.95fr,1.25fr] lg:items-start">
              <div>
                <Badge variant="default">Personal Projects</Badge>
                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
                  Independent builds that show how I think end-to-end
                </h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Outside of client work, I build products around collaboration,
                  AI, and developer experience. These are the projects where I
                  explore ideas quickly, own the full product direction, and
                  ship features from concept to release.
                </p>
                <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-2xl border border-white/10 bg-zinc-900/60 px-5 py-4">
                    <div className="text-sm text-zinc-500">Focus areas</div>
                    <div className="mt-2 text-base font-medium text-white">
                      Real-time collaboration and AI workflows
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {personalProjects.map((project, index) => (
                  <PersonalProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
