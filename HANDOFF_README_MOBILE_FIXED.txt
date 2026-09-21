WRHA HIV/STI/TB RESOURCE CENTER — MOBILE LAYOUT FIX
Date: 20 September 2026

USE
- Deploy the updated index.html from this package over the current repository index.html.

PRIMARY PHONE BUG FIXED
- The new nationwide services module used the class .services-grid.
- The older responsive CSS only collapsed .service-grid (singular), so the services module stayed in a desktop two-column layout on phones.
- The updated file explicitly collapses .services-grid to one column on mobile/tablet widths and prevents horizontal squeezing/overflow.

PHONE UX IMPROVEMENTS
- Map card and blue Service Access card now stack vertically on phones.
- “Select a parish” and the All health centres / HIV-STI / PrEP controls receive a dedicated mobile layout.
- Parish map height and pins are sized for phone screens.
- Parish selector and search box stack vertically.
- Location cards become one column with larger readable text.
- The Gia launcher becomes a compact circular mobile button so it does not cover the map/content.
- Stronger overflow protection added around the Services section.
- Mobile text sizing in the Services and Programme Targets sections was increased.

PARISH-FIRST DIRECTORY BEHAVIOUR
- No facility cards are shown before a parish is selected.
- Default message: “Select a parish on the map or from the menu to view locations.”
- Search is disabled until a parish is selected.
- Changing All health centres / HIV-STI / PrEP resets the directory to parish selection.

PROGRAMME TARGETS
- Target cards were shortened to the concise wording specified in the 20 Sep handoff.

CACHE / PWA
- The service-worker registration query was bumped to wrha-mobilefix-20260920b to encourage browsers to pick up the corrected deployment instead of continuing to show a cached older index.

PRESERVED
- Manual direct-open links and source behaviour.
- Jamaica-wide services dataset/map/pins.
- HSTU and PrEP external links.
- Gia source-grounded clinical logic.
- Mobile bottom navigation.
- Footer and credits.

FILES
- index.html = corrected working version.
- index_BEFORE.html = prior handoff backup included in the original package.
- index_PRE_MOBILE_FIX.html = exact index immediately before this phone-layout patch.
