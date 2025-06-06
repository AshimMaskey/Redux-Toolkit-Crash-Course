import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
