<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## This project

The MOTD (`/motd`) and banner (`/host`) pages of the Lefordianos L4D2 server; deployed on Vercel by the
owner (rats4final). The game shows them in its old built-in browser: keep them plain HTML/CSS (no
Tailwind, no web fonts, hex colors), static, readable without JavaScript. Docs are bilingual
(`README.md` + `README.es.md`). The server side (plugins, `mymotd.txt`/`myhost.txt`) is in
`../lefordianos_plugins` and `../l4d2-server`. **The game doesn't load this site**: its browser can't
open https and Vercel forces it, so the server serves a plain-HTML copy (`../l4d2-server/web/`) over
http; keep the two texts in sync. No AI co-author trailers in commits.
