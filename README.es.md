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

## El juego no usa este sitio

El navegador interno del juego **no puede abrir páginas `https://`**, y Vercel siempre manda las visitas
de `http` a `https`. Por eso el servidor muestra una copia en HTML simple de estas páginas que sirve él
mismo por `http` (`web/` en el repo privado del servidor, puerto 27080). Este sitio queda como la versión
pública para navegadores normales (https://lefordianos-motd.vercel.app/motd). Si cambias los comandos o
las reglas, cambia los dos.

Para usar este sitio en el juego haría falta un hosting que conteste por `http` simple (p. ej. un dominio
propio detrás de Cloudflare con "Always Use HTTPS" apagado).
