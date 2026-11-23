# ElevateChangeAI

A modern, Git-based website redesign for **Elevate Change Inc.** ([elevatechange.co](https://www.elevatechange.co/)), built to replace the legacy WordPress site with a fast, maintainable, static-first web application.

## Key Improvements Over `elevatechange.co`

- **Cleaner Information Architecture**: Consolidated sprawling dropdown menus into six clear sections (`Approach`, `Services`, `Programs`, `Podcast & Speaking`, `Clients`, `Contact`).
- **Polished, Typo-Free Copy**: Fixed legacy typos (`Build Succeess`, `Testomonials`, stray WordPress shortcodes) and sharpened the messaging around measurable Agile, Lean, and Kanban outcomes.
- **Interactive Flagship Programs**: Added a tabbed showcase for *Elevate to Coach*, *Agile & Digital Transformation*, and *Community Building*.
- **Training & Podcast Spotlight**: Surfaced Certified Kanban Training tracks (TKP, KSD, KSI) and recent *Lean On Agile Show* episodes.
- **Zero-Dependency Static Architecture**: Pure HTML5, CSS3, and vanilla ES6+ JavaScript—instant load times, responsive mobile navigation, and ready for GitHub Pages, Netlify, or Vercel.

## Project Structure

```text
ElevateChangeAI/
├── index.html      # Semantic landing page & sections
├── styles.css      # Design system, layout, and responsive styles
├── script.js       # Interactive tabs, mobile menu, and form handling
├── .gitignore      # Standard Git ignore rules
└── README.md       # Project documentation
```

## Local Preview

Open `index.html` directly in your browser, or run a local static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
