import { useReducer } from "react";
import "./todouseReducer.css";

const actionType = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  DELETE_ALL_TODO: "DELETE_ALL_TODO",
};

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case actionType.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    case actionType.DELETE_ALL_TODO:
      return { ...state, todos: [] };
    default:
      return state;
  }
};

const TodoUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let input;
  const addTodo = () => {
    if (input.value.trim()) {
      dispatch({ type: actionType.ADD_TODO, payload: input.value });
      input.value = "";
    }
  };

  const deleteTodo = (index) => {
    dispatch({ type: actionType.DELETE_TODO, payload: index });
  };

  const deleteAllTodos = () => {
    dispatch({ type: actionType.DELETE_ALL_TODO });
  };

  return (
    <div className="todo-container">
      <form onSubmit={(e) => e.preventDefault()} className="todo-form">
        <label htmlFor="addtodo">Enter todo here: </label>
        <input
          type="text"
          id="addtodo"
          placeholder="list add here"
          ref={(node) => (input = node)}
        />
        <input type="button" value="Click here to add todo" onClick={addTodo} />
        <input
          type="button"
          value="Click here to delete all todos"
          onClick={deleteAllTodos}
        />
      </form>
      <ul className="todo-list">
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoUseReducer;
