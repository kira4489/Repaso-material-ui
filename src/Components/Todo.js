import React, { useState, useContext, useReducer } from "react";
import { ContextTodo } from "../State/context";
import todosReducer from '../State/reducer';

const Todo = () => {
  const context = useContext(ContextTodo); //almacenando el context los valores CONTEXTODO
  const [text, setText] = useState("");

  return (
    <div>
      <h1>TODO</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => context.saveTodo(text)}>Add</button>
      <ul>
        {context.todos?.map((todo) => (
          <li key={todo.id}>{todo.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
