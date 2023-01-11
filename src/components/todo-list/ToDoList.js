/* eslint-disable react/prop-types */
import React from 'react'
import ToDoItem from '../todo-item/ToDoItem.js'
import './style.css'

export default function ToDoList (props) {
  const todos = props?.todos

  const todoClickHandler = (todo) => {
    props?.setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          item.completed = !item.completed
        }
        return item
      })
    )
  }

  const pendingTodos = todos.filter((todo) => !todo.completed)

  return (
    <>
      <div role="status" aria-live="polite">
        <h1 className={'list-label'}>
          {`Pending Todos ${pendingTodos.length}`}
        </h1>
      </div>
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
          )
        })}
      </ul>
    </>
  )
}
