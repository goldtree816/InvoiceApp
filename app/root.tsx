import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ([
  { charset: "utf-8" },
  { title: "Aura Wear" },
  { name: "viewport", content: "width=device-width,initial-scale=1" }
]);

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {/* Header */}
        <header>
          <h1>Aura Wear</h1>
        </header>

        {/* Page content */}
        <Outlet />

        {/* Footer */}
        <footer style={{ marginTop: "2rem" }}>
          <p>&copy; {new Date().getFullYear()} Aura Wear. All rights reserved.</p>
        </footer>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
