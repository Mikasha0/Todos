import { db } from "~/utils/db.server";
import { redirect } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const title = form.get("title");
  const todo = form.get("todo");

  if (typeof title !== "string" || typeof todo !== "string") {
    throw new Error(`The form was not submitted correctly. Please make sure that you have filled out all fields with the correct type of value, and try again.`);
  }
  
  const fields = { title, todos: todo };

  const todos = await db.todo.create({ data: fields});
  return redirect(`/Todos/${todos.id}`);
};

export default function NewTodoRoute() {
    return (
      <div>
        <p>Add your own Todos Here</p>
        <form method="post">
          <div>
            <label>
              Title: <input type="text" name="title" />
            </label>
          </div>
          <div>
            <label>
              Todo: <textarea name="todo" />
            </label>
          </div>
          <div>
            <button type="submit" className="button">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
  