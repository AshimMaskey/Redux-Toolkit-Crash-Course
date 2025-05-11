import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos.length > 0 && (
        <div className="mt-10 max-w-2xl border-2 border-gray-200 p-4 rounded-lg mx-auto">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center border-b-2 border-gray-200 py-2"
            >
              <p className="text-xl">{todo.text}</p>
              <button
                className="border-2 text-lg bg-red-500 rounded-lg py-1 px-4 text-white"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Todos;
