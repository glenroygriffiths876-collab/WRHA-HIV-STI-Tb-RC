WRHA HIV/STI/TB RESOURCE CENTRE — BRANDING / ICON UPDATE
Date: 20 Sep 2026

What was added/updated:
1. Added updated WRHA logo with “HIV/STI/TB Resource Centre” underneath as wrha-logo.png
2. Updated browser-tab branding and title to “Resource Centre”
3. Added favicon files: favicon-16.png, favicon-32.png, favicon.ico
4. Added install/home-screen icons: apple-touch-icon.png, icon-192.png, icon-512.png, maskable-512.png
5. Added manifest.webmanifest so the installed app uses the WRHA branded icon
6. Added sw.js and bumped the service-worker version to help force refresh after deployment
7. Updated visible site branding text from Center to Centre in the main branding areas

Deploy notes:
- Upload/replace ALL files in this package to the GitHub Pages repo folder.
- After deployment, refresh the site once, then if the old icon still shows on the phone, uninstall the old shortcut/app and install again so the new manifest icon is used.
- If the browser keeps an old cached version, clear site storage or do a hard refresh.
