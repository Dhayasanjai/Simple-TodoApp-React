import React, { useState } from 'react';
import './App.css';
import InputTodo from './InputTodo';
import TodoItem from './TodoItem';
function App() {
  const DUMMY_TODO = [
    {
      text: 'Enter any Text To add Todo',
      id: Math.random().toString(),
    },
  ];
  const [todo, setTodo] = useState(DUMMY_TODO);
  const storingTodo = (enteredTodo) => {
    setTodo((prevTodo) => {
      const updatedTodo = [...prevTodo];
      updatedTodo.unshift({ text: enteredTodo, id: Math.random().toString() });
      return updatedTodo;
    });
  };
  const deleteHandler = (id) => {
    setTodo((prevTodo) => {
      const filteredTodo = prevTodo.filter((todo) => todo.id !== id);
      return filteredTodo;
    });
  };
  let content = (
    <p className="no-content">NO More content May be add some one!</p>
  );
  if (todo.length > 0) {
    content = todo.map((stodo) => (
      <TodoItem
        todo={stodo.text}
        key={stodo.id}
        id={stodo.id}
        onDelete={deleteHandler}
      />
    ));
  }
  return (
    <div className="todo">
      <InputTodo gettingTodo={storingTodo} />
      {content}
    </div>
  );
}

export default App;
