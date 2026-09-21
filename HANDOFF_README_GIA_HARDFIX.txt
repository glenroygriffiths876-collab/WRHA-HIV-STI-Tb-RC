WRHA HIV/STI/TB RESOURCE CENTRE — GIA HARD CACHE FIX
Date: 20 Sep 2026

This build fixes the old Gia avatar continuing to appear on phones.
- The supplied new Gia portrait is embedded directly inside index.html for the floating bubble and assistant header.
- The new avatar can no longer be replaced by a stale cached gia-avatar.svg once the new HTML loads.
- Service worker cache was renamed and navigation changed to network-first.
- Build marker: 20260920-gia-hardfix-f

Deploy ALL files, especially index.html and sw.js.
If the installed PWA is currently open, close it completely and reopen after deployment. If Android still shows the old already-installed build, remove the old installed app/shortcut once and install again.
