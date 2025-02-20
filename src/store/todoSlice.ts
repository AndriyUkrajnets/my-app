import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, Filter } from "../types/todoTypes";

const loadTodosFromLocalStorage = (): Todo[] => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

type TodoState = {
  todos: Todo[];
  filter: Filter;
};

const initialState: TodoState = {
  todos: loadTodosFromLocalStorage(),
  filter: "ALL",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    removeTodos: (state, action: PayloadAction<number[]>) => {
      state.todos = state.todos.filter((t) => !action.payload.includes(t.id));
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  removeTodos,
  setFilter,
  editTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
