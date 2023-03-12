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
  