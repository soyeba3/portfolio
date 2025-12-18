"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "soyebchandani@gmail.com",
    href: "mailto:soyebchandani@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/soyeba3",
    href: "https://linkedin.com/in/soyeba3",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/soyeba3",
    href: "https://github.com/soyeba3",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-zinc-950">
      <div className="absolute inset-0 bg-linear-to-t from-violet-950/20 via-transparent to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-violet-400 font-medium text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Let&apos;s Work{" "}
            <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Whether
            it&apos;s a new product, feature development, or just a chat about
            technology.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 p-8 rounded-2xl bg-linear-to-br from-white/5 to-white/2 border border-white/10"
          >
            <div className="flex items-center justify-center gap-2 text-zinc-400 mb-8">
              <MapPin className="w-5 h-5" />
              <span>Dhaka, Bangladesh</span>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                    <link.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-zinc-500">{link.label}</p>
                    <p className="text-white font-medium">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <a href="mailto:soyebchandani@gmail.com">
                <Button size="lg" className="w-full sm:w-auto">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Me an Email
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
