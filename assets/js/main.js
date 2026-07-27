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
