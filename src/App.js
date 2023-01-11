import React, { useState, useEffect } from 'react';
import './style.css';
import ToDoList from './components/todo-list/ToDoList.js';

export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((res) => setTodos(res.todos));
  }, []);

  return (
    <div>
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
