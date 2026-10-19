/**
 * Theme Switcher
 * Handles light/dark mode preference, localStorage persistence, and system sync.
 * Fixes initial localStorage pollution bug so OS theme sync works until manual toggle.
 */
(function initTheme() {
  const STORAGE_KEY = "mp_portfolio_theme";
  const root = document.documentElement;

  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function getPreferredTheme() {
    const saved = getStoredTheme();
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return "dark"; // Default to refined editorial dark palette (Being Brute art direction)
  }

  function applyTheme(theme, save = false) {
    root.setAttribute("data-theme", theme);
    if (save) {
      localStorage.setItem(STORAGE_KEY, theme);
    }
    updateToggleUI(theme);
  }

  function updateToggleUI(theme) {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;

    toggleBtn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
    const iconSun = toggleBtn.querySelector(".icon-sun");
    const iconMoon = toggleBtn.querySelector(".icon-moon");
    if (iconSun && iconMoon) {
      if (theme === "dark") {
        iconSun.style.display = "block";
        iconMoon.style.display = "none";
      } else {
        iconSun.style.display = "none";
        iconMoon.style.display = "block";
      }
    }
  }

  // Pre-DOM initial apply without saving to localStorage (preserves OS sync)
  applyTheme(getPreferredTheme(), false);

  document.addEventListener("DOMContentLoaded", () => {
    // Sync UI icons once DOM elements exist
    const currentTheme = root.getAttribute("data-theme") || getPreferredTheme();
    updateToggleUI(currentTheme);

    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const activeTheme = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const nextTheme = activeTheme === "dark" ? "light" : "dark";
        applyTheme(nextTheme, true); // User manually toggled, save preference
      });
    }

    // Listen for OS theme changes when user has not set an explicit override
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!getStoredTheme()) {
        applyTheme(e.matches ? "dark" : "light", false);
      }
    });
  });
})();
