import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function TodoForm(props) {
  const [todos, setTodos] = useState('');
  const api = "http://localhost:5000/api/v1/todos";

  const inputRef = useRef(null); // Ref Using

  useEffect(() => {
    inputRef.current.focus();
  });

  async function postTodos(e) {
    const newTodo = {
      name:todos,
    };
    e.preventDefault();
    await axios.post(api, newTodo);
    console.log(newTodo);
  }

  const handleChange = (e) => {
    setTodos(e.target.value);
  };



  return (
    <div>
      <form className="todo-form" onSubmit={postTodos}>
        {props.edit ? (
          <>
            <input
              placeholder="Update todo"
              value={todos}
              onChange={handleChange}
              name="text"
              ref={inputRef}
              className="todo-input edit"
            />
            <button onClick={postTodos} className="todo-button edit">
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder="Add a todo"
              value={todos}
              onChange={handleChange}
              name="text"
              className="todo-input"
              ref={inputRef}
            />
            <button onClick={postTodos} className="todo-button">
              Add todo
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
