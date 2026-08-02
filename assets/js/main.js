const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Reveal ao rolar: revela cada bloco quando entra na viewport.
// .reveal anima o elemento inteiro; .reveal-group anima os filhos em cascata.
const revealElements = document.querySelectorAll(".reveal, .reveal-group");

if ("IntersectionObserver" in window && revealElements.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  // Só esconde elementos depois que o mecanismo que voltará a exibi-los existe.
  revealElements.forEach((el) => {
    el.classList.add("reveal-ready");
    revealObserver.observe(el);
  });
} else {
  // Fallback: sem suporte a IntersectionObserver, mostra tudo.
  revealElements.forEach((el) => el.classList.add("is-visible"));
}

const methodologyList = document.querySelector(".methodology-list");
const methodologySteps = methodologyList
  ? Array.from(methodologyList.querySelectorAll("li"))
  : [];

if ("IntersectionObserver" in window && methodologySteps.length) {
  let furthestStep = -1;
  const methodologyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const stepIndex = methodologySteps.indexOf(entry.target);
        furthestStep = Math.max(furthestStep, stepIndex);
        entry.target.classList.add("is-active");
        methodologyObserver.unobserve(entry.target);
      });

      methodologySteps.forEach((step, index) => {
        if (index < furthestStep) step.classList.add("is-complete");
      });
    },
    { threshold: 0.55, rootMargin: "0px 0px -12% 0px" }
  );

  methodologySteps.forEach((step) => methodologyObserver.observe(step));
} else if (methodologySteps.length) {
  methodologySteps.forEach((step, index) => {
    step.classList.add("is-active");
    if (index < methodologySteps.length - 1) step.classList.add("is-complete");
  });
}

// Scroll-spy: marca no menu a seção que está sendo lida.
const navLinks = Array.from(document.querySelectorAll(".navigation a[href^='#']"));
const navTargets = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && navTargets.length) {
  const inBand = new Set();

  const highlightCurrent = () => {
    // Em ordem de documento, a primeira seção dentro da faixa é a atual.
    const current = navTargets.find((section) => inBand.has(section));

    navLinks.forEach((link) => {
      const isCurrent = Boolean(current) && link.getAttribute("href") === `#${current.id}`;
      link.classList.toggle("is-current", isCurrent);

      if (isCurrent) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          inBand.add(entry.target);
        } else {
          inBand.delete(entry.target);
        }
      });

      highlightCurrent();
    },
    // Faixa estreita perto do topo, logo abaixo do header fixo.
    { rootMargin: "-20% 0px -75% 0px" }
  );

  navTargets.forEach((section) => navObserver.observe(section));
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  // Com JavaScript ativo, usamos as mensagens acessíveis abaixo. Sem ele,
  // o atributo novalidate não existe no HTML e o navegador valida o formulário.
  contactForm.noValidate = true;

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const buttonLabel = submitButton.querySelector(".button-label");
  const formStatus = contactForm.querySelector(".form-status");
  const defaultButtonLabel = buttonLabel.textContent;
  const fieldLimits = {
    _gotcha: 100,
    nome: 100,
    empresa: 120,
    email: 254,
    mensagem: 3000
  };

  // Validação por campo: o formulário usa novalidate, então a mensagem
  // fica presa ao campo via aria-describedby em vez de num balão do browser.
  const validators = {
    nome: (value) => (value.trim() ? "" : "Informe seu nome."),
    email: (value) => {
      if (!value.trim()) return "Informe seu e-mail.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
        ? ""
        : "Informe um e-mail válido.";
    },
    mensagem: (value) => (value.trim() ? "" : "Descreva brevemente o contexto do sistema.")
  };

  const setFieldError = (field, message) => {
    const errorNode = contactForm.querySelector(`#erro-${field.name}`);
    if (errorNode) errorNode.textContent = message;

    if (message) {
      field.setAttribute("aria-invalid", "true");
    } else {
      field.removeAttribute("aria-invalid");
    }
  };

  // O erro some assim que a pessoa começa a corrigir.
  Object.keys(validators).forEach((name) => {
    const field = contactForm.elements[name];
    if (field) field.addEventListener("input", () => setFieldError(field, ""));
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const invalidFields = Object.entries(validators)
      .map(([name, validate]) => {
        const field = contactForm.elements[name];
        const message = field ? validate(field.value) : "";
        if (field) setFieldError(field, message);
        return message ? field : null;
      })
      .filter(Boolean);

    if (invalidFields.length) {
      formStatus.textContent = `Revise ${invalidFields.length === 1 ? "o campo destacado" : "os campos destacados"} antes de enviar.`;
      formStatus.className = "form-status is-error";
      invalidFields[0].focus();
      return;
    }

    const formData = new FormData(contactForm);
    const hasOversizedField = Object.entries(fieldLimits).some(([field, limit]) => {
      const value = formData.get(field);
      return typeof value === "string" && value.length > limit;
    });

    if (hasOversizedField) {
      formStatus.textContent = "Um ou mais campos ultrapassaram o limite permitido.";
      formStatus.className = "form-status is-error";
      return;
    }

    submitButton.disabled = true;
    buttonLabel.textContent = "Enviando...";
    formStatus.textContent = "";
    formStatus.className = "form-status";
    contactForm.setAttribute("aria-busy", "true");

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        const message = response.status === 429
          ? "Muitas tentativas em sequência. Aguarde um momento e tente novamente."
          : "Não foi possível enviar sua mensagem. Tente novamente.";
        throw new Error(message);
      }

      contactForm.reset();
      Object.keys(validators).forEach((name) => {
        const field = contactForm.elements[name];
        if (field) setFieldError(field, "");
      });
      formStatus.textContent = "Mensagem enviada. Retornarei o contato assim que possível.";
      formStatus.classList.add("is-success");
    } catch (error) {
      formStatus.textContent = error.message;
      formStatus.classList.add("is-error");
    } finally {
      submitButton.disabled = false;
      buttonLabel.textContent = defaultButtonLabel;
      contactForm.removeAttribute("aria-busy");
    }
  });
}

if (menuButton && navigation) {
  const closeMenu = () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Esc fecha o menu e devolve o foco ao botão.
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !navigation.classList.contains("is-open")) return;
    closeMenu();
    menuButton.focus();
  });

  // Ativa o menu recolhível somente depois que todos os controles existem.
  menuButton.classList.add("is-enhanced");
  navigation.classList.add("is-enhanced");
}
