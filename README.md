# Agrima Gandotra — Portfolio

A personal developer portfolio built with **React + Vite + Tailwind CSS**, recreated from a Figma template with real content pulled from Agrima's resume.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/     # Navbar, Hero, About, Skills, Projects, Resume, Footer
  data/
    profile.js    # ALL editable content lives here (name, about text, skills, etc.)
  index.css       # Tailwind + global styles
  App.jsx
  main.jsx
public/
  resume/         # Your resume PDF + a generated preview image
  favicon.svg
```

## What to edit later

- **Everything text-based (name, about paragraphs, education, skills, learning list, project blurb, resume tagline, social links):** edit `src/data/profile.js`. Every section reads from this one file, so there's no need to touch component code just to update your info.
- **Resume file:** replace `public/resume/Agrima_Gandotra_Resume.pdf` with your updated PDF (keep the same filename, or update the `resume.file` path in `profile.js`). If you replace it, also regenerate the preview thumbnail image (`public/resume/resume-preview.png`) — any tool that renders a PDF's first page as a PNG will do, or just take a screenshot of the first page.
- **Projects:** once you have real projects to show, add objects to the `projects` array in `profile.js` (title, description, link, etc.) and adjust `src/components/Projects.jsx` if you want project cards with images/links instead of the current placeholder card.
- **Colors/fonts:** the color palette (background, card fill, lime accent) is defined in `tailwind.config.js` under `theme.extend.colors`. Fonts (Anton for headings, Poppins for body) are loaded from Google Fonts in `index.html`.

## Notes

- Fully responsive: tested at desktop (1440px) and mobile (390px) widths, with a working mobile hamburger menu.
- All social links, the resume download, and the "Contact Me" button (scrolls to Projects) are functional.
- No projects are listed yet beyond the "Currently Building" placeholder — that's intentional, matching the original template, so you can add real ones as you build them.
