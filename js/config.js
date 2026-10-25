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
    tableauPublicUrl: "https://public.tableau.com/app/profile/meet.pokal/viz/MarketPulseIndiaEssentialCommodityPriceIntelligence_/Dashboard1-MarketPulse",
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
      title: "InsightFlow — Retail Profit & Data Integrity Intelligence",
      category: "analytics",
      featured: true,
      status: "CI verified · 233 tests · Release cleanup merged",
      statusType: "operational",
      repoUrl: "https://github.com/meetpokal1/InsightFlow",
      demoUrl: "",
      videoUrl: "",
      tags: ["Python", "PostgreSQL", "SQL Analytics", "FastAPI", "Power BI", "Streamlit", "Data Quality ETL"],
      summary: "Retail analytics system combining an auditable Python cleaning pipeline, PostgreSQL dimensional model, SQL/API analytics, Power BI reporting, and a locally runnable Streamlit dashboard.",
      problem: "Inconsistent CSV/Excel exports, malformed fields, duplicate customer records, and stock imbalances make margins harder to trust, replenishment harder to prioritize, and data changes harder to explain.",
      approach: "Profile and standardize source files, validate business rules and relationships, reconcile exceptions, load a normalized PostgreSQL model, and present decision evidence across the report and local dashboard. The current CI suite reports 233 passing tests in its database-enabled run.",
      note: "All business records and figures are synthetic. Use the repository instructions to run the Streamlit dashboard locally; the portfolio does not claim a public hosted demo."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
