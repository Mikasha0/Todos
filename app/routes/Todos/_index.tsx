import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import { db } from "~/utils/db.server";

export const loader = async () => {
  const count = await db.todo.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomTodo] = await db.todo.findMany({
    take: 1,
    skip: randomRowNumber,
  });
  return json({ randomTodo });
};

export default function JokesIndexRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <p>Here's a random joke:</p>
      <p>{data.randomTodo.todos}</p>
      <Link to={data.randomTodo.id}>
        "{data.randomTodo.title}"
      </Link>
    </div>
  );
}
