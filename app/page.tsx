import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <h1 className="brand">Lefordianos</h1>
      <p className="tagline">Páginas que muestra el servidor de Left 4 Dead 2 al entrar.</p>
      <ul>
        <li>
          <Link href="/motd">/motd</Link>: el mensaje del día (motdfile).
        </li>
        <li>
          <Link href="/host">/host</Link>: el banner del servidor (hostfile).
        </li>
      </ul>
    </main>
  );
}
