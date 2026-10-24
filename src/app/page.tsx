"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import DomainSection from "@/components/DomainSection";
import WorkflowSection from "@/components/WorkflowSection";
import ContactSection from "@/components/ContactSection";
import SectionEyebrow from "@/components/SectionEyebrow";

const technologies = [
  "Java",
  "Spring Boot",
  "Microsserviços",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Angular",
  "Vue.js",
  "PostgreSQL",
  "Kafka",
  "Docker",
  "AWS",
  "REST & gRPC",
  "DDD",
  "Testes Automatizados",
  "CI/CD",
];

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Atuação & Stack" },
  { href: "#como-trabalho", label: "Como trabalho" },
  { href: "#contato", label: "Contato" },
];

function AnimatedBackground() {
  return (
    <div className="hero-background" aria-hidden="true">
      <div className="hero-noise" />
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
      rel={isExternal ? "noopener noreferrer" : undefined}
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

function TechTicker() {
  return (
    <div
      className="tech-ticker"
      aria-label={`Tecnologias: ${technologies.join(", ")}`}
    >
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
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector<HTMLElement>(
      "main > section + section",
    );

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <main className="page-shell min-h-screen overflow-x-hidden bg-black">
      <header className="site-topbar">
        <div className="site-topbar-inner">
          <a
            href="#inicio"
            className="brand"
            aria-label="Ir para o início"
            onClick={() => setMobileMenuOpen(false)}
          >
            <BrandWordmark />
          </a>

          <nav className="hero-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="topbar-right">
            <div className="availability">
              <span className="availability-dot" aria-hidden="true" />
              15+ anos em desenvolvimento
            </div>

            <button
              type="button"
              className="mobile-menu-btn"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav-drawer" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="hero-shell">
        <AnimatedBackground />

        <div id="inicio" className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionEyebrow
              number="01"
              label="Desenvolvimento de Software · Full Stack & Backend"
            />

            <h1 className="hero-title">
              Olá, sou o Thiago.
              <span>
                Desenvolvedor de Software
                <span className="title-cursor" aria-hidden="true" />
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hero-footer"
          >
            <p className="hero-description">
              Há mais de 15 anos desenvolvendo sistemas web, APIs e aplicações
              críticas — do backend em Java e Node.js ao frontend em React,
              TypeScript e Angular.
            </p>

            <nav className="social-links" aria-label="Links principais">
              <SocialLink
                href="https://www.linkedin.com/in/thiago-roberto-pereira-2b2a89106/"
                label="LinkedIn"
              />
              <SocialLink
                href="https://github.com/trpereira711"
                label="GitHub"
              />
              <SocialLink href="#contato" label="Entrar em contato" />
            </nav>
          </motion.div>
        </div>

        <button
          type="button"
          className="scroll-indicator"
          onClick={scrollToNextSection}
          aria-label="Ir para o conteúdo abaixo"
        >
          <ArrowDown aria-hidden="true" />
        </button>
      </section>

      <AboutSection />
      <DomainSection />
      <WorkflowSection />
      <ContactSection />
      <TechTicker />
    </main>
  );
}
