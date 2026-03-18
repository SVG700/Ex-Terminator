# Ex-Terminator

Automated Sludge Removal System for Safer Sewage Treatment Plants.

This project is a production-ready React landing page built with Vite and Tailwind CSS, designed for hackathon and startup-style presentations.

## Stack

- React (Vite)
- Tailwind CSS

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

- Vercel: direct static deployment supported.
- GitHub Pages: supported using Vite build output. The `base` path in `vite.config.js` auto-adjusts when `GITHUB_PAGES=true` and `GITHUB_REPOSITORY` are available.

## Structure

- `src/components`: reusable section components and UI helpers.
- `src/App.jsx`: page composition.
- `src/index.css`: Tailwind setup and global utility classes.
