# Sakshi — Portfolio

Personal portfolio site built with React + Vite.

## Stack
- **React 18** + **React Router v6** for routing
- **Vite** for dev server and build
- **CSS Modules** (plain CSS per component, no framework)
- **Google Fonts** — Cormorant Garamond + Outfit
- **Formspree** for contact form (free tier)

## Getting started

```bash
npm install
npm run dev
```

## Before going live

1. **Contact form**: Sign up at [formspree.io](https://formspree.io), create a form, and replace `YOUR_FORM_ID` in `src/pages/Contact.jsx`:
   ```js
   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', ...)
   ```

2. **Resume link**: Add a PDF resume to `/public/` and link it from the Nav or Tech page.

3. **Writing samples**: Update links in `Marketing.jsx` if URLs change.

## Deploying to Render

1. Push to GitHub
2. Go to [render.com](https://render.com) → New → Static Site
3. Connect your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Done ✓

## Structure

```
src/
├── pages/
│   ├── Home.jsx / Home.css        ← Split screen portal
│   ├── Tech.jsx / Tech.css        ← Engineering portfolio
│   ├── Marketing.jsx / Marketing.css  ← Copywriting portfolio
│   ├── About.jsx / About.css      ← About page
│   └── Contact.jsx / Contact.css  ← Contact + typewriter
├── components/
│   ├── Nav.jsx / Nav.css          ← Floating nav
│   └── Cursor.jsx                 ← Custom cursor
├── App.jsx                         ← Router
├── index.css                       ← Global styles + design tokens
└── main.jsx                        ← Entry point
```

## Design tokens (index.css)

All colors live as CSS variables in `:root`. Edit freely:
- `--accent-tech`: forest green (tech side)
- `--accent-marketing`: terracotta (marketing side)
- `--cream` / `--ink`: base palette
