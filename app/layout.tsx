import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lefordianos",
  description: "MOTD y banner del servidor Lefordianos de Left 4 Dead 2",
};

// System fonts and plain CSS on purpose: the game shows these pages in its own old built-in browser.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
