import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos.todos));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
