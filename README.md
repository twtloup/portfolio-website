# Portfolio Website - Tom

A clean, modern, single-page portfolio website showcasing data analytics and product analysis work. Designed for product analyst and strategy roles at venture-funded companies (fintech/SaaS).

**Live Site:** [yourusername.github.io/portfolio-website](https://yourusername.github.io/portfolio-website) *(update after deployment)*

---

## Features

- **Single-page responsive design** with smooth scrolling navigation
- **Modern aesthetic** inspired by Linear and Stripe (minimal, professional, fast)
- **Fully mobile-responsive** - looks great on all devices
- **Scroll animations** with fade-in effects using Intersection Observer API
- **SEO optimized** with meta tags and Open Graph support
- **Fast loading** - vanilla HTML/CSS/JavaScript (no frameworks needed)
- **GitHub Pages ready** - free hosting with custom domain support

---

## Project Structure

```
portfolio-website/
├── index.html              # Main HTML file with all sections
├── css/
│   └── style.css           # All styling (modern design system)
├── js/
│   └── main.js             # Interactive features and animations
├── images/                 # Placeholder for project screenshots
├── .nojekyll               # GitHub Pages configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

---

## Quick Start

### 1. Run Locally

Simply open `index.html` in your web browser:

**Option A: Double-click**
- Navigate to the `portfolio-website` folder
- Double-click `index.html`

**Option B: Use a local server (recommended)**

Python 3:
```bash
cd portfolio-website
python -m http.server 8000
```

Then visit: `http://localhost:8000`

---

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `portfolio-website` (or any name you prefer)
3. Keep it **public** (required for free GitHub Pages)
4. Don't initialize with README (we already have files)

### Step 2: Initialize Git and Push

Open terminal in the `portfolio-website` directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment
6. Your site will be live at: `https://yourusername.github.io/portfolio-website/`

### Step 4: Verify Deployment

Visit your live site URL and check:
- All sections load correctly
- Navigation links work
- Animations appear on scroll
- Mobile responsiveness works

---

## Customization Guide

### Update Personal Information

**File: `index.html`**

1. **Replace placeholder name** (lines 30-32):
   ```html
   <h1 class="hero-title">Tom Your-Last-Name</h1>
   ```

2. **Update contact links** (lines 33-60 and 280-320):
   - Replace `https://github.com/yourusername` with your GitHub profile
   - Replace `https://linkedin.com/in/yourprofile` with your LinkedIn
   - Replace `your.email@example.com` with your email

3. **Update project GitHub links** (lines 200 and 260):
   - Replace repository URLs with your actual GitHub repos

4. **Update Open Graph URL** (line 12):
   ```html
   <meta property="og:url" content="https://yourusername.github.io/portfolio-website">
   ```

### Add Project Screenshots

1. **Capture screenshots** of your projects:
   - Venture Funding Monitor: Email digest or data dashboard
   - FTSE Trading Backtester: Equity curve or performance metrics

2. **Optimize images** (recommended sizes):
   - Width: 800-1200px
   - Format: PNG or JPG
   - Compress using [TinyPNG](https://tinypng.com) or similar

3. **Save images** to `images/` folder:
   ```
   images/
   ├── venture-funding-monitor.png
   └── ftse-trading-strategy.png
   ```

4. **Update HTML** (replace placeholder sections):

   **Line ~180-188 (Project 1):**
   ```html
   <div class="project-image">
       <img src="images/venture-funding-monitor.png" alt="Venture Funding Monitor Dashboard">
   </div>
   ```

   **Line ~240-248 (Project 2):**
   ```html
   <div class="project-image">
       <img src="images/ftse-trading-strategy.png" alt="FTSE Trading Strategy Performance">
   </div>
   ```

5. **Add image styling** to `css/style.css`:
   ```css
   .project-image {
       margin: var(--spacing-lg) 0;
       border-radius: var(--border-radius);
       overflow: hidden;
       border: 1px solid var(--color-border);
   }

   .project-image img {
       width: 100%;
       height: auto;
       display: block;
   }
   ```

### Change Color Scheme

**File: `css/style.css` (lines 8-18)**

Edit CSS variables to customize colors:

```css
:root {
    --color-primary: #0f172a;          /* Main text color */
    --color-accent: #3b82f6;           /* Brand color (buttons, links) */
    --color-accent-hover: #2563eb;     /* Hover states */
    --color-background: #ffffff;        /* Page background */
    --color-background-alt: #f8fafc;   /* Section backgrounds */
}
```

**Example color schemes:**

**Purple theme:**
```css
--color-accent: #8b5cf6;
--color-accent-hover: #7c3aed;
```

**Green theme:**
```css
--color-accent: #10b981;
--color-accent-hover: #059669;
```

### Add More Projects

1. **Copy existing project card** (lines 120-210 in `index.html`)
2. **Paste after the last project** (before `</div>` closing `projects-grid`)
3. **Update content**:
   - Project title
   - Tagline
   - Challenge/Context
   - Approach & Technologies
   - Key Insights/Outcomes
   - Tech badges
   - GitHub link

4. **Explore your new project** to extract details:
   - Read README.md
   - Review main code files
   - Identify business value and impact

### Modify Sections

**Add a new section:**

1. Add HTML after an existing section:
   ```html
   <section id="new-section" class="new-section">
       <div class="container">
           <div class="section-header fade-in">
               <h2 class="section-title">New Section Title</h2>
           </div>
           <div class="fade-in">
               <!-- Your content -->
           </div>
       </div>
   </section>
   ```

2. Add navigation link:
   ```html
   <li><a href="#new-section" class="nav-link">New Section</a></li>
   ```

3. Add styling in `css/style.css`:
   ```css
   .new-section {
       background-color: var(--color-background);
   }
   ```

---

## Performance Optimization

The website is already optimized for speed:

- **No frameworks** - vanilla JavaScript loads instantly
- **System fonts** with Google Fonts fallback
- **CSS animations** with `prefers-reduced-motion` support
- **Lazy-loaded animations** using Intersection Observer
- **Debounced scroll events** for smooth performance
- **Minimal HTTP requests** - all assets are local

### Further Optimizations (Optional)

1. **Minify CSS/JS** for production:
   ```bash
   # Using online tools:
   # - CSS: https://cssminifier.com
   # - JS: https://javascript-minifier.com
   ```

2. **Add image lazy loading** (if you add many screenshots):
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

3. **Enable Gzip compression** (automatic on GitHub Pages)

---

## Custom Domain Setup (Optional)

### Step 1: Buy a Domain

Purchase from: Namecheap, Google Domains, Cloudflare, etc.

### Step 2: Configure DNS

Add these DNS records at your domain registrar:

**For apex domain (example.com):**
```
A Record:  @  →  185.199.108.153
A Record:  @  →  185.199.109.153
A Record:  @  →  185.199.110.153
A Record:  @  →  185.199.111.153
```

**For subdomain (www.example.com):**
```
CNAME Record:  www  →  yourusername.github.io
```

### Step 3: Add CNAME File

Create `CNAME` file in repository root:

```
example.com
```

### Step 4: Configure GitHub Pages

1. Go to **Settings** → **Pages**
2. Enter your custom domain
3. Enable **Enforce HTTPS** (wait 24 hours for SSL certificate)

---

## Browser Support

Supports all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Note:** Internet Explorer is not supported (uses modern CSS and JavaScript).

---

## Accessibility Features

- **Semantic HTML5** markup
- **Keyboard navigation** support
- **Screen reader friendly** with ARIA labels
- **Focus indicators** for interactive elements
- **Reduced motion** support for users with vestibular disorders

---

## SEO Checklist

- [x] Descriptive page title
- [x] Meta description
- [x] Open Graph tags for social sharing
- [x] Semantic HTML structure
- [x] Alt text for images (add when you insert screenshots)
- [x] Fast load times
- [x] Mobile-friendly design

**After deployment, submit to:**
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

---

## Troubleshooting

### Site not loading on GitHub Pages

1. Check **Settings** → **Pages** shows green success message
2. Wait 2-3 minutes for initial deployment
3. Verify branch is set to `main` and folder to `/ (root)`
4. Check repository is **public**
5. Clear browser cache

### Images not displaying

1. Verify image paths are relative: `images/screenshot.png`
2. Check image files are committed to repository
3. Ensure image filenames match exactly (case-sensitive)

### Animations not working

1. Check JavaScript console for errors (F12 → Console)
2. Verify `js/main.js` is loading (Network tab)
3. Test in different browser

### Scroll not smooth

1. Check if `prefers-reduced-motion` is enabled in OS
2. Try a different browser
3. Verify no browser extensions are interfering

---

## Future Enhancements

Ideas to expand your portfolio:

- [ ] Add blog section for case studies
- [ ] Include downloadable resume/CV
- [ ] Add Google Analytics or Plausible Analytics
- [ ] Create project detail pages (multi-page)
- [ ] Add testimonials section
- [ ] Implement dark mode toggle
- [ ] Add contact form with Formspree or Netlify Forms
- [ ] Create data visualization showcases with D3.js

---

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern layouts (Flexbox, Grid) and animations
- **JavaScript ES6+** - Intersection Observer, smooth scrolling
- **Google Fonts** - Inter typeface
- **GitHub Pages** - Free hosting

---

## Credits

**Design inspiration:**
- [Linear](https://linear.app) - Clean, minimal aesthetic
- [Stripe](https://stripe.com) - Professional typography and spacing

**Built by:** Tom (Technology Consultant at EY)

**Last updated:** January 2026

---

## License

This project is open source for personal and educational use. Feel free to fork and customize for your own portfolio.

---

## Questions or Feedback?

If you encounter any issues or have suggestions:

1. Open an issue on GitHub
2. Reach out via email or LinkedIn (links in the portfolio)
3. Fork the repository and submit improvements via pull request

---

**Good luck with your job search! 🚀**
