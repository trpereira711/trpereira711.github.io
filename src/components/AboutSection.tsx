"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";

type TerminalLine = {
  key: string;
  value: string;
};

type TerminalCommand = {
  id: string;
  command: string;
  label: string;
  lines: TerminalLine[];
};

const terminalCommands: TerminalCommand[] = [
  {
    id: "whoami",
    command: "thiago --info",
    label: "--info",
    lines: [
      { key: "nome", value: "Thiago Roberto Pereira" },
      { key: "atuação", value: "Full Stack & Backend Developer" },
      { key: "base", value: "Brasília, DF · Remoto para todo o Brasil" },
      { key: "foco", value: "Sistemas críticos, APIs e evolução de legado" },
    ],
  },
  {
    id: "projetos",
    command: "git log --oneline --setores",
    label: "git log",
    lines: [
      {
        key: "finanças",
        value: "Serviços transacionais, integrações e alta disponibilidade",
      },
      {
        key: "saúde",
        value: "Evolução de plataformas críticas e desacoplamento de legado",
      },
      {
        key: "justiça",
        value: "Automação de fluxos complexos e processamento de dados",
      },
      {
        key: "governo",
        value: "Sistemas web de grande porte e APIs interoperáveis",
      },
    ],
  },
  {
    id: "ia",
    command: "thiago --ai-workflow",
    label: "--ai-workflow",
    lines: [
      { key: "agentes", value: "Claude Code · Cursor · Antigravity" },
      {
        key: "análise",
        value: "Mapeamento rápido de código legado e dependências",
      },
      {
        key: "qualidade",
        value: "Geração assistida de testes e revisão de bordas",
      },
      {
        key: "princípio",
        value: "IA acelera a execução; decisões são humanas",
      },
    ],
  },
  {
    id: "ambiente",
    command: "thiago --env",
    label: "--env",
    lines: [
      { key: "backend", value: "Java · Spring Boot · Node.js" },
      {
        key: "frontend",
        value: "TypeScript · React · Next.js · Angular · Vue",
      },
      { key: "dados", value: "PostgreSQL · Oracle · Redis · Apache Kafka" },
      { key: "devops", value: "Docker · AWS · CI/CD · Testes Automatizados" },
    ],
  },
];

export default function AboutSection() {
  const [activeCmd, setActiveCmd] = useState<TerminalCommand>(
    terminalCommands[0],
  );
  const [visibleLines, setVisibleLines] = useState<number>(
    terminalCommands[0].lines.length,
  );
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (!hasInteracted) return;

    setVisibleLines(0);
    let current = 0;
    const total = activeCmd.lines.length;

    const timer = window.setInterval(() => {
      current += 1;
      setVisibleLines(current);
      if (current >= total) {
        window.clearInterval(timer);
      }
    }, 90);

    return () => window.clearInterval(timer);
  }, [activeCmd, hasInteracted]);

  return (
    <section id="sobre" className="about-shell">
      <div className="about-container">
        {/* Left Column: Direct Terminal Window */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="about-visual"
        >
          <div className="about-card-window">
            <div className="about-window-bar">
              <div className="about-window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="about-window-title">
                <Terminal
                  className="inline size-3.5 mr-1.5 text-[var(--accent)]"
                  aria-hidden="true"
                />
                thiago@dev:~
              </span>
            </div>

            <div className="about-window-body">
              <div
                className="about-prompt-chips"
                role="tablist"
                aria-label="Comandos do terminal"
              >
                {terminalCommands.map((item) => {
                  const isActive = item.id === activeCmd.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${item.id}`}
                      id={`tab-${item.id}`}
                      onClick={() => {
                        setHasInteracted(true);
                        setActiveCmd(item);
                      }}
                      className={`about-prompt-chip ${
                        isActive ? "is-active" : ""
                      }`}
                    >
                      <span>$</span> {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="about-code-block" aria-live="polite">
                {terminalCommands.map((cmd) => {
                  const isActive = cmd.id === activeCmd.id;
                  const linesToShow =
                    isActive && hasInteracted
                      ? cmd.lines.slice(0, visibleLines)
                      : cmd.lines;

                  return (
                    <div
                      key={cmd.id}
                      id={`panel-${cmd.id}`}
                      role="tabpanel"
                      aria-labelledby={`tab-${cmd.id}`}
                      hidden={!isActive}
                    >
                      <p className="about-code-cmd">
                        <span className="code-prompt">&gt;</span> {cmd.command}
                      </p>

                      <dl className="terminal-kv-list">
                        {linesToShow.map((line) => (
                          <div key={line.key} className="terminal-kv-row">
                            <dt className="terminal-kv-key">{line.key}</dt>
                            <dd className="terminal-kv-val">{line.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  );
                })}

                <span className="terminal-inline-cursor" aria-hidden="true" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="about-content"
        >
          <SectionEyebrow
            number="02"
            label="Sobre mim · trajetória e experiência"
            className="about-eyebrow"
          />

          <h2 className="about-title">
            Mais de 15 anos construindo <br />
            <span>software que funciona em produção.</span>
          </h2>

          <h3 className="about-subtitle">
            Desenvolvimento Full Stack, evolução de sistemas e produtividade com
            IA
          </h3>

          <p className="about-description">
            Sou o Thiago Roberto Pereira. Ao longo da carreira, desenvolvi e
            evoluí sistemas de grande porte para áreas como finanças, saúde,
            justiça e setor público. Meu foco é resolver problemas complexos de
            forma simples: entender bem o domínio, evitar complexidade
            desnecessária e usar agentes de IA no fluxo diário para acelerar
            entregas sem abrir mão da qualidade técnica.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <strong className="stat-number">+15 anos</strong>
              <p className="stat-label">
                Experiência prática em
                <br />
                desenvolvimento
              </p>
            </div>
            <div className="stat-item">
              <strong className="stat-number">Ponta a ponta</strong>
              <p className="stat-label">
                Backend, APIs, banco
                <br />
                de dados e frontend
              </p>
            </div>
            <div className="stat-item">
              <strong className="stat-number">Alta criticidade</strong>
              <p className="stat-label">
                Sistemas em operação
                <br />
                contínua e alto volume
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
