/**
 * Portfolio Configuration & Content Registry
 * Single Source of Truth for contact links, availability, and project states.
 * Update values here without editing HTML markup.
 */
const SITE_CONFIG = {
  profile: {
    name: "Meet Pokal",
    title: "Data Analyst & Business Intelligence Candidate",
    focus: "Business Analytics • Workflow Automation • Data Reconciliation",
    githubUrl: "https://github.com/meetpokal1",
    linkedinUrl: "https://www.linkedin.com/in/meetpokal",
    email: "meetpokalwork@gmail.com",
    phone: "+91 7304263532",
    leetcodeUrl: "https://leetcode.com/u/Meetpokal/",
    hackerrankUrl: "https://www.hackerrank.com/profile/meetpokalwork",
    resumeUrl: "assets/docs/Meet_Pokal_Data_Analyst_BI_Resume.pdf",
    resumeAvailable: true,
    tableauPublicUrl: "",
    powerBiUrl: ""
  },

  credentials: {
    // Deloitte Australia Data Analytics Job Simulation (Forage)
    deloitteForageUrl: ""
  },

  locationPreferences: {
    currentLocation: "Navi Mumbai / Mumbai, Maharashtra, India",
    preferredHubs: "Airoli, Ghansoli, Rabale, Mahape, Vashi & MMR",
    workModes: "On-site • Hybrid • Remote",
    targetRoles: [
      "Data Analyst Intern",
      "BI Analyst Intern",
      "Reporting Analyst Intern",
      "Business Analyst Intern"
    ],
    availabilityStatus: "Actively pursuing internship opportunities",
    longTermFocus: "Data Engineering, Cloud Infrastructure & Automated Pipelines"
  },

  projects: [
    {
      id: "insightflow",
      title: "InsightFlow — Sales & Inventory Analytics Platform",
      category: "analytics",
      featured: true,
      status: "Operational • CI Passing",
      statusType: "operational",
      repoUrl: "https://github.com/meetpokal1/InsightFlow",
      demoUrl: "", // Keep empty until public hosted Streamlit deployment URL is verified
      videoUrl: "",
      tags: ["Python", "PostgreSQL", "SQL Analytics", "FastAPI", "Streamlit", "Data Quality ETL"],
      summary: "End-to-end sales and inventory intelligence platform: automated data cleaning pipeline, PostgreSQL dimensional schema, and interactive Streamlit analytics.",
      problem: "Disjointed transactional CSV/Excel exports hide margin erosion, duplicate customer records, and stockout risks across multi-region retail operations.",
      approach: "Built a 3-step Python pipeline (profiling, rule-based reconciliation, PostgreSQL loading) with 138 unit tests and interactive Streamlit dashboard.",
      note: "Public repository with synthetic demo data and verified GitHub Actions CI suite. Live hosted demo URL pending custom subdomain verification."
    },
    {
      id: "gst-automation",
      title: "GST Invoice & Ledger Automation",
      category: "analytics",
      featured: true,
      status: "Operational Prototype",
      statusType: "operational",
      repoUrl: "https://github.com/meetpokal1/GST-Invoive-Automation",
      demoUrl: "",
      videoUrl: "",
      tags: ["Python", "Pandas", "Excel Automation", "Streamlit", "Tax Reconciliation"],
      summary: "Automated reconciliation pipeline calculating CGST/SGST/IGST splits by state, applying rounding tolerances, and generating multi-sheet audit ledgers.",
      problem: "Manual spreadsheet checking between purchase ledgers and portal summaries causes calculation mismatches and missed input tax credits.",
      approach: "Engineered state-based tax split logic in Pandas, evaluated rounding differences within ₹0.50 tolerance, and created a Streamlit review tool.",
      note: "Core pipeline operational with synthetic demo data. Review prioritization assists human cross-checking."
    },
    {
      id: "mini-erp",
      title: "Mini ERP Inventory System",
      category: "systems",
      featured: true,
      status: "Operational Prototype",
      statusType: "operational",
      repoUrl: "https://github.com/meetpokal1/Mini-ERP-Inventory-System",
      demoUrl: "",
      videoUrl: "",
      tags: ["Python", "SQLite", "Streamlit", "Relational Database", "Inventory Controls"],
      summary: "Local inventory management tool maintaining relational integrity across items, suppliers, purchase orders, and physical-count reconciliation.",
      problem: "Spreadsheet inventory tracking loses stock velocity clarity, duplicate reorders occur while stock is in transit, and physical stocktakes lack automated reconciliation.",
      approach: "Built 3NF SQLite schema, replenishment coverage formulas incorporating pending POs, and physical count variance analysis with unit price weighting.",
      note: "Operational Streamlit prototype with seeded demo database."
    },
    {
      id: "pharmaguard-ai",
      title: "PharmaGuard AI",
      category: "systems",
      featured: false,
      status: "Operational Prototype · Verified CI Passing",
      statusType: "operational",
      repoUrl: "https://github.com/meetpokal1/PharmaGuard-AI",
      demoUrl: "",
      videoUrl: "",
      tags: ["Python", "FastAPI", "React", "LangGraph", "SQLite", "Security Hardening"],
      summary: "AI-assisted pharmaceutical complaint triage platform: LangGraph workflow engine, 10MB PDF upload validation, persistent SQLite case register, and 30-day repeat-batch signal detection.",
      problem: "Unstructured complaints from emails and PDFs lack standardized triage, making it difficult to detect repeated quality defects across the same manufacturing batch.",
      approach: "Combined LangGraph entity extraction with deterministic keyword severity rules, SQLite case persistence, and 30-day repeated-batch review signals covered by automated tests.",
      note: "Open-source engineering project with automated test suite and live React/FastAPI interface. Demonstrates NLP triage, security hardening, and audit logging."
    },
    {
      id: "dubpilot",
      title: "Dubpilot",
      category: "automation",
      featured: false,
      status: "CLI Automation Pipeline",
      statusType: "prototype",
      repoUrl: "https://github.com/meetpokal1/Dubpilot",
      demoUrl: "",
      videoUrl: "",
      tags: ["Python", "FFmpeg", "Whisper", "Edge-TTS", "CLI Automation"],
      summary: "Modular Python CLI media pipeline for speech recognition, translation, Edge-TTS audio synthesis, and FFmpeg timeline synchronization.",
      problem: "Automated video dubbing pipelines frequently suffer from audio drift, desynchronization, and failure recovery issues across lengthy media streams.",
      approach: "Implemented JSON checkpoint state persistence with downstream invalidation and strict duration capping for seamless multi-speaker alignment.",
      note: "Command-line pipeline covered by automated test suite."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
