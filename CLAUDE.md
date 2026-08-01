# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check via `tsc` (through Vite's build) and produce a production bundle in `dist/`
- `npm run lint` — run ESLint over the project
- `npm run preview` — serve the production build locally

There is no test suite configured in this project.

## Architecture

This is a single-page personal portfolio/resume site built with Vite + React 18 + TypeScript + Tailwind CSS.

- `src/App.tsx` composes the page as a fixed, linear stack of section components (`Navbar`, `Hero`, `About`, `Experience`, `Skills`, `Education`, `Projects`, `Footer`) inside one scrollable page. Navigation is same-page anchor scrolling (`#home`, `#about`, etc.) rather than routing — there is no router in this project.
- `src/components/` holds one component per resume section. Components are presentational; they import their content from matching files in `src/data/` rather than hardcoding text.
- `src/data/` holds the actual resume content as typed data modules (`personalInfo.ts`, `experienceData.ts`, `educationData.ts`, `skillsData.ts`, `projectsData.ts`, `certificationsData.ts`). To update site content (name, job history, skills, projects, etc.), edit these files rather than the components.
- Icons come from `lucide-react`.
- Tailwind theme customization (colors, fonts, animations) lives in `tailwind.config.js`. Note the `fontFamily.sans`/`serif` are overridden to `Times New Roman`.
- `tsconfig.json` is a solution file referencing `tsconfig.app.json` (app source, strict mode with `noUnusedLocals`/`noUnusedParameters`) and `tsconfig.node.json` (build tooling config, e.g. `vite.config.ts`).
