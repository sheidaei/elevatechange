document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", String(!isExpanded));
      mobileMenu.hidden = isExpanded;
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileMenu.hidden = true;
      });
    });
  }

  // Interactive Program Tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = `panel-${button.dataset.tab}`;

      tabButtons.forEach((btn) => {
        const isTarget = btn === button;
        btn.classList.toggle("active", isTarget);
        btn.setAttribute("aria-selected", String(isTarget));
      });

      tabPanels.forEach((panel) => {
        const isTarget = panel.id === targetId;
        panel.classList.toggle("active", isTarget);
        panel.hidden = !isTarget;
      });
    });
  });

  // Newsletter Form Validation -> submits natively to Un-static Forms
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterFeedback = document.getElementById("newsletter-feedback");

  if (newsletterForm && newsletterFeedback) {
    newsletterForm.addEventListener("submit", (event) => {
      const emailInput = document.getElementById("newsletter-email");
      const email = emailInput.value.trim();

      if (!email || !email.includes("@")) {
        event.preventDefault();
        newsletterFeedback.textContent = "Please enter a valid email address.";
        newsletterFeedback.className = "form-feedback error";
        return;
      }

      newsletterFeedback.textContent = "Submitting your subscription...";
      newsletterFeedback.className = "form-feedback success";
    });
  }

  // Contact Form Validation -> submits natively to Un-static Forms
  const contactForm = document.getElementById("contact-form");
  const contactFeedback = document.getElementById("contact-feedback");

  if (contactForm && contactFeedback) {
    contactForm.addEventListener("submit", (event) => {
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !email.includes("@") || !message) {
        event.preventDefault();
        contactFeedback.textContent =
          "Please fill in your name, a valid email, and a message.";
        contactFeedback.className = "form-feedback error";
        return;
      }

      contactFeedback.textContent = "Sending your message...";
      contactFeedback.className = "form-feedback success";
    });
  }
});
