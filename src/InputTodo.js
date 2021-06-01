import React, { useState } from 'react';
import './InputTodo.css';
const InputTodo = (props) => {
  const [enteredText, setEnteredText] = useState('');

  const inputHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const saveTodo = (event) => {
    event.preventDefault();
    props.gettingTodo(enteredText);
  };

  return (
    <form onSubmit={saveTodo} className="input-todo">
      <div className="course">
        <p>Simple Todo</p>
      </div>
      <input onChange={inputHandler} type="text" />
      <button type="submit" className="add-goal-btn">
        Add Todo
      </button>
    </form>
  );
};
export default InputTodo;
