# Plan - Devoir 1: Portfolio Homepage

## Overview

**Devoir 1** is the foundation of your portfolio project. This deliverable requires you to create a professional portfolio website that showcases who you are and your design work.

**Due Date:** Sunday, May 24 at midnight  
**Weight:** 5% of final grade  
**Required Report:** PDF submitted on Brightspace

---

## Learning Objectives

By completing this deliverable, you will:

- Learn HTML/CSS/Bootstrap for UI development
- Host a website on Netlify
- Present your work in a professional portfolio format
- Apply visual communication principles
- Reflect on your design process

---

## Required Content

Your portfolio homepage must include three main sections:

### 1. **About You** (15%)
- Who you are
- Your name and personal information
- Optional: A professional photo or avatar
- Brief bio (2-3 sentences)
- Your interests/passions

**Questions to answer:**
- What's your background?
- What interests you about design?
- What are your career goals?

---

### 2. **How You Work** (20%)
Since this is early in the semester, this section should explain:

**Option A: No Prior Design Experience**
- Mention you're taking SEG3525 UI/UX Design course
- Link to relevant learning resources (e.g., Nielsen Norman Group)
- Explain what you're learning this semester
- Show enthusiasm for design

**Option B: Prior Design Experience**
- Explain your design philosophy/approach
- Link to previous work or projects
- Describe your design process
- Mention methodologies you use (e.g., user-centered design, prototyping)

**To Update Later:**
- Design principles you practice (user research, wireframing, heuristic evaluation)
- Your design tools (Figma, Adobe XD, etc.)
- Case study methodology

---

### 3. **Case Studies/Portfolio Items** (40%)
Include 4 sections for upcoming projects (these are **placeholders for now**):

#### **Project 1: Service Website**
- Category: Business/Service Design
- Examples: Dentist, Bicycle Repair, Hair Salon
- Placeholder image (related to your service choice)
- Title and brief description
- Link to detailed case study page (currently "Coming Soon")

#### **Project 2: Memory Game**
- Category: Interactive Game
- Placeholder image (game-related visual)
- Title and brief description
- Link to detailed case study page (currently "Coming Soon")

#### **Project 3: E-Commerce Site**
- Category: E-Commerce Platform
- Placeholder image (shopping-related visual)
- Title and brief description
- Link to detailed case study page (currently "Coming Soon")

#### **Project 4: Data Analytics/Visualization Site**
- Category: Business Intelligence / Sports Analytics / Finance
- Placeholder image (data-related visual)
- Title and brief description
- Link to detailed case study page (currently "Coming Soon")

---

## Design Requirements

Your portfolio must reflect visual communication principles:

### **Color Palette** (10%)
- Choose a cohesive color scheme (2-4 main colors)
- Ensure sufficient contrast for accessibility
- Colors should reflect your personal brand
- Use Bootstrap's color system if helpful

**Questions to answer in report:**
- What colors did you choose and why?
- How do they represent you?
- Do they match your target audience perception?

---

### **Typography** (10%)
- Choose 2 font families (heading + body)
- Ensure readability
- Create visual hierarchy with font sizes
- Use web-safe fonts or Google Fonts

**Questions to answer in report:**
- Which fonts did you select and why?
- How do they enhance your brand?
- How do they improve readability?

---

### **Layout & Visual Hierarchy** (15%)
- Clean, professional design
- Responsive across devices (mobile, tablet, desktop)
- Proper use of:
  - **Scale:** Varying sizes to show importance
  - **Hierarchy:** Clear visual priority (headings > subheadings > body text)
  - **Balance:** Symmetrical or asymmetrical as appropriate
  - **Contrast:** Visual distinction between elements
  - **White space:** Breathing room between sections
  - **Grid system:** Use Bootstrap's grid for alignment

**Questions to answer in report:**
- Describe your layout approach
- How do scale and hierarchy guide the user?
- What balance strategy did you use?
- How does contrast help understanding?

---

## Technical Requirements

### **Structure**
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- Valid HTML (test with W3C Validator)

### **Styling**
- Bootstrap 5 framework
- Custom CSS in separate file
- Mobile-first responsive design
- No inline styles (except if absolutely necessary)

### **Accessibility**
- Color contrast meets WCAG AA standards
- Keyboard navigation support
- Meaningful link text (not "click here")
- Form labels if any forms included

### **Hosting**
- Deployed to Netlify
- Accessible via your Netlify site URL
- Publicly accessible (not password-protected unless specified in report)

---

## File Structure

```
Portfolio/
├── README.md
├── RULES.md
├── NETLIFY_SETUP.md
├── planning/
│   └── plan-devoir1.md          ← This file
├── _site/                       ← Netlify root
│   ├── index.html               ← Homepage
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js (if needed)
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── project-1-thumb.jpg
│   │   ├── project-2-thumb.jpg
│   │   ├── project-3-thumb.jpg
│   │   └── project-4-thumb.jpg
│   └── pages/
│       ├── about.html
│       ├── work.html
│       ├── case-study-1.html    (Coming Soon placeholder)
│       ├── case-study-2.html    (Coming Soon placeholder)
│       ├── case-study-3.html    (Coming Soon placeholder)
│       └── case-study-4.html    (Coming Soon placeholder)
```

---

## Report Requirements (submitted as PDF)

Your report must include:

### 1. **Header** (5%)
- Your full name
- Student number
- Course: SEG3525 UI/UX Design
- Assignment: Devoir 1 - Portfolio Homepage
- Date of submission

### 2. **JavaScript/Development Experience** (10%)
- Your prior experience with JavaScript (if any)
- Tutorials/resources you followed to complete this project
- Technologies you learned for this deliverable

### 3. **Design Inspiration** (15%)
- At least 3 portfolio website examples
- For each, explain:
  - Why you found it inspiring (positive or negative)
  - What design elements you liked/disliked
  - How it influenced your design choices

### 4. **Links** (10%)
- Link to your live portfolio (Netlify URL)
- Link to your GitHub repository (where your code is hosted)

### 5. **Design Rationale** (50%)
Explain your visual communication choices:

**A. Color Palette**
- Specific colors chosen (with hex codes)
- Reasoning (psychology, brand, accessibility)
- How it reflects your personality

**B. Typography**
- Font names used for headings and body text
- Why these fonts
- How they enhance readability and hierarchy

**C. Layout & Visual Design**
- Describe your overall layout approach
- How you implemented scale and hierarchy
- Balance strategy (symmetrical vs. asymmetrical)
- Use of contrast to guide attention
- White space usage
- Any specific Bootstrap components used

**D. Personal Branding**
- How does your design reflect who you are?
- Would future employers recognize your strengths through your portfolio?
- Any unique design elements that make it yours?

---

## Grading Breakdown

| Component | Weight | Criteria |
|-----------|--------|----------|
| **Report Quality** | 20% | Clear writing, addresses all 6 requirements, easy to understand |
| **Portfolio Website** | 60% | All required content present, visual hierarchy clear, responsive design, accessible, properly hosted |
| **Case Study Placeholders** | (included in 60%) | 4 projects with titles, descriptions, and "Coming Soon" pages |
| **Feedback Session** | 20% | Active participation in critique group, constructive feedback on peers' work |

---

## Development Checklist

Before submitting your portfolio:

### Content Completeness
- [ ] About section completed (name, bio, interests)
- [ ] How You Work section explains your design journey
- [ ] 4 case study placeholders created with images and descriptions
- [ ] All pages link together properly
- [ ] Navigation is consistent across all pages

### Technical Quality
- [ ] Uses semantic HTML
- [ ] CSS is in separate file(s)
- [ ] Uses Bootstrap 5 framework
- [ ] Responsive design tested at 320px, 768px, 1024px
- [ ] All images optimized and have alt text
- [ ] No console errors (check with F12)
- [ ] Valid HTML (W3C Validator)

### Accessibility & UX
- [ ] Color contrast adequate (WCAG AA)
- [ ] Keyboard navigation works
- [ ] Links clearly identify their purpose
- [ ] Mobile version is usable and attractive
- [ ] Loading time is reasonable

### Deployment
- [ ] Code committed to GitHub repository
- [ ] Repository is public
- [ ] Netlify site is deployed
- [ ] Site is live at your Netlify URL
- [ ] All links work (no 404 errors)

### Report Quality
- [ ] PDF format
- [ ] Includes all 6 required sections
- [ ] Design choices clearly explained
- [ ] References cited properly
- [ ] Professional tone and formatting

---

## Resources

### Learning Materials
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)
- [Net Ninja - Bootstrap 5 Video Series](https://www.youtube.com/watch?v=4V_p3yXUiBY)
- [Nielsen Norman Group - Visual Communication](https://www.nngroup.com/)

### Design Inspiration
- [Dribbble](https://dribbble.com/search/portfolio)
- [Behance](https://www.behance.net/search/portfolios)
- [Awwwards](https://www.awwwards.com/)

### Tools
- [Bootstrap Grid System](https://getbootstrap.com/docs/5.0/layout/grid/)
- [Color Palette Generator](https://coolors.co/)
- [Google Fonts](https://fonts.google.com/)
- [Favicon Generator](https://favicon.io/)
- [TinyPNG Image Compression](https://tinypng.com/)
- [W3C HTML Validator](https://validator.w3.org/)

---

## Important Dates

| Event | Date |
|-------|------|
| Tutorial | Monday, May 11 |
| Forum Support Opens | May 12 - May 22 |
| TA Office Hours | May 12 - May 22 |
| **Submission Deadline** | **Sunday, May 24 @ Midnight** |
| Feedback Group Sign-up | Sunday, May 24 |
| Feedback Sessions | May 25 - June 3 |

---

## Submission Instructions

1. **Create your PDF report** with all 6 required sections
2. **Go to Brightspace → Assignments → Devoir 1**
3. **Upload your PDF report**
4. **Include the link to your Netlify site** in the report (required!)
5. **Sign up for a feedback group** after submission

---

## Questions?

- Check the **Brightspace Forum** (monitored daily 5-10 PM)
- Email your assigned TA if forum support isn't enough
- Attend tutorials for in-depth help

---

## Notes

- This portfolio is not final! You can update it throughout the semester
- Each new devoir will add a new case study to your portfolio
- Your final portfolio will have 4 completed projects + updated methodology section
- This is your chance to make a great first impression on potential employers!

