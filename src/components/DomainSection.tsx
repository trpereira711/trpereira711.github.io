"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/SectionEyebrow";
import { Blocks, RefreshCw, Workflow, Gauge } from "lucide-react";

const domains = [
  {
    icon: <Blocks className="domain-icon" />,
    title: "Arquitetura & DDD",
    description:
      "Design de sistemas escaláveis e resilientes utilizando Domain-Driven Design para modelar complexidades reais do negócio.",
  },
  {
    icon: <RefreshCw className="domain-icon" />,
    title: "Modernização de Legados",
    description:
      "Evolução segura de monolitos para microsserviços, atualizando stacks antigas sem interromper a operação da empresa.",
  },
  {
    icon: <Workflow className="domain-icon" />,
    title: "APIs & Integrações",
    description:
      "Construção de ecossistemas integrados robustos e desenvolvimento de APIs REST/gRPC performáticas para múltiplos clientes.",
  },
  {
    icon: <Gauge className="domain-icon" />,
    title: "Performance & Confiabilidade",
    description:
      "Otimização extrema para sistemas de missão crítica, garantindo tolerância a falhas, observabilidade e baixa latência.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
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
            label="Áreas de domínio · hard skills"
            className="domain-eyebrow"
          />

          <h2 className="domain-title">
            Onde eu gero <span>mais valor.</span>
          </h2>
          <p className="domain-description">
            Minhas áreas de especialidade são focadas em resolver problemas arquiteturais e de negócio no backend.
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
            <motion.div key={index} variants={cardVariants} className="domain-card group">
              <div className="domain-card-bg" aria-hidden="true" />
              <div className="domain-icon-wrapper">
                {domain.icon}
              </div>
              <h3 className="domain-card-title">{domain.title}</h3>
              <p className="domain-card-desc">{domain.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
