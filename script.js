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

  // Newsletter Form -> info@elevatechange.net
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterFeedback = document.getElementById("newsletter-feedback");

  if (newsletterForm && newsletterFeedback) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInput = document.getElementById("newsletter-email");
      const email = emailInput.value.trim();

      if (!email || !email.includes("@")) {
        newsletterFeedback.textContent = "Please enter a valid email address.";
        newsletterFeedback.className = "form-feedback error";
        return;
      }

      const subject = encodeURIComponent("New Newsletter Subscriber — Elevate Change");
      const body = encodeURIComponent(`Please subscribe me to the Continuous Improvement Newsletter.\n\nEmail: ${email}`);
      window.location.href = `mailto:info@elevatechange.net?subject=${subject}&body=${body}`;

      newsletterFeedback.textContent =
        "Opening your email client to send your subscription to info@elevatechange.net.";
      newsletterFeedback.className = "form-feedback success";
      newsletterForm.reset();
    });
  }

  // Contact Form -> info@elevatechange.net
  const contactForm = document.getElementById("contact-form");
  const contactFeedback = document.getElementById("contact-feedback");

  if (contactForm && contactFeedback) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const topicSelect = document.getElementById("contact-topic");
      const topic = topicSelect.options[topicSelect.selectedIndex].text;
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !email.includes("@") || !message) {
        contactFeedback.textContent =
          "Please fill in your name, a valid email, and a message.";
        contactFeedback.className = "form-feedback error";
        return;
      }

      const subject = encodeURIComponent(`Elevate Change Inquiry: ${topic}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nArea of Interest: ${topic}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:info@elevatechange.net?subject=${subject}&body=${body}`;

      contactFeedback.textContent = `Thank you, ${name}! Opening your email client to send this to info@elevatechange.net.`;
      contactFeedback.className = "form-feedback success";
      contactForm.reset();
    });
  }
});
