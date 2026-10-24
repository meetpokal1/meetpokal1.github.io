# Project Evidence Standard

This is the reusable portfolio rule for InsightFlow and every project added after it. The goal is to let a reviewer inspect the real work behind a result—not just read a tool list or click a generic repository link.

## Standard for every project card

- Keep the business question, the strongest result, and one useful screenshot or preview in the card.
- Include **2–3 project-specific evidence links** that open meaningful artifacts. Keep one main repository link where a repository exists. Each project's evidence links must be chosen for that project's actual work; do not copy the same three labels onto every project.
- Link to the exact file, folder, notebook, report, or document that supports the label. Prefer a focused file or section over dumping the reviewer at a repository root.
- Use the tool name in the link when it clarifies the evidence (for example, *DAX Measure Catalog* or *Power Query Scripts*). Explain why the artifact matters in the README or nearby project text.
- Only list tools and techniques that were genuinely used and can be inspected. If a project has no DAX, Power Query, statistical test, model evaluation, or API, do not add a button claiming it does.
- Test each link in a signed-out/incognito browser before merging. No empty links, placeholder buttons, broken deployment URLs, or “live demo” claims for a local-only app.
- Keep the project-specific links in a wrapping action row so the card still works on mobile. Do not add a long wall of implementation text to the homepage; put depth in the repository documentation.
- For synthetic or simulated data, disclose that clearly near the result. Separate a scenario, heuristic, or estimate from a measured real-world outcome.

## Tech stack presentation

A credible project should show the tools that make the end-to-end workflow substantial, not only the headline language and dashboard. **Do not understate a real stack, and do not inflate it.**

- Map the stack by what each layer does: data preparation, storage/querying, analytical modeling, reporting or application delivery, and testing/deployment.
- Include a tool in the project's stack when it is genuinely used in the code, project configuration, model, workpaper, test suite, or CI workflow. A package appearing in a requirements file alone is not enough evidence of meaningful use.
- In the portfolio's skills section, distinguish "used in projects" from "currently learning" or "future direction." A tool used in a project can be listed as applied experience without implying expert-level mastery.
- Prefer a readable set of functional tags over an indiscriminate wall of logos. When the stack is broad, make the primary layers clear and let direct evidence links prove the detail.
- Screenshots should prove the quality of the analysis, report, application, or controls. Merely listing more tools does not make a screenshot or project stronger.

## Evidence menu by project type

Choose only the best 2–3 links for each project, not every item in a category.

| Project type | Good project-specific evidence links |
|---|---|
| Power BI / BI analytics | DAX Measure Catalog; Power Query Transformations; Data Preparation & QA Notes; Semantic Model; Report Pages |
| SQL + Python analytics pipeline | SQL Query Library; Data Cleaning & Validation Rules; Reconciliation / QA Workpaper; Architecture & Data Flow; API Reference |
| Excel analytics | Workbook / Dashboard; Power Query Steps; Formula & KPI Notes; Data Dictionary / Validation Notes |
| Statistical analysis / experiments | Notebook; Assumptions & Hypothesis Tests; Statistical Results; Reproducibility Notes |
| Machine learning | Notebook / Training Pipeline; Data Card & Feature Preparation; Evaluation Report; Model Limitations |
| API / automation / software tool | API Reference; Architecture Diagram; Test Results; Setup / Runbook; Demo, only if reachable |
| Data engineering / cloud | Pipeline / DAG; Infrastructure-as-Code; Data Model; Monitoring / Quality Checks; Deployment Runbook |

## InsightFlow application

The current InsightFlow card keeps the main repository and supporting dashboard gallery, and adds three links to real project artifacts:
1. **DAX Measure Catalog** — `powerbi/dax_measures.md`
2. **Power Query Scripts** — `powerbi/power_query.md`
3. **Data Prep & QA Notes** — `documentation/data_quality.md`

The next project should select its own best evidence based on what was actually built. For example, a Python/SQL project may benefit more from query examples, data-validation notes, and tests than from DAX links.

## Review checklist before a portfolio release

- [ ] Each link resolves and opens the artifact its label promises.
- [ ] Tool badges and project claims match the repository.
- [ ] The first screen communicates the business purpose and strongest finding.
- [ ] Evidence links are project-specific and remain usable on mobile.
- [ ] Screenshots match the current project version.
- [ ] Synthetic data, assumptions, heuristics, and limitations are disclosed.
- [ ] Tests, formatting/lint checks, and desktop/tablet/mobile visual QA pass.