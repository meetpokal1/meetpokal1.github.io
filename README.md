# Meet Pokal — Personal Portfolio Website

A fast, accessible, responsive, zero-dependency personal portfolio engineered for **Data Analyst and Business Intelligence internship applications**, with a clean design trajectory toward **Cloud and Data Engineering**.

Built with **plain HTML5, CSS3, and vanilla JavaScript** — zero frameworks, zero build tools, and 100% compatible with **GitHub Pages**.

---

## 📁 Repository & Directory Layout

```text
portfolio/
├── index.html                      # Semantic, accessible HTML5 structure
├── README.md                       # Documentation & deployment guide
├── css/
│   ├── variables.css               # Design tokens, color system, dark/light themes
│   ├── base.css                    # Typography, reset, accessibility landmarks
│   ├── components.css              # Cards, hero, buttons, badges, navigation
│   └── responsive.css              # Mobile, tablet, desktop, and print styles
├── js/
│   ├── config.js                   # ⚙️ SINGLE SOURCE OF TRUTH (Profile, toggles, URLs)
│   ├── theme.js                    # Light/Dark mode logic & system sync
│   └── main.js                     # Mobile menu, scrollspy, dynamic config injection
└── assets/
    └── docs/
        └── Meet_Pokal_Resume.pdf   # Place your PDF résumé here
```

---

## ⚙️ Updating Your Details (Single Source of Truth)

All personal links, project URLs, and visibility flags are centralized in **[`js/config.js`](js/config.js)**. You do not need to touch the HTML to change links or hide elements.

### Adding your LinkedIn Profile
Open `js/config.js` and set:
```javascript
linkedinUrl: "https://www.linkedin.com/in/your-profile-name"
```
*Note: If left empty `""`, the LinkedIn button and links automatically stay completely hidden on the website.*

### Adding your Public Email
Open `js/config.js` and set:
```javascript
email: "your.name@example.com"
```
*Note: If left empty `""`, mailto buttons remain hidden to prevent broken handlers.*

### Adding LeetCode & HackerRank Profiles
Open `js/config.js` and set:
```javascript
leetcodeUrl: "https://leetcode.com/your-username",
hackerrankUrl: "https://hackerrank.com/your-username"
```
*Note: If left empty `""`, the corresponding badges and links stay hidden automatically.*

### Adding your Résumé PDF
1. Save your résumé as `Meet_Pokal_Resume.pdf` in the `assets/docs/` folder.
2. In `js/config.js`, set:
```javascript
resumeAvailable: true
```
*The website will automatically switch the button from "Available on Request" to an active download link.*

### Flagship Analytics Case Studies

The portfolio presents two end-to-end data intelligence case studies: **MarketPulse India** and **InsightFlow**.

#### 1. MarketPulse India — Wholesale Commodity Price Intelligence
- Source repository: [meetpokal1/MarketPulseIndia](https://github.com/meetpokal1/MarketPulseIndia)
- Live interactive dashboards: [Tableau Public Multi-Dashboard Suite](https://public.tableau.com/app/profile/meet.pokal/viz/MarketPulseIndiaEssentialCommodityPriceIntelligence_/Dashboard1-MarketPulse)
- Verified implementation evidence:
  - [Tableau Data Contract & QA Rules](https://github.com/meetpokal1/MarketPulseIndia/blob/main/documentation/TABLEAU_DATA_CONTRACT.md)
  - [Reproducible Data Cleaning & Transformation Pipeline](https://github.com/meetpokal1/MarketPulseIndia/blob/main/src/cleaning/pipeline.py)
  - [Econometric Panel Methodology (Statsmodels TWFE)](https://github.com/meetpokal1/MarketPulseIndia/blob/main/documentation/METHODOLOGY.md)
  - [Automated Regression Tests (26 passing tests)](https://github.com/meetpokal1/MarketPulseIndia/tree/main/tests)
- The applied stack spans DuckDB zero-copy SQL, Polars ETL, Python 3.11, Statsmodels, Tableau Public 2026.2, Streamlit scenario lab, and 26 automated pytest regression tests across 1.48M AGMARKNET wholesale records.

#### 2. InsightFlow — Retail Profit & Data Integrity Intelligence
- Source repository: [meetpokal1/InsightFlow](https://github.com/meetpokal1/InsightFlow)
- Genuine runtime captures: [Streamlit screenshots](https://github.com/meetpokal1/InsightFlow/tree/main/screenshots/runtime)
- Genuine Power BI captures: [Power BI screenshots](https://github.com/meetpokal1/InsightFlow/tree/main/screenshots/powerbi)
- Project-specific proof links open the [DAX Measure Catalog](https://github.com/meetpokal1/InsightFlow/blob/main/powerbi/dax_measures.md), [Power Query scripts](https://github.com/meetpokal1/InsightFlow/blob/main/powerbi/power_query.md), and [data-preparation/QA notes](https://github.com/meetpokal1/InsightFlow/blob/main/documentation/data_quality.md).
- The applied stack spans Python/Pandas, PostgreSQL/SQL, FastAPI, Power BI PBIP/TMDL with DAX and Power Query, Streamlit, an Excel/openpyxl assurance workpaper, Docker Compose, 234 automated tests (162 unit + 72 integration), and GitHub Actions CI.
- The Streamlit interface is locally runnable. The portfolio does not advertise a hosted live demo unless public access is verified.

The reusable [Project Evidence Standard](PROJECT_EVIDENCE_STANDARD.md) defines how projects show a truthful, functional technology stack and verified evidence links.

---

## 🖼️ Project Evidence Screenshots

The portfolio uses the genuine screenshots maintained in the [InsightFlow repository](https://github.com/meetpokal1/InsightFlow), rather than old UI mockups. The source of truth stays with the project so the page reflects the latest verified captures.

- [Power BI report pages and semantic-model architecture](https://github.com/meetpokal1/InsightFlow/tree/main/screenshots/powerbi)
- [Local Streamlit runtime screenshots and QA results](https://github.com/meetpokal1/InsightFlow/tree/main/screenshots/runtime)

The executive screenshot appears in the flagship card, with four supporting Power BI captures in a compact gallery. The architecture schematic is collapsed by default. All screenshots open at full size in a separate tab; they do not imply that a public hosted Streamlit demo is available.

## 🚀 Local Preview & Testing

You can preview the portfolio using any standard local web server (e.g., Python's built-in HTTP server or VS Code Live Server):

```bash
# From within the portfolio directory:
python -m http.server 8000
```
Then navigate to: `http://localhost:8000`

---

## 🌐 Deploying to GitHub Pages

1. **Option A: User Site (`meetpokal1.github.io`)**
   - Create a repository named `meetpokal1.github.io` on GitHub.
   - Push the contents of the `portfolio/` folder to the `main` branch.
   - Your site will immediately be live at `https://meetpokal1.github.io/`.

2. **Option B: Project Site (`meetpokal1.github.io/portfolio`)**
   - Push the code to a repository named `portfolio`.
   - Go to **Settings > Pages** in your GitHub repository.
   - Under **Build and deployment > Source**, select `Deploy from a branch` and choose `main` / `root`.
