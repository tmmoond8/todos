import { html } from "lit-html";

import LitRender from "../libs/litRender";

import "./todoInput";
import "./todoList";

class TodoApp extends LitRender(HTMLElement) {
  constructor(name) {
    super();
    this.attachShadow({ mode: "open" });
    this.invalidate();
  }

  render() {
    return html`
      <style>
        host: {
          display: block;
        }
        section {
          background: #fff;
          margin: 130px 0 40px 0;
          position: relative;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
            0 25px 50px 0 rgba(0, 0, 0, 0.1);
        }
      </style>
      <section>
        <todo-input></todo-input>
        <todo-list></todo-list>
      </section>
    `;
  }
}

customElements.define("todo-app", TodoApp);
