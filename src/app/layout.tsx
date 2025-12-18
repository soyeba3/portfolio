import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soyeb Chandani | Lead Developer at Hidayah Lab",
  description:
    "Full-stack developer specializing in building scalable SaaS platforms, mobile apps, and enterprise solutions. Lead Developer at Hidayah Lab.",
  keywords: [
    "Full-stack Developer",
    "Lead Developer",
    "SaaS",
    "React",
    "Next.js",
    "React Native",
    "NestJS",
    "Hidayah Lab",
  ],
  authors: [{ name: "Soyeb Chandani" }],
  openGraph: {
    title: "Soyeb Chandani | Lead Developer at Hidayah Lab",
    description:
      "Full-stack developer specializing in building scalable SaaS platforms, mobile apps, and enterprise solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
