import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ([
  { title: "Aura Wear - Home" },
  { name: "description", content: "Welcome to Aura Wear fashion store" }
]);

export default function Index() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Welcome to Aura Wear 👗</h1>
      <p>This is your homepage. Start building your store here!</p>
    </main>
  );
}
