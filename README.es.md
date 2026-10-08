[English](README.md)

# lefordianos-motd

Las páginas que muestra el servidor **Lefordianos** de Left 4 Dead 2 al entrar: el mensaje del día
(`/motd`) y el banner del servidor (`/host`). Un sitio chico de [Next.js](https://nextjs.org), para
subir a Vercel.

Los plugins y la configuración del servidor están en
[lefordianos_plugins](https://github.com/rats4final/lefordianos_plugins).

## Páginas

| Ruta | Qué | Archivo del servidor |
|---|---|---|
| `/motd` | Mensaje del día: comandos (`!menu`, `!votes`...) y reglas | `motdfile` |
| `/host` | Banner con el nombre del servidor | `hostfile` |
| `/` | Índice con enlaces a las dos | - |

El juego las muestra en su propio **navegador interno, que es viejo**, así que las páginas son HTML y
CSS simples: sin Tailwind, sin fuentes web, colores en hex, y vienen ya generadas (se ven aunque el
navegador no pueda correr el JavaScript).

## Cambiar el texto

- Comandos y reglas: `app/motd/page.tsx` (la lista `commands` arriba).
- Banner: `app/host/page.tsx`. Colores y tamaños: `app/globals.css`.

```bash
npm install
npm run dev        # http://localhost:3000/motd
npm run build      # revisa que compile como lo hará Vercel
```

## Conectarlo al servidor

Después de subirlo a Vercel (ej. `https://lefordianos-motd.vercel.app`), en el servidor, en la carpeta
del juego `left4dead2/`:

- `mymotd.txt`: una línea, `https://<tu dominio>/motd`
- `myhost.txt`: una línea, `https://<tu dominio>/host`

El `cfg/server.cfg` del servidor ya apunta a ellos (`motdfile "mymotd.txt"`,
`hostfile "myhost.txt"`). Reinicia el servidor o cambia de mapa para verlo.
