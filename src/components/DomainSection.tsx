"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/SectionEyebrow";
import {
  Blocks,
  RefreshCw,
  Workflow,
  Gauge,
  ShieldCheck,
  Layout,
} from "lucide-react";

const domains = [
  {
    icon: <Blocks className="domain-icon" />,
    title: "Desenvolvimento Backend Java & Node.js",
    description:
      "Construção de serviços, regras de negócio e persistência de dados com foco em organização de código, segurança e facilidade de manutenção.",
    tags: ["Java", "Spring Boot", "Node.js", "PostgreSQL", "Oracle", "JPA"],
  },
  {
    icon: <RefreshCw className="domain-icon" />,
    title: "Modernização de Sistemas & Microsserviços",
    description:
      "Atualização gradual de aplicações legadas, redução de acoplamento, transição para microsserviços ou monólitos modulares sem interromper a operação.",
    tags: [
      "Microsserviços",
      "Monólito Modular",
      "Refatoração",
      "DDD",
      "Hexagonal",
      "Migração",
    ],
  },
  {
    icon: <Workflow className="domain-icon" />,
    title: "APIs, Mensageria & Integrações",
    description:
      "Desenvolvimento de APIs e comunicação entre sistemas com contratos bem definidos, eventos assíncronos e tratamento adequado de falhas.",
    tags: ["REST", "gRPC", "Apache Kafka", "Mensageria", "Redis"],
  },
  {
    icon: <Layout className="domain-icon" />,
    title: "Aplicações Web & Frontend",
    description:
      "Implementação de interfaces modernas, painéis administrativos e aplicações web responsivas integradas ao backend.",
    tags: ["TypeScript", "React", "Next.js", "Angular", "Vue.js", "Tailwind"],
  },
  {
    icon: <ShieldCheck className="domain-icon" />,
    title: "Qualidade, Testes & Fluxo IA",
    description:
      "Automação de testes, integração contínua e uso de agentes de IA no fluxo de desenvolvimento para acelerar entregas com segurança.",
    tags: ["JUnit", "Testes Automatizados", "CI/CD", "Docker", "Coding Agents"],
  },
  {
    icon: <Gauge className="domain-icon" />,
    title: "Performance, Cloud & Estabilidade",
    description:
      "Diagnóstico de lentidão, otimização de consultas em banco de dados, ajustes de uso de recursos e monitoramento em produção.",
    tags: ["AWS", "Observabilidade", "Tuning SQL", "Cache", "Linux"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function DomainSection() {
  return (
    <section id="especialidades" className="domain-shell">
      <div className="domain-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="domain-header"
        >
          <SectionEyebrow
            number="03"
            label="Áreas de atuação · tecnologias"
            className="domain-eyebrow"
          />

          <h2 className="domain-title">
            No que posso <span>ajudar.</span>
          </h2>
          <p className="domain-description">
            Desenvolvimento de ponta a ponta, evolução de sistemas em produção e
            apoio técnico com as ferramentas que utilizo no dia a dia.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="domain-grid"
        >
          {domains.map((domain, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="domain-card group"
            >
              <div className="domain-card-bg" aria-hidden="true" />
              <div className="domain-icon-wrapper">{domain.icon}</div>
              <h3 className="domain-card-title">{domain.title}</h3>
              <p className="domain-card-desc">{domain.description}</p>
              <div
                className="domain-tags"
                aria-label={`Tecnologias de ${domain.title}`}
              >
                {domain.tags.map((tag) => (
                  <span key={tag} className="domain-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
