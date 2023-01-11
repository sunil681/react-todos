import React from 'react';
import { useState, useEffect } from 'react';
import ToDoItem from '../todo-item/ToDoItem.js';
import './style.css';

export default function ToDoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((res) => setTodos(res.todos));
  }, []);

  return (
    <div>
      <ul className={'todo-container'}>
        {todos.map((todo) => {
          return (
            <ToDoItem
              title={todo.todo}
              id={todo.id}
              key={`key-${todo.id}`}
              completed={todo.completed}
              onChange={() => {
                setTodos(
                  todos.map((item) => {
                    if (item.id === todo.id) {
                      item.completed = !item.completed;
                    }
                    return item;
                  })
                );
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}
