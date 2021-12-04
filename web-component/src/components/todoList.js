import { html } from "lit-html";

import LitRender from "../libs/litRender";
import store from "../libs/store";

import "./todoItem";

class TodoList extends LitRender(HTMLElement) {
  constructor(name) {
    super();
    this.attachShadow({ mode: "open" });
    this.invalidate();
  }

  render() {
    const { todoList } = store;

    console.log("todos", todoList);

    const renderItems = () =>
      todoList.map((todo) => html`<todo-item .todo=${todo}></todo-item>`);

    return html`
      <style>
        host: {
          display: block;
        }

        ol {
          max-width: 400px;
          list-style: none;
          margin: 32px auto 32px auto;
          padding: 0;
        }
      </style>
      <ol>
        ${renderItems()}
      </ol>
    `;
  }
}

customElements.define("todo-list", TodoList);
