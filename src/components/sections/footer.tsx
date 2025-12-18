"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 bg-zinc-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-zinc-500 text-sm">
            © {currentYear} Soyeb Chandani. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-zinc-500 text-sm">
            Built with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            using Next.js & Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
