import React, { useState, useEffect } from 'react';
import ToDoItem from '../todo-item/ToDoItem.js';
import './style.css';

export default function ToDoList(props) {
  const todos = props.todos;

  const todoClickHandler = (todo) => {
    props.setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  return (
    <div>
      <label className={'list-label'}>
        List of Todos - {todos.filter((todo) => !todo.completed).length} pending
      </label>
      <ul className={'todo-container'}>
        {todos.map((todo) => {
          return (
            <ToDoItem
              title={todo.todo}
              id={todo.id}
              key={`key-${todo.id}`}
              completed={todo.completed}
              onChange={() => todoClickHandler(todo)}
            />
          );
        })}
      </ul>
    </div>
  );
}
