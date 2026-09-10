"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AboutSection from "@/components/AboutSection";

const technologies = [
  "Java",
  "Spring Boot",
  "Monólito Modular",
  "Microsserviços",
  "DevOps",
  "AWS",
  "Kafka",
  "Arquitetura Hexagonal",
  "DDD",
  "Event Sourcing",
  "CQRS",
  "Node.js",
  "React",
  "TypeScript",
  "Angular",
  "Vue.js"
];

function AnimatedBackground() {
  return (
    <div className="hero-background" aria-hidden="true">
      <div className="hero-noise" />
      <div className="hero-grid" />
      <div className="hero-orb hero-orb-primary" />
      <div className="hero-orb hero-orb-secondary" />
    </div>
  );
}

function BrandWordmark() {
  return (
    <svg
      className="brand-wordmark"
      viewBox="0 0 130 28"
      role="img"
      aria-label="Thiago ponto dev"
    >
      <defs>
        <filter
          id="brand-fuzz"
          x="-30%"
          y="-100%"
          width="160%"
          height="300%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="1.65"
            result="soft-brand"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="3"
            seed="7"
            result="brand-noise"
          >
            <animate
              attributeName="seed"
              dur="0.45s"
              repeatCount="indefinite"
              values="7;19;11;25;7"
            />
          </feTurbulence>
          <feDisplacementMap
            in="soft-brand"
            in2="brand-noise"
            scale="5.5"
            xChannelSelector="R"
            yChannelSelector="G"
            result="fuzzy-brand"
          >
            <animate
              attributeName="scale"
              dur="1.4s"
              repeatCount="indefinite"
              values="4.2;6.4;4.8;5.9;4.2"
            />
          </feDisplacementMap>
          <feColorMatrix
            in="brand-noise"
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0.72 0.72 0.72 0 0"
            result="grain-mask"
          />
          <feComposite
            in="fuzzy-brand"
            in2="grain-mask"
            operator="in"
            result="grain-brand"
          />
          <feMerge>
            <feMergeNode in="fuzzy-brand" />
            <feMergeNode in="grain-brand" />
          </feMerge>
        </filter>
      </defs>

      <text
        className="brand-wordmark-fuzz"
        x="2"
        y="20"
        filter="url(#brand-fuzz)"
      >
        THIAGO.DEV
      </text>
      <text className="brand-wordmark-label" x="2" y="20">
        THIAGO<tspan className="brand-wordmark-dot">.</tspan>DEV
      </text>
    </svg>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="social-link group"
    >
      <span>{label}</span>
      <ArrowUpRight
        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:size-5"
        aria-hidden="true"
      />
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      <section className="hero-shell">
        <AnimatedBackground />

        <header className="hero-header">
          <a href="#inicio" className="brand" aria-label="Ir para o início">
            <BrandWordmark />
          </a>

          <div className="availability">
            <span className="availability-dot" aria-hidden="true" />
            15+ anos construindo software
          </div>
        </header>

        <div id="inicio" className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-eyebrow">
              <span aria-hidden="true">01</span>
              <span>Software architecture · Backend engineering</span>
            </div>

            <h1 className="hero-title">
              Olá! Sou Thiago,
              <span>
                Arquiteto de Software
                <span className="title-cursor" aria-hidden="true" />
              </span>
              e Engenheiro FullStack.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hero-footer"
          >
            <p className="hero-description">
              Construindo e modernizando sistemas de alta escala e missão
              crítica há mais de 15 anos.
            </p>

            <nav className="social-links" aria-label="Links principais">
              <SocialLink
                href="https://linkedin.com/in/thiago-roberto-pereira"
                label="LinkedIn"
              />
              <SocialLink
                href="https://github.com/trpereira711"
                label="GitHub"
              />
              <SocialLink href="#contato" label="Contato" />
            </nav>
          </motion.div>
        </div>

        <div className="tech-ticker" aria-label={`Tecnologias: ${technologies.join(", ")}`}>
          <div className="ticker-track" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div className="ticker-group" key={copy}>
                {technologies.map((technology) => (
                  <span className="ticker-item" key={`${copy}-${technology}`}>
                    {technology}
                    <span className="ticker-symbol" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
    </main>
  );
}
