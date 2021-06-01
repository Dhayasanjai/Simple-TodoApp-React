import React from 'react';
import './TodoItem.css';
const TodoList = (props) => {
  let id = props.id;
  const deleteClick = () => {
    props.onDelete(props.id);
  };
  return (
    <div onClick={deleteClick} className={'texts ' + id}>
      <p>{props.todo}</p>
    </div>
  );
};
export default TodoList;
