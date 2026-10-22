/**
 * Portfolio Configuration & Content Registry
 * Single Source of Truth for contact links, availability, and project states.
 * Update values here without editing HTML markup.
 */
const SITE_CONFIG = {
  profile: {
    name: "Meet Pokal",
    title: "Data Analytics & Workflow Automation",
    focus: "Business Analytics • Workflow Automation • Data Reconciliation",
    githubUrl: "https://github.com/meetpokal1",
    // Keep empty until verified. UI dynamically hides links when empty.
    linkedinUrl: "https://www.linkedin.com/in/meetpokal", 
    email: "meetpokalwork@gmail.com", 
    phone: "+91 7304263532", // Formatted phone or international tel link
    leetcodeUrl: "https://leetcode.com/u/Meetpokal/", // LeetCode profile URL
    hackerrankUrl: "https://www.hackerrank.com/profile/meetpokalwork", // HackerRank profile URL
    resumeUrl: "assets/docs/Meet_Pokal_Data_Analyst_BI_Resume.pdf",
    resumeAvailable: true, // Verified: authentic PDF present at assets/docs/Meet_Pokal_Resume.pdf
    tableauPublicUrl: "", // Tableau Public profile/workbook URL when published
    powerBiUrl: "" // Power BI portfolio/report URL when published
  },

  credentials: {
    // Deloitte Australia Data Analytics Job Simulation (Forage).
    // Keep empty until shareable verification link is provided.
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
    availabilityStatus: "Open to small scoped freelance projects and analytics internships",
    longTermFocus: "Data Engineering, Cloud Infrastructure & Automated Pipelines"
  },

  projects: [
    {
      id: "gst-automation",
      title: "GST Invoice & Ledger Automation",
      category: "analytics",
      featured: true,
      status: "Operational • PR in Review",
      statusType: "operational",
      repoUrl: "https://github.com/meetpokal1/GST-Invoive-Automation",
      demoUrl: "",
      videoUrl: "",
      tags: ["Python", "Pandas", "Excel Automation", "Streamlit", "Tax Reconciliation"],
      summary: "Automated reconciliation pipeline calculating CGST/SGST/IGST splits by state, applying rounding tolerances, and generating multi-sheet audit ledgers.",
      problem: "Manual spreadsheet checking between purchase ledgers and portal summaries causes calculation mismatches and missed input tax credits.",
      approach: "Engineered state-based tax split logic in Pandas, evaluated rounding differences within ₹0.50 tolerance, and created a Streamlit review tool.",
      note: "Core pipeline operational. Additional validation rules and automated tests currently under review in draft PR #1."
    },
    {
      id: "insightflow",
      title: "InsightFlow — Sales & Inventory Analytics Platform",
      category: "analytics",
      featured: true,
      status: "In Progress",
      statusType: "in-progress",
      repoUrl: "", // No fake URL; displayed as 'In Development'
      demoUrl: "",
      videoUrl: "",
      tags: ["Python", "SQL", "Relational Modeling", "Sales Analytics", "Inventory Velocity"],
      summary: "In-development analytics platform modeling transactional sales, stock turnover velocity, and reorder triggers.",
      problem: "Fragmented inventory tracking obscures stock turnover rates, causing stockouts and trapped capital.",
      approach: "Designing relational star schema principles (fact_sales, dim_product, dim_warehouse), velocity formulas, and automated reorder alerts.",
      note: "Active development. No repository or demo link published until first stable release."
    },
    {
      id: "pharmaguard-ai",
      title: "PharmaGuard AI",
      category: "systems",
      featured: false,
      status: "Technical Project",
      statusType: "prototype",
      repoUrl: "https://github.com/meetpokal1/PharmaGuard-AI",
      demoUrl: "",
      videoUrl: "",
      tags: ["Python", "FastAPI", "React", "LangGraph", "Workflow Routing"],
      summary: "Domain validation system using LangGraph cyclical state transitions and FastAPI Pydantic schema validation.",
      note: "Source code available on GitHub."
    },
    {
      id: "mini-erp",
      title: "Mini ERP Inventory System",
      category: "systems",
      featured: false,
      status: "Operational",
      statusType: "operational",
      repoUrl: "https://github.com/meetpokal1/Mini-ERP-Inventory-System",
      demoUrl: "",
      videoUrl: "",
      tags: ["Python", "SQLite", "Streamlit", "Relational Database"],
      summary: "Local inventory management tool maintaining relational integrity across items, suppliers, and transaction ledger logs.",
      note: "Relational SQLite schema and Streamlit interface available on GitHub."
    },
    {
      id: "dubpilot",
      title: "Dubpilot",
      category: "automation",
      featured: false,
      status: "Automation Pipeline",
      statusType: "prototype",
      repoUrl: "https://github.com/meetpokal1/Dubpilot",
      demoUrl: "",
      videoUrl: "",
      tags: ["Python", "CLI Scripting", "Subprocess Automation"],
      summary: "Modular Python audio demuxing and synchronized media reconstruction script.",
      note: "CLI pipeline architecture available on GitHub."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
