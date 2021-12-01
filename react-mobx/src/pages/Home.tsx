import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import stores from "../stores";

export default observer(function Home() {
  const { todoStore } = stores;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const addButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div className="App">
      <main>
        <h1>Today</h1>
        <Link to="/done">완료된 아이템 목록</Link>
        <div>
          <button
            ref={addButtonRef}
            onClick={() => {
              if (inputRef.current) {
                todoStore.addTodo({
                  createdAt: new Date().toISOString(),
                  content: inputRef.current.value,
                });
                inputRef.current.value = "";
              }
            }}
          >
            add
          </button>
          <input
            ref={inputRef}
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter" && addButtonRef.current) {
                addButtonRef.current.click();
              }
            }}
          />
        </div>
        {todoStore && (
          <ol className="TODO-List">
            {todoStore.todos.map(({ content, id, completed }) => (
              <li key={id!}>
                <input
                  type="checkbox"
                  id={id}
                  checked={completed}
                  onChange={(e) => {
                    todoStore.toggleDone(id!);
                  }}
                />
                <label htmlFor={id}>
                  {completed ? <del>{content}</del> : content}
                </label>
              </li>
            ))}
          </ol>
        )}
      </main>
    </div>
  );
});
