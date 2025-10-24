# Personal Portfolio Website

## Overview
A beautiful, modern personal portfolio website built with pure HTML, CSS, and JavaScript. Features smooth animations, responsive design, and interactive elements to showcase professional work, skills, experience, certifications, and projects.

## Recent Changes
- **2024-10-24**: Initial project creation with all core sections implemented
  - Home section with hero animation and typing effect
  - About section with profile information
  - Summary section with skill cards and progress bars
  - Projects showcase with modal popups
  - Experience timeline with scroll animations
  - Certifications gallery with animated cards
  - Resume download section
  - Responsive navigation with hamburger menu
  - Custom cursor effects
  - Smooth scrolling and scroll-triggered animations

## Project Structure
```
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling with animations
├── script.js           # Interactive features and animations
└── replit.md          # Project documentation
```

## Features
- **Responsive Design**: Mobile-first approach with hamburger menu
- **Smooth Animations**: Fade-ins, slide-ins, typing effects, and scroll-triggered animations
- **Interactive Elements**: Modal popups for project details, hover effects, custom cursor
- **Modern UI**: Gradient backgrounds, glassmorphism effects, animated skill bars
- **Sections**: Home, About, Summary, Projects, Experience, Certifications, Resume

## Technologies
- HTML5
- CSS3 (Grid, Flexbox, Animations, Transitions)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins)

## Customization Guide
To personalize this portfolio:

1. **Personal Information** (index.html):
   - Update name in hero section (line ~40)
   - Change profile image URL (line ~73)
   - Update contact information (lines ~88-103)
   - Modify social media links (lines ~60-64)

2. **Projects** (index.html & script.js):
   - Edit project cards in HTML (lines ~175-250)
   - Update projectData object in script.js with your actual projects
   - Replace placeholder images with your project screenshots

3. **Experience** (index.html):
   - Update timeline items with your work experience (lines ~260-315)

4. **Certifications** (index.html):
   - Modify certification cards with your credentials (lines ~325-380)

5. **Skills** (index.html):
   - Edit skill cards and progress percentages (lines ~110-165)

6. **Colors** (styles.css):
   - Adjust CSS variables in :root (lines 8-17) to change color scheme

7. **Resume**:
   - Update download button link to your actual PDF resume

## Running the Project
The portfolio is served using Python's built-in HTTP server on port 5000. Simply open the Replit preview to view your portfolio.
