# Portfolio Project Rules & Standards

## Overview
This document outlines the coding standards, project structure, and workflow rules for the Portfolio project.

## Project Structure
```
Portfolio/
├── README.md                          # Project overview
├── RULES.md                           # This file
├── NETLIFY_SETUP.md                   # Netlify deployment guide
├── _site/                             # Netlify root (published content)
│   ├── index.html                     # Portfolio homepage
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   └── pages/
│       ├── about.html
│       ├── work.html
│       ├── case-study-1.html
│       ├── case-study-2.html
│       ├── case-study-3.html
│       └── case-study-4.html
├── planning/                          # Deliverable planning docs
│   ├── plan-devoir1.md
│   ├── plan-devoir2.md
│   └── ...
└── .gitignore
```

## Naming Conventions

### Files & Folders
- Use **kebab-case** for HTML/CSS/JS files: `case-study-1.html`, `style.css`
- Use **lowercase** for all directory names
- Use **SCREAMING_SNAKE_CASE** for configuration/documentation: `README.md`, `RULES.md`

### CSS Classes & IDs
- Use **kebab-case**: `.portfolio-card`, `.hero-section`
- Avoid generic names like `.box`, `.container`
- Prefix component classes: `.btn-`, `.card-`, `.nav-`

### JavaScript Variables
- Use **camelCase** for variables and functions: `portfolioData`, `initializeHeader()`
- Use **UPPER_SNAKE_CASE** for constants: `MAX_CASE_STUDIES`, `DEFAULT_TIMEOUT`

## Code Standards

### HTML
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Always include `meta charset="UTF-8"` and viewport meta tag
- Use meaningful `alt` text for all images
- Organize content hierarchically (h1 → h2 → h3)

### CSS
- Mobile-first approach (base styles, then media queries)
- Group related properties
- Use CSS variables for colors and spacing
- Maximum line length: 80 characters
- Use meaningful class names

### JavaScript
- Use `const` by default, `let` for reassignment, avoid `var`
- Add comments for complex logic
- Keep functions small and focused (single responsibility)
- Use meaningful function names

## Git Workflow

### Commit Messages
Use conventional commit format:
```
type(scope): description

[optional body]
[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
- `feat(portfolio): add case study 1 page`
- `docs(readme): update project structure`
- `style(css): improve button styling`

### Branch Naming
- Use format: `type/description`
- Types: `feature`, `bugfix`, `docs`, `cleanup`
- Example: `feature/case-study-pages`, `docs/setup-guide`

## Publishing to Netlify

The `_site/` folder is the published directory for Netlify.

**Important:** Always test locally before deploying.

Steps:
1. Develop in `_site/` folder
2. Test with a local server
3. Commit with descriptive message
4. Push to main branch
5. Netlify automatically deploys when connected to GitHub

## Browser Compatibility
- Target modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- Use Bootstrap 5 for responsive design
- Test responsive behavior at: 320px, 768px, 1024px breakpoints

## Accessibility Standards
- Ensure sufficient color contrast (WCAG AA standard)
- All images have descriptive `alt` text
- Forms have associated labels
- Navigation is keyboard accessible

## Performance Guidelines
- Optimize images (use WebP when possible, compress)
- Minimize CSS/JS files
- Load external libraries with CDN
- Lazy load images if needed

## Documentation Requirements

Every deliverable should include:
1. `plan-devoir[X].md` - Planning document
2. Comments in code for non-obvious logic
3. README sections for any new features
4. Links to design inspiration and rationale

## Tools & Technologies

### Required
- **Version Control:** Git + GitHub
- **HTML/CSS/JS:** Bootstrap 5
- **Hosting:** Netlify

### Recommended
- **Code Editor:** VS Code
- **Version Manager:** nvm (for Node if needed)
- **Image Optimization:** TinyPNG, Squoosh

## Quality Checklist

Before each submission:
- [ ] All links are functional
- [ ] Portfolio is responsive (mobile, tablet, desktop)
- [ ] No console errors
- [ ] Site is publicly accessible on Netlify
- [ ] Design choices are documented
- [ ] All images optimized
- [ ] Code follows naming conventions
- [ ] Report includes all required elements

## Questions?
Refer to the specific deliverable planning documents (e.g., `plan-devoir1.md`) for assignment-specific rules.
