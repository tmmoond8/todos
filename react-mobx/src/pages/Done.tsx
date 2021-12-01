import React from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import stores from "../stores";

export default observer(function DONE() {
  const { todoStore } = stores;
  const navigator = useNavigate();

  return (
    <div className="App">
      <main>
        <h1>완료된 아이템</h1>
        <button onClick={() => navigator(-1)}>뒤로 가기</button>
        {todoStore && (
          <ol className="TODO-List">
            {todoStore.getDones().map(({ content, id, completed }) => (
              <li key={id!}>
                <label htmlFor={id}>{content}</label>
              </li>
            ))}
          </ol>
        )}
      </main>
    </div>
  );
});
