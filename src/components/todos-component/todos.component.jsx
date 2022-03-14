import React, { Component } from "react";
import withData from "../hoc/withData";
import "./todos.styles.scss";
const ToDos = ({ data }) => (
  <>
    <div className="todos-container">
      <h2>ToDos</h2>
      {data.slice(0, 11).map((todo) => (
        <div className="todo-item">
          <h3 className="todo-title">
            {todo.title.length < 20 ? todo.title : todo.title.slice(0, 21)}
          </h3>
        </div>
      ))}
    </div>
  </>
);

export default withData(ToDos);
