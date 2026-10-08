import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lefordianos",
};

// The server's banner (hostfile): a short strip shown with the MOTD.
export default function Host() {
  return (
    <div className="banner">
      <div>
        <h1 className="brand">Lefordianos</h1>
        <p className="tagline">Versus vanilla+</p>
      </div>
      <div className="hint">
        !menu
        <br />
        !votes
      </div>
    </div>
  );
}
