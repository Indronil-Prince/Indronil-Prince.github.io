# Publishing MAML-KT at `/maml-kt/`

This folder is a stand-alone static research project page. It requires no framework, build tools, or dependencies.

## Option A: publish from your existing GitHub Pages repository

1. Open your repository: https://github.com/Indronil-Prince/Indronil-Prince.github.io
2. In the root of that repository, create a folder named `maml-kt`.
3. Copy **the contents of this folder** into that folder, preserving `index.html` and `assets/`.
4. Commit to the branch used by GitHub Pages (usually `main`).
5. Confirm the repository's **Settings → Pages** source is set to the correct branch and root folder.
6. Visit https://indronil-prince.github.io/maml-kt/

No changes to the homepage are required. The page styles and scripts are isolated inside `maml-kt/assets`.

## Option B: Git CLI

From your checked-out GitHub Pages repository:

```bash
mkdir -p maml-kt
# Copy index.html, assets/, and optionally DEPLOY.md into maml-kt/
git add maml-kt
git commit -m "Add MAML-KT research project page"
git push
```

## Notes

- The published paper link is https://link.springer.com/chapter/10.1007/978-3-032-29760-0_16
- The preprint link is https://arxiv.org/abs/2603.00137
- Add a code repository button when you have a confirmed URL for the MAML-KT source code.
- The diagrams are intentionally schematic; no fabricated performance measurements are shown.
- The page's title, publication metadata, and summary are based on the Springer listing.
- If the root website is redirecting to your GitHub profile, review GitHub Pages settings and any index.html redirect before publishing.
