import { writable } from "svelte/store";

const initialValues = [
  { id: "1231313", content: "스벨트 카운팅", completed: false },
];

export const todos = writable(initialValues, (set) => {
  console.log("got a subscriber!!");
  return () => console.log("unsubscribe");
});

export function addTodo(content) {
  todos.update((todos) => {
    todos.push({
      id: (Math.random() * 123).toString(32).split(".")[1],
      content,
      completed: false,
    });
    return todos;
  });
}

export function toggleTodo(index) {
  console.log("toggle", index);
  todos.update((todos) => {
    todos[index].completed = !todos[index].completed;
    return todos;
  });
}
