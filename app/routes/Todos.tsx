import type { LinksFunction } from "@remix-run/node";
import { Outlet, Link } from "@remix-run/react";

import stylesUrl from "~/styles/todos.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function todosRoute() {
  return (
    <div className="todos-layout">
      <header className="todos-header">
        <div className="container">
          <h1 className="home-link">
            <Link
              to="/"
              title="Remix todos"
              aria-label="Remix todos"
            >
              <span className="logo">🤪</span>
              <span className="logo-medium">T🤪D🤪S</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="todos-main">
        <div className="container">
          <div className="todos-list">
            <Link to=".">Get a random todo</Link>
            <p>Here are a few more todos to check out:</p>
            <ul>
              <li>
                <Link to="some-joke-id">Hippo</Link>
              </li>
            </ul>
            <Link to="newTodo" className="button">
              Add your own
            </Link>
          </div>
          <div className="todos-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
