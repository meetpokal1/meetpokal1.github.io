/**
 * Main Application Logic
 * Mobile navigation, table filters, config sync, accessible interactions.
 */
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initGstTableFilter();
  applySiteConfig();
  initScrollSpy();
  initBackToTop();
});

/**
 * Mobile navigation with keyboard Escape & click-outside dismiss
 */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (!toggleBtn || !navMenu) return;

  function closeMenu() {
    toggleBtn.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
  }

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
    navMenu.classList.toggle("is-open", !isExpanded);
  });

  // Close when clicking any nav link
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close when pressing Escape key (WCAG 2.1 SC 2.1.2)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Close when clicking outside header/menu
  document.addEventListener("click", (e) => {
    if (navMenu.classList.contains("is-open") && !navMenu.contains(e.target) && e.target !== toggleBtn) {
      closeMenu();
    }
  });
}

/**
 * Interactive filter for the authentic GST reconciliation sample table
 */
function initGstTableFilter() {
  const panel = document.querySelector('[data-ui="gst-workbench"]');
  if (!panel) return;
  const filterBtns = panel.querySelectorAll(".filter-btn");
  const tableRows = panel.querySelectorAll(".data-table tbody tr");

  if (filterBtns.length === 0 || tableRows.length === 0) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterType = btn.getAttribute("data-filter");

      tableRows.forEach((row) => {
        if (filterType === "all") {
          row.classList.remove("is-hidden");
        } else if (filterType === "mismatch") {
          if (row.classList.contains("mismatch-row")) {
            row.classList.remove("is-hidden");
          } else {
            row.classList.add("is-hidden");
          }
        } else if (filterType === "ok") {
          if (!row.classList.contains("mismatch-row")) {
            row.classList.remove("is-hidden");
          } else {
            row.classList.add("is-hidden");
          }
        }
      });
    });
  });
}

/**
 * Sync UI with centralized SITE_CONFIG from config.js
 * Cleanly hides empty contact details without displaying visible placeholders.
 */
function applySiteConfig() {
  if (typeof SITE_CONFIG === "undefined") return;

  // 1. LinkedIn handling
  const linkedinLinks = document.querySelectorAll('[data-config="linkedin"]');
  linkedinLinks.forEach((el) => {
    if (SITE_CONFIG.profile.linkedinUrl && SITE_CONFIG.profile.linkedinUrl.trim() !== "") {
      el.href = SITE_CONFIG.profile.linkedinUrl;
      el.style.display = "";
      el.removeAttribute("aria-hidden");
    } else {
      el.style.display = "none";
      el.setAttribute("aria-hidden", "true");
      el.removeAttribute("href");
    }
  });

  // 2. Email handling
  const emailLinks = document.querySelectorAll('[data-config="email"]');
  emailLinks.forEach((el) => {
    if (SITE_CONFIG.profile.email && SITE_CONFIG.profile.email.trim() !== "") {
      el.href = `mailto:${SITE_CONFIG.profile.email}`;
      el.style.display = "";
      el.removeAttribute("aria-hidden");
      const span = el.querySelector("span");
      if (span && el.closest(".contact-channels")) {
        span.textContent = SITE_CONFIG.profile.email;
      }
    } else {
      el.style.display = "none";
      el.setAttribute("aria-hidden", "true");
      el.removeAttribute("href");
    }
  });

  // 3. Phone handling
  const phoneLinks = document.querySelectorAll('[data-config="phone"]');
  phoneLinks.forEach((el) => {
    if (SITE_CONFIG.profile.phone && SITE_CONFIG.profile.phone.trim() !== "") {
      const cleanTel = SITE_CONFIG.profile.phone.replace(/[^+\d]/g, "");
      el.href = `tel:${cleanTel}`;
      el.style.display = "";
      el.removeAttribute("aria-hidden");
      const span = el.querySelector("span");
      if (span && el.closest(".contact-channels")) {
        span.textContent = SITE_CONFIG.profile.phone;
      }
    } else {
      el.style.display = "none";
      el.setAttribute("aria-hidden", "true");
      el.removeAttribute("href");
    }
  });

  // 4. Resume availability handling: show only when confirmed available
  const resumeButtons = document.querySelectorAll('[data-config="resume"]');
  resumeButtons.forEach((btn) => {
    if (SITE_CONFIG.profile.resumeAvailable && SITE_CONFIG.profile.resumeUrl) {
      // Perform client-side verification to ensure file actually exists
      fetch(SITE_CONFIG.profile.resumeUrl, { method: "HEAD" })
        .then((res) => {
          if (res.ok) {
            btn.href = SITE_CONFIG.profile.resumeUrl;
            btn.style.display = "";
            btn.removeAttribute("aria-hidden");
            btn.removeAttribute("aria-disabled");
          } else {
            btn.style.display = "none";
            btn.setAttribute("aria-hidden", "true");
            btn.removeAttribute("href");
          }
        })
        .catch(() => {
          // If running in environment where fetch HEAD is restricted, fallback to verified boolean
          if (SITE_CONFIG.profile.resumeAvailable) {
            btn.href = SITE_CONFIG.profile.resumeUrl;
            btn.style.display = "";
            btn.removeAttribute("aria-hidden");
            btn.removeAttribute("aria-disabled");
          } else {
            btn.style.display = "none";
            btn.setAttribute("aria-hidden", "true");
            btn.removeAttribute("href");
          }
        });
    } else {
      btn.style.display = "none";
      btn.setAttribute("aria-hidden", "true");
      btn.removeAttribute("href");
    }
  });

  // 4. GitHub profile link
  const githubLinks = document.querySelectorAll('[data-config="github"]');
  githubLinks.forEach((el) => {
    if (SITE_CONFIG.profile.githubUrl) {
      el.href = SITE_CONFIG.profile.githubUrl;
    }
  });

  // 5. Deloitte Australia Job Simulation Credential
  const deloitteCredentials = document.querySelectorAll('[data-config="credential-deloitte"]');
  deloitteCredentials.forEach((el) => {
    const url = SITE_CONFIG.credentials?.deloitteForageUrl;
    if (url && url.trim() !== "") {
      el.style.display = "";
      el.removeAttribute("aria-hidden");
      const link = el.querySelector("a");
      if (link) {
        link.href = url;
        link.removeAttribute("aria-hidden");
      }
    } else {
      el.style.display = "none";
      el.setAttribute("aria-hidden", "true");
      const link = el.querySelector("a");
      if (link) link.removeAttribute("href");
    }
  });

  // 6. Tableau Public and Power BI links
  const tableauLinks = document.querySelectorAll('[data-config="tableau"]');
  tableauLinks.forEach((el) => {
    const url = SITE_CONFIG.profile.tableauPublicUrl;
    if (url && url.trim() !== "") {
      el.href = url;
      el.style.display = "";
      el.removeAttribute("aria-hidden");
    } else {
      el.style.display = "none";
      el.setAttribute("aria-hidden", "true");
      el.removeAttribute("href");
    }
  });

  const powerbiLinks = document.querySelectorAll('[data-config="powerbi"]');
  powerbiLinks.forEach((el) => {
    const url = SITE_CONFIG.profile.powerBiUrl;
    if (url && url.trim() !== "") {
      el.href = url;
      el.style.display = "";
      el.removeAttribute("aria-hidden");
    } else {
      el.style.display = "none";
      el.setAttribute("aria-hidden", "true");
      el.removeAttribute("href");
    }
  });

  // 7. LeetCode and HackerRank links
  const leetcodeLinks = document.querySelectorAll('[data-config="leetcode"]');
  leetcodeLinks.forEach((el) => {
    const url = SITE_CONFIG.profile.leetcodeUrl;
    if (url && url.trim() !== "") {
      el.href = url;
      el.style.display = "";
      el.removeAttribute("aria-hidden");
    } else {
      el.style.display = "none";
      el.setAttribute("aria-hidden", "true");
      el.removeAttribute("href");
    }
  });

  const hackerrankLinks = document.querySelectorAll('[data-config="hackerrank"]');
  hackerrankLinks.forEach((el) => {
    const url = SITE_CONFIG.profile.hackerrankUrl;
    if (url && url.trim() !== "") {
      el.href = url;
      el.style.display = "";
      el.removeAttribute("aria-hidden");
    } else {
      el.style.display = "none";
      el.setAttribute("aria-hidden", "true");
      el.removeAttribute("href");
    }
  });
}

/**
 * ScrollSpy to highlight active navigation link using aria-current="location"
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${currentId}`) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        }
      });
    },
    {
      rootMargin: "-20% 0px -70% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * Floating Back to Top control (Being Brute Inspiration)
 * Displays after 400px of scrolling, supports smooth scroll and reduced-motion
 */
function initBackToTop() {
  const btn = document.getElementById("toTop");
  if (!btn) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 400);
    },
    { passive: true }
  );

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    const topTarget = document.getElementById("top") || document.querySelector("header");
    if (topTarget) {
      topTarget.setAttribute("tabindex", "-1");
      topTarget.focus({ preventScroll: true });
    }
  });
}



