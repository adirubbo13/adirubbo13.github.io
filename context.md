# Portfolio Context Documentation

## Overview
This is Tony DiRubbo's personal data science portfolio, built for the Syracuse University Applied Data Science program (IST 782 - Portfolio Review Course).

## Project Structure
```
PortfolioRepo_CC/
├── index.html           # Main portfolio page (single-page layout)
├── blog.html           # Blog post / personal statement
├── outcomes.html       # Learning outcomes page
├── styles.css          # All styling (responsive, mobile-first)
├── script.js           # Interactive elements (modal, mobile menu, scroll)
└── misc/
    ├── images/
    │   ├── avatar.jpg  # Tony's headshot
    │   └── bg.jpg      # Background image
    └── PortfolioResume.pdf  # PDF version of resume
```

## Tech Stack
- **HTML5** - Semantic structure
- **CSS3** - Custom properties, Flexbox, Grid, responsive design
- **Vanilla JavaScript** - No framework dependencies
- **FontAwesome 6.4.0** - Icons (via CDN)

## Key Features

### Navigation
- Fixed navbar with scroll effect
- Mobile-responsive hamburger menu
- Smooth scrolling to sections
- Video popup modal (YouTube video at https://youtu.be/7hgIQyVxDck)

### Pages
1. **index.html** - Main portfolio with:
   - Hero section with bio and call-to-actions
   - About section with skills grid
   - Featured projects (3 highlighted projects)
   - All projects section (5 projects with 4 bullet points each)
   - Work experience section
   - Contact section with social media links

2. **blog.html** - Personal statement (~3,000 words) covering:
   - Journey to graduate school
   - Academic experiences at Syracuse
   - All six program learning outcomes with project examples
   - Track selections (AI and Data Pipelines)
   - Professional experiences (co-ops, research)

3. **outcomes.html** - Learning outcomes page mapping:
   - All 6 learning outcomes
   - How each was achieved through specific projects
   - Track-based learning pathway

### Responsive Design
- Mobile-first approach
- Breakpoints: 968px, 768px, 480px
- Touch-friendly elements
- Print-optimized styles

## Content Guidelines

### Projects Format
All projects use this structure:
```html
<div class="project-card">
    <h3 class="project-title">Project Name</h3>
    <ul class="project-bullets">
        <li>Bullet point 1</li>
        <li>Bullet point 2</li>
        <li>Bullet point 3</li>
        <li>Bullet point 4</li>
    </ul>
</div>
```

### Color Palette (CSS Variables)
- Primary: `#2563eb` (blue)
- Primary Dark: `#1d4ed8`
- Secondary: `#64748b` (slate)
- Accent: `#0f172a` (dark navy)
- Text: `#1e293b`
- Text Light: `#64748b`
- Background: `#ffffff`
- Background Secondary: `#f8fafc`

### Projects in This Portfolio

#### Featured Projects (3)
1. **Large Language Model Dietician App** - Multi-agent AI recipe recommender
2. **Data Warehouse Optimized ETL** - Snowflake/dbt/PowerBI pipeline
3. **LLM Knowledge Distillation** - Tutorial on model distillation techniques

#### Other Projects (5)
1. Machine Learning to Predict Diabetes
2. Deep Learning to Predict Nutritional Content of Food from Images
3. API Evaluation and Analysis
4. Machine Learning with Heart Disease
5. Award Winning Data Journalism Article

## How to Use

### Adding a New Project
1. Create a new `<div class="project-card">` in the appropriate section
2. Follow the project format above
3. Add to styles.css if custom styling is needed

### Editing Content
- All text content is in the HTML files
- Use the Blog Post (blog.html) for the full personal statement
- Use outcomes.html for the learning outcomes documentation

### Future Enhancements
- Add more projects as they're developed
- Update work experience with current roles
- Add new skills to the skills grid
- Integrate a contact form if desired

## Deployment
This portfolio is designed for GitHub Pages. To deploy:
1. Push to a repository named `username.github.io`
2. Or set the repository as the source for GitHub Pages in settings

## Design Philosophy
- Modern, clean aesthetic
- Mobile-responsive by default
- Fast loading (no heavy frameworks)
- Accessible (semantic HTML, proper contrast)
- Professional but approachable tone
