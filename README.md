# Rebecca Yu — Personal Website

Rebecca Yu's personal portfolio, built with [Astro](https://astro.build/) and based on [Academic Portfolio Astro](https://github.com/rubzip/academic-portfolio-astro).

The site is a static, responsive multipage portfolio with a persistent profile sidebar, Markdown-driven content collections, reusable Astro components, dark mode, and GitHub Pages deployment.

## Requirements

- Node.js 22.12 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Validation and production build

```bash
npm run check
npm run build
npm run preview
```

The production output is written to `dist/`.

## Site structure

```text
/             About
/education    Education and leadership
/work         Industry and teaching experience
/research     Publications and research experience
/projects     Selected projects
/contact      LinkedIn and GitHub contact links
```

Most site content is maintained as Markdown frontmatter under `src/content/`:

```text
src/content/bio.md
src/content/education/
src/content/leadership/
src/content/work/
src/content/research/
src/content/publications/
src/content/projects/
```

Global metadata, navigation, social links, page labels, and themes live under `src/config/`. Reusable entry components are under `src/components/content/`.

## Deployment

The workflow at `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages when changes are pushed to `main`. The configured production URL is [https://rebeccayu2015.github.io/](https://rebeccayu2015.github.io/).

In the GitHub repository, Pages must use **GitHub Actions** as its source.

## Foundation

This project preserves the layout, responsive sidebar behavior, Astro routing conventions, theme system, and GitHub Pages approach of Academic Portfolio Astro. Portfolio entry presentation was adapted as native Astro markup for this site.
