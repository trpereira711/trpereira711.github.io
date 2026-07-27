const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Reveal ao rolar: revela cada elemento .reveal quando entra na viewport.
const revealElements = document.querySelectorAll(".reveal");

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

  revealElements.forEach((el) => revealObserver.observe(el));
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

      const progress = methodologySteps.length > 1
        ? furthestStep / (methodologySteps.length - 1)
        : 1;
      methodologyList.style.setProperty("--timeline-progress", String(progress));
    },
    { threshold: 0.55, rootMargin: "0px 0px -12% 0px" }
  );

  methodologySteps.forEach((step) => methodologyObserver.observe(step));
} else if (methodologySteps.length) {
  methodologySteps.forEach((step) => step.classList.add("is-active"));
  methodologyList.style.setProperty("--timeline-progress", "1");
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
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

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

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
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}
