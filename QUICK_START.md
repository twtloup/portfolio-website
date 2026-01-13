# Quick Start Guide

## Immediate Next Steps

### 1. Preview Locally (2 minutes)

Open `index.html` in your browser to see the website:

**Windows:**
```bash
cd portfolio-website
start index.html
```

**Mac/Linux:**
```bash
cd portfolio-website
open index.html
```

Or run a local server:
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

---

### 2. Update Personal Information (5 minutes)

Open `index.html` and replace:

1. **Line 31:** `Tom [Last Name]` → Your full name
2. **Lines 34-60:** Update GitHub, LinkedIn, and email links (3 places)
3. **Lines 280-320:** Update contact section links
4. **Lines 200 & 260:** Update project repository URLs

**Find and replace:** Search for `yourusername` and `your.email@example.com`

---

### 3. Add Project Screenshots (Optional - 10 minutes)

**Where to add screenshots:**
- Project 1 (Venture Funding Monitor): Email digest or dashboard view
- Project 2 (FTSE Trading): Equity curve or performance metrics

**Steps:**
1. Take screenshots of project outputs
2. Save to `images/` folder
3. Replace placeholder sections in `index.html` (lines ~180-188 and ~240-248)
4. See `README.md` section "Add Project Screenshots" for detailed instructions

---

### 4. Deploy to GitHub Pages (10 minutes)

**Create repository and push:**
```bash
cd portfolio-website
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/yourusername/portfolio-website.git
git branch -M main
git push -u origin main
```

**Enable GitHub Pages:**
1. Go to repository Settings → Pages
2. Source: Branch `main`, Folder `/ (root)`
3. Save and wait 2 minutes
4. Visit: `https://yourusername.github.io/portfolio-website/`

---

## Customization Priority

**Essential (do now):**
- [ ] Update name and contact information
- [ ] Test locally to verify everything works
- [ ] Update GitHub repository links

**Important (do soon):**
- [ ] Add project screenshots
- [ ] Deploy to GitHub Pages
- [ ] Share link on LinkedIn/CV

**Optional (do later):**
- [ ] Customize color scheme (see `README.md`)
- [ ] Add more projects
- [ ] Set up custom domain
- [ ] Add Google Analytics

---

## Key Files to Edit

| File | What to Change |
|------|----------------|
| `index.html` | Name, links, project descriptions |
| `css/style.css` | Colors, fonts, spacing (optional) |
| `js/main.js` | Interactions (rarely needed) |
| `README.md` | Documentation (after customization) |

---

## Need Help?

- Full instructions: See `README.md`
- Deployment issues: Check `README.md` → Troubleshooting section
- Design changes: See `README.md` → Customization Guide

---

## Preview Checklist

Before deploying, verify:

- [ ] Name and title are correct
- [ ] All links work (GitHub, LinkedIn, email)
- [ ] Navigation scrolls smoothly between sections
- [ ] Content is typo-free
- [ ] Mobile view looks good (resize browser window)
- [ ] Projects accurately represent your work

---

**You're all set! The website is ready to deploy.** 🚀
