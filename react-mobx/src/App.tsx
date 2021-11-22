import React from "react";
import { observer } from "mobx-react-lite";
import stores from "./stores";
import "./App.css";

function App() {
  const { todayStore } = stores;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const addButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div className="App">
      <header className="App-Header">
        React + Mobx를 사용한 Todo App 코드 입니다.
      </header>
      <main>
        <h1>Today</h1>
        <div>
          <button
            ref={addButtonRef}
            onClick={() => {
              if (inputRef.current) {
                todayStore.addTodo({
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
        {todayStore && (
          <ol className="TODO-List">
            {todayStore.todos.map(({ content, id, completed }) => (
              <li key={id!}>
                <input
                  type="checkbox"
                  id={id}
                  checked={completed}
                  onChange={(e) => {
                    todayStore.toggleDone(id!);
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
}

export default observer(App);
