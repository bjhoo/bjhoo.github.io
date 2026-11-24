# Portfolio refresh package

This package contains the new one-page portfolio and its optimized, anonymized image samples. It does not contain the older resume PDF or original source documents.

## Install into the GitHub Desktop clone

1. Download and extract this ZIP.
2. In GitHub Desktop, select the `bjhoo.github.io` repository and switch to `portfolio-refresh`.
3. Choose **Repository → Show in Explorer** (Windows) or **Show in Finder** (Mac).
4. Copy this package's `index.html`, `robots.txt`, `sitemap.xml`, and `assets` folder into the repository root. Allow `index.html`, `robots.txt`, and the files under `assets/portfolio` to be replaced. Keep the repository's existing `CNAME` and `.github` folder.
5. Double-click the copied `index.html` to preview it locally. The Q&A and images work without a server.
6. In GitHub Desktop, review the changed files, commit on `portfolio-refresh`, then **Push origin**. The branch does not publish the live site; the existing Pages workflow runs from `master`.

## What is in this version

- Mobile-first layout with breakpoints for narrow phones, small phones, tablet, desktop, and short landscape screens.
- A single, clear email CTA plus LinkedIn and email links.
- Browser-only portfolio Q&A. Questions are not sent to a model or server; unsupported or sensitive questions route to Ben.
- Search description, canonical URL, Open Graph basics, Person structured data, `robots.txt`, and sitemap.
- Public image copies with visible employer/confidentiality footer marks removed. Raw source documents are not included.

This package has static and content checks. A browser screenshot test could not run in the build environment, so please review the local preview at phone, tablet, and desktop widths before merging it to `master`.
