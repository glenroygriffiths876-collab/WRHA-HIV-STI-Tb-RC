# WRHA HIV/STI/TB Resource Center

GitHub Pages-ready static PWA built from the supplied master brief.

## Core files
- `index.html` — app shell, viewer, service finder, Gia interface
- `manifest.webmanifest` — PWA manifest
- `sw.js` — offline shell + runtime caching
- `manuals/` — exact four supplied Drive PDFs
- `data/knowledge.json` — page-level text index generated from those PDFs + source-grounded quick-reference cards
- `data/services.json` — Western Region service locations seeded only from public HSTU/WRHA sources
- `assets/qr-partner.png` — exact anonymous partner form URL
- `assets/qr-hstu.png` — exact HSTU URL

## Important implementation notes
- Gia is fully client-side and does not call an external AI/API.
- Structured regimens are limited to evidence explicitly extracted from the loaded manuals. Other searches return concise source snippets and page links.
- The in-app PDF reader uses the browser's native PDF renderer inside the app, with a direct PDF fallback.
- The service worker pre-caches the application shell, resource index and all four bundled manuals so the installed toolkit can continue to read them offline after the initial successful cache install.
- External Google Form, HSTU, maps/directions and source links require internet.
- The personnel directory is intentionally limited to Mr. Stefan Miller, Regional Contact Investigator, (876) 784-8208.

## Deploy
Upload the CONTENTS of this folder to the root of a GitHub Pages repository. Keep paths and filenames unchanged. HTTPS is required for PWA installation/service workers (GitHub Pages provides HTTPS).

## Source URLs used for Find Services
- HSTU Treatment Sites: https://hstu.moh.gov.jm/treatment-sites-and-locations/
- HSTU PrEP Locations: https://hstu.moh.gov.jm/prep-locations-2/
- WRHA Hanover: https://www.wrha.gov.jm/health-facilities/hanover/
- WRHA St James: https://www.wrha.gov.jm/health-facilities/st-james/
- WRHA Trelawny: https://www.wrha.gov.jm/health-facilities/trelawny/
- WRHA Westmoreland: https://www.wrha.gov.jm/health-facilities/westmoreland/

## External links in the interface
- Official WRHA website: https://www.wrha.gov.jm/
- JASDIS Resource Centre: https://jasdis876.github.io/JASDIS-Resource-Center/#home


## v5 deployment resilience update
- WRHA logo, QR codes, Gia avatar and all four manual cover images are embedded directly in `index.html` so the live interface does not show broken images if asset paths are mis-deployed.
- Manual knowledge and service data remain embedded in the page with the JSON files retained for normal deployments.
- Find Services now includes a WRHA-branded Western Region parish selector and All services / HIV-STI / PrEP filters, while retaining verified source and directions links.
- Local asset folders and PWA files are still included for offline installation and maintainability.


## Credits
Made by Glenroy Griffiths, JP, BSc, MPH. Website enquiries and issue reporting are linked in the site footer to WhatsApp at 876-502-9756.
