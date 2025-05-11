import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import Todos from "./Todos";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };
  return (
    <>
      <div className="mt-10 max-w-2xl border-2 border-gray-200 p-4 rounded-lg mx-auto">
        <form onSubmit={handleFormSubmit}>
          <label className="text-2xl" htmlFor="todo">
            Add Todo
          </label>
          <input
            className="border-2 mb-2 border-gray-200 rounded-lg p-2 w-full mt-2"
            type="text"
            placeholder="Add a new todo"
            id="todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="border-2 text-lg bg-green-500 rounded-lg py-1 px-4 text-white"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
      <Todos />
    </>
  );
};

export default AddTodo;
