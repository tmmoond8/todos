import { html } from "lit-html";
import store from "../libs/store";

import LitRender from "../libs/litRender";

class TodoItem extends LitRender(HTMLElement) {
  constructor(name) {
    super();
    this.attachShadow({ mode: "open" });
    this.invalidate(true);
    this._store = store;

    this._onClick = this._onClick.bind(this);
  }

  connectedCallback() {
    const root = this.shadowRoot;
    // FIXME 예제에는 이 시점에 shadowDom이 그려진다고 했는데, 왜인지 shadow dom이 없음
    setTimeout(() => {
      const label = root.querySelector("label");
      if (label) {
        console.log("add listener");
        label.addEventListener("click", this._onClick);
      }
      this.invalidate();
    }, 300);
  }

  disconnectedCallback() {
    const root = this.shadowRoot;
    const label = root.querySelector("label");
    label.removeEventListener("click", this._onClick);
  }

  set todo(todo) {
    this._todo = todo;
    this.invalidate();
  }

  get todo() {
    return this._todo || null;
  }

  _onClick(event) {
    if (event.pointerId === 1) {
      this._store.handler.toggle(this.todo.id);
    }
    this.invalidate();
  }

  render() {
    const todo = this.todo;
    console.log("todo.completed", todo.completed);

    if (!todo) html``;

    const renderCheckbox = () => {
      return todo.completed
        ? html`<input id=${todo.id} type="checkbox" checked />`
        : html`<input id=${todo.id} type="checkbox" />`;
    };

    return html`
      <style>
        host: {
          display: block;
        }
      </style>
      <li>
        <label for=${todo.id} class=${todo.completed ? "done" : ""}
          >${renderCheckbox()}${todo.content}</label
        >
      </li>
    `;
  }
}

customElements.define("todo-item", TodoItem);
