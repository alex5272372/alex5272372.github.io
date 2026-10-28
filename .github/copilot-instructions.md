# Resume Workflow Prompts

Use the resume-building prompt for adding candidate evidence and tailoring this site's resume to a position. Resume content lives in `src/data/*.json`; every record has a `state` field. `main` records are rendered, and `draft` records are kept in the data but hidden. New evidence is added as `draft`. For a target position, promote only fact-supported, relevant records to `main` and move all other records to `draft`, without deleting them. Keep the shared `appState` in `src/templateData.js` set to `main` unless asked to change the rendering mechanism. Run `npm run build` after data changes.

Use these on-demand prompts for focused resume work:

- [Resume Building](.github/prompts/resume-building.prompt.md): adds supplied resume/profile facts as hidden draft records, then selects state-tagged content for a target position.
- [Resume Review](.github/prompts/resume-review.prompt.md): audits a supplied resume for contradictions, ambiguity, evidence gaps, and interview risks without rewriting it.

These are focused prompts, not general project instructions. Before starting a resume workflow, open the relevant prompt from `.github/prompts/` and follow it. Do not assume the prompt is missing based on the old `prompts/` path.