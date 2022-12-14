import React, { Component } from "react";

const Item = ({ title, onRemoveTodo }) => {
  return (
    <li>
      {title} <button onClick={onRemoveTodo}>Borrar</button>
    </li>
  );
};

export default Item;
