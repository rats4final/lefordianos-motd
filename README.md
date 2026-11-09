[Español](README.es.md)

# lefordianos-motd

The pages the **Lefordianos** Left 4 Dead 2 server shows when you join: the message of the day
(`/motd`) and the server banner (`/host`). A small [Next.js](https://nextjs.org) site, meant to be
deployed on Vercel.

The plugins and config of the server live in
[lefordianos_plugins](https://github.com/rats4final/lefordianos_plugins).

## Pages

| Path | What | Server file |
|---|---|---|
| `/motd` | Message of the day: commands (`!menu`, `!votes`...) and rules | `motdfile` |
| `/host` | Banner strip with the server's name | `hostfile` |
| `/` | Index with links to both | - |

The game shows them in its own **old built-in browser**, so the pages are plain HTML and CSS: no
Tailwind, no web fonts, hex colors, and they're prerendered (they show even if the browser can't run
the JavaScript).

## Change the text

- Commands and rules: `app/motd/page.tsx` (the `commands` list at the top).
- Banner: `app/host/page.tsx`. Colors and sizes: `app/globals.css`.

```bash
npm install
npm run dev        # http://localhost:3000/motd
npm run build      # checks it builds like Vercel will
```

## The game doesn't use this site

The game's built-in browser **can't open `https://` pages**, and Vercel always sends `http` visitors
to `https`. So the server shows a plain-HTML copy of these pages that it serves itself over `http`
(`web/` in the private server repo, port 27080). This site stays as the public version for normal
browsers (https://lefordianos-motd.vercel.app/motd). If you change the commands or rules, change both.

To use this site in the game you'd need a host that answers plain `http` (e.g. your own domain behind
Cloudflare with "Always Use HTTPS" off).
