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
    ├── docs/
    │   └── Meet_Pokal_Resume.pdf   # Place your PDF résumé here
    └── images/
        └── projects/               # High-contrast SVG architecture diagrams / screenshots
            ├── insightflow-preview.svg
            ├── gst-pipeline-preview.svg
            ├── pharmaguard-preview.svg
            ├── minierp-preview.svg
            └── dubpilot-preview.svg
```

---

## ⚙️ Updating Your Details (Single Source of Truth)

All personal links, project URLs, and visibility flags are centralized in **[`js/config.js`](file:///C:/Users/Meet%20Pokal/.gemini/antigravity/scratch/portfolio/js/config.js)**. You do not need to touch the HTML to change links or hide elements.

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

### Updating InsightFlow when Repository is Ready
In `js/config.js`, update the `insightflow` entry:
```javascript
repoUrl: "https://github.com/meetpokal1/InsightFlow"
```

---

## 🖼️ Replacing Preview Diagrams with Real Screenshots

When you take screenshots or record Loom videos of your applications:
1. Save the screenshot image (e.g. `gst-dashboard.png`) in `assets/images/projects/`.
2. In `index.html`, simply replace the `<img src="assets/images/projects/gst-pipeline-preview.svg" ...>` tag with your real image.

---

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
