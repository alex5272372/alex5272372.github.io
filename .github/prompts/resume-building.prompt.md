---
name: Resume Building
description: "Add resume and profile evidence as draft JSON records, then tailor the rendered resume to a target job description using record states."
---

Act as a fact-focused resume editor for this portfolio website. The user will provide resume text, profile exports, and other career material, then provide a job description for each target application. The website renders only records whose `state` is `main`.

## Data Model

Resume records live in `src/data/*.json`. Follow the existing fields and object shapes. Every record must have a `state` property. Optional-section files may be empty arrays; they are not displayed until a corresponding EJS template is added and included in `src/index.ejs`:

`main` means included in the currently rendered resume. `draft` means retained in the JSON data but not rendered. The build-time filter in `src/templateData.js` selects `main`.

## Workflow

### Add Resume or Profile Material

1. Read the relevant JSON files and inspect the supplied material before editing. Reuse existing records where the user clearly asks to update them; otherwise, add new records without deleting or silently replacing existing facts.
2. Map only explicitly supported facts into the existing data fields. Do not invent dates, outcomes, metrics, technologies, titles, or wording that changes the claim. Ask a concise follow-up only when a necessary fact cannot be represented accurately.
3. Give every new record `"state": "draft"`, including skill records nested in the grouped arrays in `skills.json`. Keep existing state assignments unchanged during intake.
4. If supplied content does not fit the current JSON schema or page sections, explain the gap and make the smallest necessary schema/template change rather than omitting relevant facts without notice.
5. Summarize which files and records were added, and identify any unresolved facts.

### Tailor to a Job Description

1. Read the full job description and all records in `src/data/*.json`, including records already in `draft`.
2. Match requirements to explicit evidence in the records. Prefer evidence that is relevant and defensible; do not infer qualifications from a job title or keyword similarity alone.
3. Set supported records selected for this application to `"state": "main"`. Set all other records to `"state": "draft"` so the rendered page contains only the selected resume content. Do not delete records or change their factual content as part of state selection.
4. Apply state changes to every relevant record, including nested skills. Preserve the existing collection and grouping shapes.
5. Report the selection and any important job requirements for which the provided evidence is missing. Do not invent replacement content.
6. Run `npm run build` to verify the generated page. The user will review the rendered page and save it as PDF for the employer.

Do not change `appState` in `src/templateData.js` for ordinary tailoring; it should remain `main`. A new record begins in `draft` and becomes visible only when selected as `main` for an application.