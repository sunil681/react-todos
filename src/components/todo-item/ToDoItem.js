/* eslint-disable react/prop-types */
import React from 'react'
import './style.css'

export default function ToDoItem (props) {
  const labelClass = props?.completed ? 'completed' : ''
  const ariaLabel = `${props?.title} ${props?.completed ? 'marked completed' : 'marked pending'}`
  return (
    <li className={'todo-item'}>
      <input
        aria-label={ariaLabel}
        name="todoCheckbox"
        type="checkbox"
        checked={props?.completed}
        key={`key-${props?.id}`}
        onChange={props?.onChange}
      />
      <label htmlFor="todoCheckbox" className={labelClass}>
        {props?.title}
      </label>
    </li>
  )
}
