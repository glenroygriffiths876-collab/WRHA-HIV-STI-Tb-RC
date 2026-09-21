WRHA HIV/STI/TB RESOURCE CENTER — CONTINUATION PACKAGE
Date: 20 September 2026

CURRENT WORKING BASE
- Use index.html in this package as the working base.
- This is the version where the JASDIS-style nationwide Find Services module was successfully added.
- The four manuals are linked to local repository PDFs so they open directly:
  * prep-handbook-2023.pdf
  * sti-handbook-2026.pdf
  * tuberculosis-manual.pdf
  * pmtct-manual.pdf
- Old broken Google Drive/manual paths were removed in the successful patch.

IMPORTANT: THESE LATEST REQUESTS ARE STILL PENDING AND SHOULD BE APPLIED NEXT
1. FIND SERVICES
   - Do NOT show facility/location cards until the user selects a parish.
   - Default state should say: "Select a parish on the map or from the menu to view locations."
   - Search should remain disabled until a parish is selected.
   - Keep the JASDIS-style Jamaica map, parish pins/counts, All health centres / HIV-STI / PrEP filters, Google directions, MOHW PrEP appointments and HSTU directory.

2. GIA
   - Make Gia LOOK exactly like the Gia interface in the JASDIS Resource Centre deployment.
   - Reuse the JASDIS Gia visual language, launcher, drawer layout, header, mobile back bar, shortcuts and avatar treatment.
   - Keep WRHA branding/text and keep WRHA source-grounded clinical behaviour.

3. PROGRAMME TARGETS SECTION
   - Current section is too wordy.
   - Make it simpler and to the point.
   - Suggested concise content:
     * ≥90% — STI / FP HIV testing — Eligible clients tested by Month 6. Month 3 ≥75%; then progress toward 100%.
     * ≥80% — Hospital PITC — Eligible admissions tested by Month 6. Track missed opportunities.
     * STI — Clinic documentation — Record Facility + Clinic correctly. Use “STI” for STI clinic visits.
     * 2026 — STI management — Follow the STI Handbook. Include BV and candidiasis/yeast where applicable.

4. FONT / READABILITY
   - Increase font sizes throughout the Resource Center, including desktop and mobile.
   - Keep the site premium, clean and uncluttered.

5. DO NOT BREAK
   - Manuals must remain one-click direct-open PDFs.
   - Keep the JASDIS-style services map and nationwide dataset.
   - Keep programme targets already verified.
   - Preserve QR features, PrEP/HSTU, footer credits, PWA/offline behaviour and Gia source grounding.

SOURCE REPOSITORIES
WRHA: https://github.com/glenroygriffiths876-collab/WRHA-HIV-STI-Tb-RC
JASDIS: https://github.com/jasdis876/JASDIS-Resource-Center

A prior attempt to apply the four pending UI refinements through a GitHub Action failed before changing index.html. So start from THIS package and apply the pending refinements cleanly.
