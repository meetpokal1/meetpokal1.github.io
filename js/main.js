/**
 * Main Application Logic
 * Mobile navigation, table filters, config sync, accessible interactions.
 */
document.addEventListener("DOMContentLoaded", () => {
  initScrollProgress();
  initPointerSpotlights();
  initCopyrightYear();
  initMobileNav();
  initGstTableFilter();
  applySiteConfig();
  initScrollSpy();
  initBackToTop();
  initLightbox();
  initPbiToggleButton();
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

  // 4. Resume link handling: show the configured resume without an extra HEAD request.
  // Some static hosting or caching layers can reject HEAD while the PDF remains reachable.
  const resumeButtons = document.querySelectorAll('[data-config="resume"]');
  resumeButtons.forEach((btn) => {
    if (SITE_CONFIG.profile.resumeAvailable && SITE_CONFIG.profile.resumeUrl) {
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

  // 5. GitHub profile link
  const githubLinks = document.querySelectorAll('[data-config="github"]');
  githubLinks.forEach((el) => {
    if (SITE_CONFIG.profile.githubUrl) {
      el.href = SITE_CONFIG.profile.githubUrl;
    }
  });

  // 6. Deloitte Australia Job Simulation Credential
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

  // 7. Tableau Public and Power BI links
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

  // 8. LeetCode and HackerRank links
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





/**
 * Reading progress indicator directly below the sticky navigation.
 * Uses requestAnimationFrame to keep scroll updates lightweight.
 */
function initScrollProgress() {
  const fill = document.getElementById("reading-progress-fill");
  if (!fill) return;

  let framePending = false;

  function updateProgress() {
    const root = document.documentElement;
    const scrollableHeight = root.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0
      ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
      : 0;

    fill.style.transform = `scaleX(${progress})`;
    framePending = false;
  }

  function scheduleUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateProgress);
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate, { passive: true });
  updateProgress();
}

/**
 * Cursor-following warm spotlight for selected project and information cards.
 * Only enabled for mouse/trackpad-like pointers; touch interactions are unchanged.
 */
function initPointerSpotlights() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const targets = document.querySelectorAll(
    ".project-case-study, .tier2-card, .philosophy-card, .hero-status-panel, " +
    ".progression-step-card, .credential-card, .location-alignment-card, .internship-focus-card"
  );

  targets.forEach((card) => {
    card.classList.add("spotlight-card");

    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
    }, { passive: true });

    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--spotlight-x");
      card.style.removeProperty("--spotlight-y");
    });
  });
}

/** Keep the copyright year current while providing a static HTML fallback. */
function initCopyrightYear() {
  const year = document.getElementById("copyright-year");
  if (year) year.textContent = String(new Date().getFullYear());
}


/**
 * Accessible modal lightbox for project screenshots and evidence
 */
function initLightbox() {
  const modal = document.getElementById("image-lightbox");
  if (!modal) return;

  const backdrop = modal.querySelector(".lightbox-backdrop");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const imgEl = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");
  const captionEl = document.getElementById("lightbox-caption");
  const counterEl = document.getElementById("lightbox-counter");
  const sourceLinkEl = document.getElementById("lightbox-source-link");

  const triggers = Array.from(document.querySelectorAll('[data-lightbox="insightflow"]'));
  if (triggers.length === 0) return;

  // Build items array from triggers
  const galleryItems = triggers.map((trigger) => ({
    trigger,
    src: trigger.getAttribute("href") || trigger.dataset.src,
    title: trigger.dataset.title || trigger.getAttribute("aria-label") || "",
    caption: trigger.dataset.caption || "",
    alt: trigger.querySelector("img")?.getAttribute("alt") || trigger.dataset.title || "Screenshot preview",
  }));

  let currentIndex = 0;
  let lastActiveElement = null;

  function renderItem(index) {
    if (index < 0 || index >= galleryItems.length) return;
    currentIndex = index;
    const item = galleryItems[index];

    imgEl.src = item.src;
    imgEl.alt = item.alt;
    titleEl.textContent = item.title;
    captionEl.textContent = item.caption;
    counterEl.textContent = `${index + 1} / ${galleryItems.length}`;
    if (sourceLinkEl) {
      sourceLinkEl.href = item.src;
    }

    // Preload next and previous images
    const nextIdx = (index + 1) % galleryItems.length;
    const prevIdx = (index - 1 + galleryItems.length) % galleryItems.length;
    new Image().src = galleryItems[nextIdx].src;
    new Image().src = galleryItems[prevIdx].src;
  }

  function openLightbox(index) {
    lastActiveElement = document.activeElement;
    renderItem(index);
    modal.removeAttribute("hidden");
    modal.classList.add("is-active");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    modal.classList.remove("is-active");
    modal.setAttribute("hidden", "true");
    document.body.style.overflow = "";
    if (lastActiveElement && typeof lastActiveElement.focus === "function") {
      lastActiveElement.focus();
    }
  }

  function showNext() {
    renderItem((currentIndex + 1) % galleryItems.length);
  }

  function showPrev() {
    renderItem((currentIndex - 1 + galleryItems.length) % galleryItems.length);
  }

  triggers.forEach((trigger, index) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      openLightbox(index);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", showNext);
  if (prevBtn) prevBtn.addEventListener("click", showPrev);

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-active")) return;
    if (e.key === "Escape") {
      e.preventDefault();
      closeLightbox();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      showNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      showPrev();
    } else if (e.key === "Tab") {
      // Focus trap within modal
      const focusables = modal.querySelectorAll('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusables.length === 0) return;
      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  });
}


/**
 * Wire the Power BI & Architecture action button and navbar links to expandable disclosures
 */
function initPbiToggleButton() {
  const btn = document.getElementById("btn-toggle-pbi");
  const pbiDisclosure = document.getElementById("insightflow-pbi-disclosure");
  if (btn && pbiDisclosure) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      pbiDisclosure.open = true;
      btn.setAttribute("aria-expanded", "true");

      const nav = document.querySelector(".site-header");
      const navH = nav ? nav.offsetHeight : 60;
      const y = pbiDisclosure.getBoundingClientRect().top + window.pageYOffset - navH - 16;
      window.scrollTo({ top: y, behavior: "smooth" });

      const summary = pbiDisclosure.querySelector("summary");
      if (summary) summary.focus({ preventScroll: true });
    });

    pbiDisclosure.addEventListener("toggle", () => {
      btn.setAttribute("aria-expanded", String(pbiDisclosure.open));
    });
  }

  // Handle navbar link to #technical-systems
  const navSystemsLink = document.querySelector('a[href="#technical-systems"]');
  const blueprintDisclosure = document.getElementById("technical-systems");
  if (navSystemsLink && blueprintDisclosure) {
    navSystemsLink.addEventListener("click", () => {
      blueprintDisclosure.open = true;
      const nav = document.querySelector(".site-header");
      const navH = nav ? nav.offsetHeight : 60;
      setTimeout(() => {
        const y = blueprintDisclosure.getBoundingClientRect().top + window.pageYOffset - navH - 16;
        window.scrollTo({ top: y, behavior: "smooth" });
        blueprintDisclosure.querySelector("summary")?.focus({ preventScroll: true });
      }, 60);
    });
  }
}
