# ARALLITH — English static website

An English recreation of the supplied Framer homepage and contact page, with the previously translated dashboard included. The cream background, blue brand color, desert imagery, warm map section, cards, moving team statements, FAQ, and dark footer follow the original design.

All homepage/contact page styles, fonts, scripts, and images are local. No Framer account, framework, package installation, or build command is needed.

## Deploy to GitHub Pages

1. Extract the ZIP.
2. Create a GitHub repository, or open the repository you want to use.
3. Upload **the contents of this folder** to the repository root. `index.html` must be at the root, alongside `assets`, `contact`, `dashboard`, `styles.css`, and `script.js`. Upload the files, not the ZIP itself.
4. Commit the files to `main`.
5. In the repository, open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**. Select **main** and **/(root)**, then save.
7. Open the published address displayed by GitHub. Initial publication can take a few minutes.

The site supports both `https://USERNAME.github.io/` and project addresses such as `https://USERNAME.github.io/REPOSITORY/`. Internal paths are relative; no domain configuration is needed.

Official instructions: [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart).

## Files to edit

```text
index.html               Homepage: all translated text and FAQ answers
contact/index.html       Contact page and form
dashboard/index.html     English monitoring/simulation dashboard
styles.css               Shared homepage/contact appearance and responsiveness
script.js                Mobile menu, team animation controls, email draft form
assets/                  Local images, font, and English SVG charts
.nojekyll                Treat the repository as a static website
ASSET-NOTES.md           Image translations and provenance
```

The code is ordinary, readable HTML/CSS/JavaScript. Text in the timeline is HTML. Text and data in `assets/dust-distance.svg` and `assets/dust-figures.svg` can be edited directly in a text editor.

## Contact form

The supplied address, **enatmyrz@gmail.com**, is used for every contact link and the form. The template phone number and example email addresses have been removed.

The form validates required fields and opens the visitor's configured email application with a prepared message. **It does not send mail automatically and does not store submissions.** The visitor must press Send in their email application. The page says this explicitly and also provides a direct email link.

To receive submissions directly from the webpage later, connect a form service or your own server endpoint and replace the submit handler in `script.js`. GitHub Pages alone does not provide a form-processing backend. The location and office hours follow the source page; edit them in `contact/index.html` if needed.

## Dashboard

Demo buttons open the included `dashboard/` page. Its map layers, animated rovers, logs, metrics, and chat behavior are retained. The existing AI proxy URL remains configured in `dashboard/index.html`; if that service is unavailable, its existing local answer fallback is used. External Google Fonts are also retained on the dashboard. The two recreated Framer pages use a bundled local font.

## Translation and design notes

- Translated the page headings, descriptions, team statements, FAQ answers, form text, map labels, timeline, chart text, and the Russian logo tagline.
- Preserved the original chart values and dates. The source uses 75 million tonnes in the headline and approximately 100 million tonnes in the separate dust-and-salt graphic; both values are retained in their original contexts.
- The annual graphic's bars remain illustrative because the original does not supply exact values for each decade.
- Original photographs and English technology graphics are included. The regional map and logo were localized with the built-in image tool; see `ASSET-NOTES.md`.
- Rebuilt mobile navigation and FAQ with lightweight JavaScript and native HTML. Team statements are readable with reduced motion and have a pause control.
- Removed Framer editor UI, template metadata, and empty footer links. Retained the original template copyright attribution.

## Preview on your computer

From this folder, run `python -m http.server 8000` if Python is installed, then open `http://localhost:8000/`. This is only for preview; GitHub Pages does not need Python.

## Verification

The delivery was checked in Chrome using the packaged files, including a simulated repository subpath. The checks cover English text, asset and internal link resolution, mobile navigation, FAQ answers, team animation controls, form validation, and email-draft encoding. No test email was sent. The existing dashboard API was tested with mocked responses in the earlier dashboard task; live service availability is not guaranteed by this package.

The environment could not expose its local preview server, so browser checks loaded the packaged files through request interception. GitHub publication itself has not been performed.
