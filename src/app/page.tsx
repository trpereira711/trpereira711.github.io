"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient effects (Glassmorphism / Modern vibe) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
        
        <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-8">
            
            {/* Animated Profile Image placeholder or initials */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-32 rounded-full border-4 border-background shadow-xl overflow-hidden ring-2 ring-primary/20"
            >
              <div className="w-full h-full bg-muted flex items-center justify-center text-3xl font-bold">
                TP
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Olá! Sou Thiago Roberto Pereira
              </h1>
              <h2 className="text-xl md:text-3xl text-primary font-medium">
                Arquiteto de Software & Engenheiro Backend
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[600px] text-lg md:text-xl text-muted-foreground"
            >
              Construindo e modernizando sistemas de alta escala e missão crítica há mais de 15 anos.
            </motion.p>

            {/* CTA & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <a
                href="#contato"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Vamos trocar uma ideia
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://github.com/trpereira711"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
              >
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/thiago-roberto-pereira"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
              >
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:seu-email@exemplo.com"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">E-mail</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
