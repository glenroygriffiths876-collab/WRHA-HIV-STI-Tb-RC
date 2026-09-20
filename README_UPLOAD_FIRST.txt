WRHA MANUAL 404 FIX
====================

UPLOAD THESE TWO FILES OVER THE EXISTING GITHUB PAGES REPOSITORY ROOT:
1. index.html
2. sw.js

Do NOT rename index.html.

What this patch changes:
- Manual cards no longer use the old local manuals/... iframe path.
- The manual cover/title opens the actual source document.
- "Open Actual Manual" opens the actual source document.
- Gia "Open source" opens the actual source document.
- The old PDF viewer is bypassed for manual opening.
- Service worker is replaced with a network-first navigation strategy so the old cached index is cleared.

Manual sources:
- PrEP Handbook 2023: official HSTU PDF.
- STI Handbook 2026: actual shared source file used by the National Programme Resource Centre.
- TB Guidelines: actual shared source file used by the National Programme Resource Centre.
- PMTCT 2020: official HSTU PDF.

Keep the repository's existing assets/data/covers files. This is an OVERLAY patch, not a delete-and-rebuild package.
