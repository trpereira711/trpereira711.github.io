"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Send,
  AlertCircle,
} from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";

type FieldErrors = {
  nome?: string;
  email?: string;
  mensagem?: string;
};

export default function ContactSection() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<{
    type: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const validateForm = (formData: FormData): FieldErrors => {
    const newErrors: FieldErrors = {};
    const nome = String(formData.get("nome") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const mensagem = String(formData.get("mensagem") ?? "").trim();

    if (!nome) {
      newErrors.nome = "Informe seu nome.";
    }
    if (!email) {
      newErrors.email = "Informe seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Informe um e-mail válido.";
    }
    if (!mensagem) {
      newErrors.mensagem = "Escreva uma mensagem antes de enviar.";
    }

    return newErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({
        type: "error",
        message: "Revise os campos destacados antes de enviar.",
      });
      return;
    }

    setErrors({});
    setStatus({ type: "submitting", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/xrenrjbg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const errorMsg =
          response.status === 429
            ? "Muitas tentativas em sequência. Aguarde um momento e tente novamente."
            : "Não foi possível enviar agora. Tente novamente ou me chame no LinkedIn.";
        throw new Error(errorMsg);
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Mensagem enviada com sucesso. Retornarei o contato em breve.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof Error
            ? err.message
            : "Erro ao enviar mensagem. Tente novamente.",
      });
    }
  };

  return (
    <section id="contato" className="contact-shell">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Column: Pitch & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="contact-info"
          >
            <SectionEyebrow number="05" label="Contato · canais diretos" />

            <h2 className="contact-title">
              Vamos conversar sobre o <span>seu projeto?</span>
            </h2>

            <p className="contact-description">
              Se você precisa evoluir um sistema existente, tirar uma ideia do
              papel ou reforçar seu time, me mande uma mensagem ou entre em
              contato diretamente pelas redes abaixo.
            </p>

            <div className="contact-channels">
              <a
                href="https://www.linkedin.com/in/thiago-roberto-pereira-2b2a89106/"
                target="_blank"
                rel="me noopener noreferrer"
                className="contact-channel-card group"
              >
                <div>
                  <span className="contact-channel-label">
                    Rede profissional
                  </span>
                  <strong className="contact-channel-name">LinkedIn</strong>
                </div>
                <ArrowUpRight
                  className="size-5 text-[var(--accent)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://github.com/trpereira711"
                target="_blank"
                rel="me noopener noreferrer"
                className="contact-channel-card group"
              >
                <div>
                  <span className="contact-channel-label">
                    Repositórios &amp; código
                  </span>
                  <strong className="contact-channel-name">GitHub</strong>
                </div>
                <ArrowUpRight
                  className="size-5 text-[var(--accent)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="contact-location">
              <MapPin
                className="size-4 text-[var(--accent)]"
                aria-hidden="true"
              />
              <span>Brasília, DF · Atuação remota em todo o Brasil</span>
            </div>
          </motion.div>

          {/* Right Column: Formspree Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="contact-form-card"
              aria-busy={status.type === "submitting"}
            >
              <input
                type="text"
                name="_gotcha"
                maxLength={100}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="campo-nome" className="contact-label">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="campo-nome"
                    name="nome"
                    maxLength={100}
                    autoComplete="name"
                    placeholder="Seu nome"
                    aria-invalid={Boolean(errors.nome)}
                    aria-describedby={errors.nome ? "erro-nome" : undefined}
                    onChange={() =>
                      errors.nome &&
                      setErrors((prev) => ({ ...prev, nome: undefined }))
                    }
                    className="contact-input"
                  />
                  {errors.nome && (
                    <span id="erro-nome" className="contact-error">
                      {errors.nome}
                    </span>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="campo-empresa" className="contact-label">
                    Empresa / Projeto{" "}
                    <span className="contact-optional">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    id="campo-empresa"
                    name="empresa"
                    maxLength={120}
                    autoComplete="organization"
                    placeholder="Nome da empresa ou projeto"
                    className="contact-input"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="campo-email" className="contact-label">
                  E-mail
                </label>
                <input
                  type="email"
                  id="campo-email"
                  name="email"
                  maxLength={254}
                  autoComplete="email"
                  placeholder="voce@exemplo.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "erro-email" : undefined}
                  onChange={() =>
                    errors.email &&
                    setErrors((prev) => ({ ...prev, email: undefined }))
                  }
                  className="contact-input"
                />
                {errors.email && (
                  <span id="erro-email" className="contact-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="campo-mensagem" className="contact-label">
                  Como posso ajudar?
                </label>
                <textarea
                  id="campo-mensagem"
                  name="mensagem"
                  rows={4}
                  maxLength={3000}
                  placeholder="Conte brevemente sobre o projeto, o sistema atual ou a necessidade da sua equipe..."
                  aria-invalid={Boolean(errors.mensagem)}
                  aria-describedby={
                    errors.mensagem ? "erro-mensagem" : undefined
                  }
                  onChange={() =>
                    errors.mensagem &&
                    setErrors((prev) => ({ ...prev, mensagem: undefined }))
                  }
                  className="contact-textarea"
                />
                {errors.mensagem && (
                  <span id="erro-mensagem" className="contact-error">
                    {errors.mensagem}
                  </span>
                )}
              </div>

              <div className="contact-form-footer">
                <button
                  type="submit"
                  disabled={status.type === "submitting"}
                  className="contact-submit-btn"
                >
                  <span>
                    {status.type === "submitting"
                      ? "Enviando..."
                      : "Enviar mensagem"}
                  </span>
                  <Send className="size-4" aria-hidden="true" />
                </button>

                {status.message && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`contact-status ${
                      status.type === "success"
                        ? "contact-status-success"
                        : "contact-status-error"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                    ) : (
                      <AlertCircle
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    <span>{status.message}</span>
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="site-footer-modern">
          <div className="footer-modern-left">
            <span className="footer-modern-brand">
              THIAGO<span>.</span>DEV
            </span>
            <span className="footer-modern-copy">
              © {new Date().getFullYear()} Thiago Roberto Pereira · Brasília, DF
            </span>
          </div>

          <nav className="footer-modern-nav" aria-label="Links de navegação">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#especialidades">Atuação &amp; Stack</a>
            <a href="#como-trabalho">Como trabalho</a>
          </nav>
        </footer>
      </div>
    </section>
  );
}
