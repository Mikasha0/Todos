import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";

export const loader = async ({ params }: LoaderArgs) => {
  const todo = await db.todo.findUnique({
    where: { id: params.todoId },
  });
  if (!todo) {
    throw new Error("Joke not found");
  }
  return json({ todo });
};

export default function JokeRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <p>Here's your todo:</p>
      <p>{data.todo.todos}</p>
      <Link to=".">{data.todo.title} Permalink</Link>
    </div>
  );
}
