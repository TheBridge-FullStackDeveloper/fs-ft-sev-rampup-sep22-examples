import React from "react";
import Item from "./Item";
const List = ({ todos, onRemoveTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Item key={todo.id} {...todo} onRemoveTodo={() => onRemoveTodo(todo)} />
      ))}
    </ul>
  );
};

export default List;
