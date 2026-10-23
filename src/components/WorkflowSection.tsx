"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/SectionEyebrow";
import {
  Compass,
  SearchCode,
  GitBranch,
  Code2,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Compass className="workflow-icon" />,
    title: "Contexto e negócio",
    tag: "Entendimento",
    description:
      "Compreensão do cenário atual, das regras de negócio e das restrições técnicas antes de propor qualquer mudança.",
  },
  {
    number: "02",
    icon: <SearchCode className="workflow-icon" />,
    title: "Diagnóstico do código",
    tag: "Análise",
    description:
      "Mapeamento de dependências, pontos críticos e gargalos, usando análise assistida por IA para ganhar agilidade na leitura do sistema.",
  },
  {
    number: "03",
    icon: <GitBranch className="workflow-icon" />,
    title: "Definição da solução",
    tag: "Planejamento",
    description:
      "Escolha do caminho mais simples e viável para resolver o problema, evitando complexidade desnecessária.",
  },
  {
    number: "04",
    icon: <Code2 className="workflow-icon" />,
    title: "Desenvolvimento e testes",
    tag: "Execução",
    description:
      "Implementação em entregas pequenas e frequentes, acompanhadas de testes automatizados e validação contínua.",
  },
  {
    number: "05",
    icon: <CheckCircle2 className="workflow-icon" />,
    title: "Entrega e documentação",
    tag: "Consolidação",
    description:
      "Código revisado em produção, decisões técnicas registradas de forma objetiva e base organizada para o time evoluir.",
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WorkflowSection() {
  return (
    <section id="como-trabalho" className="workflow-shell">
      <div className="workflow-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="workflow-header"
        >
          <SectionEyebrow
            number="04"
            label="Como trabalho · processo"
            className="workflow-eyebrow"
          />

          <h2 className="workflow-title">
            Do entendimento do problema <span>até a produção.</span>
          </h2>
          <p className="workflow-description">
            Um processo direto e transparente para evoluir sistemas existentes
            ou construir novas soluções com previsibilidade.
          </p>
        </motion.div>

        <motion.ol
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="workflow-grid"
        >
          {steps.map((step) => (
            <motion.li
              key={step.number}
              variants={itemVariants}
              className="workflow-card group"
            >
              <div className="workflow-card-top">
                <span className="workflow-step-num">{step.number}</span>
                <span className="workflow-step-tag">{step.tag}</span>
              </div>

              <div className="workflow-title-row">
                <div className="workflow-icon-box">{step.icon}</div>
                <h3 className="workflow-card-title">{step.title}</h3>
              </div>

              <p className="workflow-card-desc">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
