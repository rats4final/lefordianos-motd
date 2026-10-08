import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lefordianos - MOTD",
};

// What players type in chat. Keep in sync with the server's plugins (lefordianos_plugins).
const commands: [string, string, string][] = [
  ["!menu", "Todos los comandos en un menú", "Every command in one menu"],
  ["!votes", "Votar: mapa, campaña, equipos, expulsar, reglas, pausa", "Votes: map, campaign, teams, kick, rules, pause"],
  ["!teams", "Ver los equipos y cambiarte", "See the teams and switch"],
  ["!spec  !survivors  !infected", "Ir a espectadores o a un equipo", "Go to spectators or a team"],
  ["!wait", "Esperar a un amigo antes de salir del refugio", "Wait for a friend before leaving the saferoom"],
  ["!score", "Puntajes y cuánto vale este mapa", "Scores and what this map is worth"],
  ["!rank  !top", "Tu ranking y los mejores", "Your rank and the best players"],
  ["!next", "Qué campaña sigue", "Which campaign comes next"],
];

export default function Motd() {
  return (
    <main className="page">
      <h1 className="brand">Lefordianos</h1>
      <p className="tagline">
        Versus de siempre, con los arreglos de bugs y las comodidades de ZoneMod.
        <br />
        <span className="en">Classic versus, with ZoneMod&apos;s bug fixes and quality of life.</span>
      </p>

      <h2>Comandos</h2>
      <table className="commands">
        <tbody>
          {commands.map(([command, es, en]) => (
            <tr key={command}>
              <td>{command}</td>
              <td>
                {es}
                <br />
                <span className="en">{en}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Reglas</h2>
      <ul>
        <li>
          Respeto con todos. <span className="en">Be respectful.</span>
        </li>
        <li>
          Sin trampas: hay anticheat y los baneos de Steam se revisan.{" "}
          <span className="en">No cheating: anti-cheat is on and Steam bans are checked.</span>
        </li>
        <li>
          Sin griefing: los admins pueden devolver la vida, los objetos y hasta revivir a quien mataste.{" "}
          <span className="en">No griefing: admins can undo team damage, items and team kills.</span>
        </li>
        <li>
          Expulsar por voto pone un baneo corto, como en el juego normal.{" "}
          <span className="en">A kick vote comes with a short ban, like vanilla.</span>
        </li>
      </ul>

      <p className="footer">
        Plugins y configuración:{" "}
        <a href="https://github.com/rats4final/lefordianos_plugins">github.com/rats4final/lefordianos_plugins</a>
      </p>
    </main>
  );
}
