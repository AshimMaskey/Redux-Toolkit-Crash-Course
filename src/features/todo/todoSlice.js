import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      console.log(action.payload);
      const todoId = action.payload;
      const filteredTodo = state.todos.filter((todo) => todo.id !== todoId);
      state.todos = filteredTodo;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;

      const todoIndex = state.todos.findIndex((todo) => todo.id === id);

      if (todoIndex !== -1) {
        state.todos[todoIndex].text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
