"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/SectionEyebrow";

export default function AboutSection() {
  return (
    <section id="sobre" className="about-shell">
      <div className="about-container">
        
        {/* Left Column: Image/Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="about-visual"
        >
          {/* Placeholder for the user's photo */}
          <div className="about-image-placeholder">
            <span className="about-image-initials">TP</span>
            <div className="about-image-overlay" />
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="about-content"
        >
          <SectionEyebrow
            number="02"
            label="Sobre mim · trajetória profissional"
            className="about-eyebrow"
          />

          <h2 className="about-title">
            Construindo software para <br />
            <span>impactar negócios.</span>
          </h2>
          
          <div className="about-subtitle">
            Arquiteto de Software & Engenheiro Backend Sênior
          </div>
          
          <p className="about-description">
            Sou o Thiago Roberto Pereira, um engenheiro de software sênior com
            uma forte paixão por arquitetura limpa e sistemas resilientes. Com mais
            de 15 anos de experiência no desenvolvimento e modernização de legados,
            tenho atuado em sistemas de alta escala e missão crítica nos setores
            financeiro, de saúde e governamental.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-number">+15</h3>
              <p className="stat-label">Anos de<br/>Experiência</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">Crítica</h3>
              <p className="stat-label">Missão &<br/>Confiabilidade</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">Escala</h3>
              <p className="stat-label">Alta<br/>Performance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
