# Cold Start Problem — AIED 2025 project page

This is a self-contained GitHub Pages project page designed to match the visual style of the MAML-KT project page.

## Publish at `/cold-start/`

1. Extract `cold-start-project-page.zip`.
2. Copy the **entire** `cold-start` folder into the root of the GitHub repository that publishes `https://indronil-prince.github.io/`.
3. Confirm the structure is:
   ```
   Indronil-Prince.github.io/
   ├── index.html
   ├── MAML-KT/
   │   └── index.html
   └── cold-start/
       ├── index.html
       └── assets/
           ├── style.css
           ├── script.js
           └── favicon.svg
   ```
4. Commit/push. Once GitHub Pages rebuilds, visit `https://indronil-prince.github.io/cold-start/`.

The MAML-KT link in the page points to `../MAML-KT/` because you confirmed that the capitalized route works. Change that href to `../maml-kt/` if your published folder actually uses lowercase.

## Included material

- Official publication: https://link.springer.com/chapter/10.1007/978-3-031-98459-4_30
- Open preprint: https://arxiv.org/abs/2505.21517
- BibTeX with one-click copy
- Responsive HTML/CSS and a custom vector research diagram

No build tool is needed.
