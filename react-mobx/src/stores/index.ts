import TodoStore from "./TodoStore";

const stores = {
  todoStore: new TodoStore(),
} as const;

export default stores;
