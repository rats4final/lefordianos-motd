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

## Connect it to the server

After deploying on Vercel (e.g. `https://lefordianos-motd.vercel.app`), on the server, in the game
folder `left4dead2/`:

- `mymotd.txt`: one line, `https://<your domain>/motd`
- `myhost.txt`: one line, `https://<your domain>/host`

The server's `cfg/server.cfg` already points to them (`motdfile "mymotd.txt"`,
`hostfile "myhost.txt"`). Restart the server or change map to see it.
