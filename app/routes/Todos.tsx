import { Outlet } from "@remix-run/react";

export default function TodosRoute() {
  return (
    <div>
      <h1>T🤪D🤪S</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
