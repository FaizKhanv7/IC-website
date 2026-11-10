# Forsyth Central CS Pathway Website

Website for the computer science pathway in the STEM Academy at Forsyth Central High School. It covers the four courses (IST, AP CSP, AP CSA, PGAS), course syllabi, the Standards pages, and a student project showcase.

Built with React, Vite, React Router, and Framer Motion.

## Running locally

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

## Where things live

- `src/pages/` has one component per route.
- `src/components/` has shared pieces such as the navbar, footer, and homepage sections.
- `src/data/courses.js` holds course descriptions, topics, and syllabus links.
- `src/data/projects.js` holds the student project entries.
- `public/syllabi/` holds the syllabus PDFs linked from each course page.

## Content to fill in

- Set `VITE_SITE_URL` (see `.env.example`) to the live address so links shared on Discord, Remind, or email show the preview image.
- `src/components/ContactCard.jsx` has no classroom number or office hours because the syllabi do not list any. Add them when confirmed.
- `src/data/faq.js` answers come from the syllabi. The graduation/math-credit and "AP CSP without IST" answers point students to a counselor until the department confirms.
- Course stats in `src/data/courses.js` are `"—"` until real numbers are added. The course pages hide any stat that is still `"—"`.
- The Standards 2 to 6 pages are placeholders.
- The pathway flowchart in `src/components/PathwayFlow.jsx` reads its steps from `src/data/courses.js`.
- The hero images in `src/assets/placeholder*.png` and the project wheel images on the homepage are stand-ins.
