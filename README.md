# Detailed research project pages — publications 1–3

Three self-contained static HTML pages styled consistently with the earlier *publication-project-pages-detailed* bundle.

## Repository installation

Copy the directories `bangla-digit-recognition/`, `diabetic-retinopathy/`, `stock-price-prediction/` and the `assets/` folder into the root of `indronil-prince.github.io`.

If `assets/style.css` already exists from the earlier four-page bundle, you may replace it with the stylesheet in this ZIP: it contains the same base style and a few extra components for the new pages. Existing pages retain their styling. Do not delete your other project directories.

Published routes:
- https://indronil-prince.github.io/bangla-digit-recognition/
- https://indronil-prince.github.io/diabetic-retinopathy/
- https://indronil-prince.github.io/stock-price-prediction/

Each page includes research overview, methodology, architecture/workflow visualization, reproduced numeric result tables (as HTML), discussion and BibTeX. Figures are illustrative reconstructions.

## Source references and notes

- Bangla CNN: https://doi.org/10.47577/technium.v18i.10243 — 31,130 original images, 155,650 augmented, 98.3% Ekush and 296/300 on extra samples. The paper does not clearly state whether augmentation occurs before/after the partition; the page flags that evaluation question.
- Diabetic retinopathy: https://www.researchgate.net/publication/353015320_Diabetic_Retinopathy_Classification_from_Retinal_Images_using_Machine_Learning_Approaches — 13,402 fundus images, 10,052 / 3,350 split, three classifier metrics from the original report. Later open access arXiv upload is https://arxiv.org/abs/2412.02265.
- Stock prediction: https://doi.org/10.1109/EICT48899.2019.9068850 — methods and MSE / MAPE values are from the original paper's Tables I–VIII. Clarified that same-day features vs lag-only statistical baselines differ in forecasting information.
