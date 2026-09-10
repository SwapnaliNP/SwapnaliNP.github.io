# swapnali-patki.github.io

A single-page, terminal-styled portfolio site — built with plain HTML/CSS/JS, no build step, no dependencies to install. Ready to host on GitHub Pages.

## What's in here

```
.
├── index.html              ← the whole site
├── assets/
│   ├── style.css
│   ├── script.js
│   ├── favicon.svg
│   └── Swapnali_Patki_Resume.pdf   ← downloadable résumé (swap this file to update)
└── README.md
```

## Host it on GitHub Pages (user site — `<username>.github.io`)

1. Create a new GitHub repo named **exactly** `SwapnaliNP.github.io` (must match your GitHub username).
2. Push these files to the `main` branch:
   ```bash
   cd portfolio-site
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/SwapnaliNP/SwapnaliNP.github.io.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in the repo. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
4. Wait ~1 minute, then visit `https://SwapnaliNP.github.io`.

### Alternative: host it as a project site instead

If you'd rather keep it in an existing repo (e.g. `github.com/SwapnaliNP/portfolio`), push these files there and enable Pages the same way — your site will live at `https://SwapnaliNP.github.io/portfolio/`. In that case, note the asset paths in `index.html` are already relative (`assets/...`), so no changes are needed.

## Updating content later

- **Résumé**: replace `assets/Swapnali_Patki_Resume.pdf` with a new file of the same name (or update the two links in `index.html` that point to it).
- **Projects / experience / skills**: everything is plain HTML in `index.html`, organized into clearly commented sections (`PROJECTS`, `EXPERIENCE`, `EDUCATION`, `SKILLS`, `CONTACT`) — edit the text directly, no templating engine involved.
- **Colors / fonts**: all defined as CSS variables at the top of `assets/style.css` (`:root { ... }`).
- **Custom domain**: add a file named `CNAME` (no extension) at the repo root containing your domain, e.g. `swapnalipatki.com`, then configure your DNS per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Notes on the content

Project cards and experience entries were pulled from your two résumés and your public GitHub repos (`Yahoo-Music-Recommender`, `Airline-Web-Application`, etc.). A few older academic projects (robot motion planning, the queue-management paper, the Kaggle forecasting project) don't have public repos linked, so their cards show a status note instead of a link — add a `href` once/if you make those repos public.
