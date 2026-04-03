# Big O Notation Cheat Sheet

## [Big O Cheat Sheet Website](https://geocolon.github.io/bigocheatsheet/#)

Interactive Big O Notation visualization built with **D3.js** and **Bootstrap 5**.

## Features

- **D3.js Complexity Chart** — animated line chart showing how O(1) through O(2ⁿ) scale
- **Interactive Data Tables** — filter by data structure type or sorting category
- **Dark / Light Theme** — toggle with saved preference
- **Animated UI** — scroll reveals, hover effects, line-drawing animations
- **Mobile Friendly** — responsive layout with horizontal scroll for tables
- **SEO Optimized** — meta tags, Open Graph, structured data (Schema.org)
- **Accessible** — skip links, ARIA labels, semantic HTML

## Quick Start

No build step needed. Open `index.html` in a browser.

## Deploy to GitHub Pages

1. Create a new GitHub repo
2. Push this project to the `main` branch
3. Go to **Settings → Pages → Source → GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` deploys automatically on push

Your site will be live at: `https://<username>.github.io/<repo-name>/`

## Tech Stack

| Tool           | Purpose                             |
|----------------|-------------------------------------|
| D3.js v7       | Complexity growth chart             |
| Bootstrap 5.3  | Responsive grid and components      |
| Bootstrap Icons| Navigation and section icons        |
| Lexend font    | Dyslexia-friendly body text         |
| JetBrains Mono | Code / complexity notation          |
| Schema.org     | Structured data for SEO             |

## SEO Notes

The page includes meta description, keywords, Open Graph tags,
Twitter Card tags, canonical URL, and Schema.org structured data.

Update the `canonical` URL and `og:url` in `index.html`
with your actual GitHub Pages URL before deploying.

## References

- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
- [D3.js Documentation](https://d3js.org/)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [Schema.org WebPage](https://schema.org/WebPage)

## License

MIT
