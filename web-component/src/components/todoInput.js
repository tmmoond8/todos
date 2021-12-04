import { html } from "lit-html";

import LitRender from "../libs/litRender";

class TodoInput extends LitRender(HTMLElement) {
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
        h2 {
          text-align: center;
        }
        .input-form {
          display: flex;
          justify-content: center;
        }
      </style>
      <header>
        <h2>today</h2>
        <div class="input-form">
          <input autofocus />
          <button>add</button>
        </div>
      </header>
    `;
  }
}

customElements.define("todo-input", TodoInput);
