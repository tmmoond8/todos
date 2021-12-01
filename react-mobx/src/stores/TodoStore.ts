import { makeAutoObservable } from "mobx";

interface TODO {
  id?: string;
  createdAt: string;
  content: string;
  completed?: boolean;
}

class TodoStore {
  todos: TODO[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo: TODO) => {
    this.todos = this.todos.concat({
      ...todo,
      completed: false,
      id: Math.random().toString(32).split(".")[1],
    });
  };

  toggleDone = (id: string) => {
    const targetTodo = this.todos.find((todo) => todo.id === id);
    if (targetTodo) {
      targetTodo.completed = !targetTodo?.completed;
      this.todos = [...this.todos];
    } else {
      console.error("not found :", id);
    }
  };

  getDones = () => {
    return this.todos.filter(({ completed }) => completed);
  };
}

export default TodoStore;
