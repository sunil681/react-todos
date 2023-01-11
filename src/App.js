import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import ToDoList from './components/todo-list/ToDoList.js';
import { todoUrl } from './utils/app-utils';
import './style.css';

export default function App() {
  const [todos, setTodos] = useState([]);

  const { isLoading, error, data } = useQuery('todos', () =>
    fetch(todoUrl)
      .then(res => res.json())
      .then(res => setTodos(res.todos))
    );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
