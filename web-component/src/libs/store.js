import createStore from "redux-zero";

const initialState = {
  route: "",
  todoList: [
    {
      id: "1123213213213",
      content: "웹 컴포넌트는 코드량이 많아서..",
      completed: false,
    },
  ],
};
const store = createStore(initialState);

function actionCreator(action) {
  return function () {
    let state = store.getState();
    state = action(state, ...arguments);
    store.setState(state);
  };
}

export const handler = {
  route: actionCreator((state, route) => {
    state.route = route;

    return state;
  }),
  add: actionCreator((state, todo) => {
    state.todoList.push({
      content: todo,
      completed: false,
      id: (Math.random() * 123).toString(32).split(".")[1],
    });

    return state;
  }),
  toggle: actionCreator((state, id) => {
    const taget = state.todoList.find((todo) => todo.id === id);
    if (taget) {
      taget.completed = !taget.completed;
    }
    return state;
  }),
};

export default {
  ...store.getState(),
  handler,
};
