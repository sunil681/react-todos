import React from 'react';
import './style.css';

export default function ToDoItem(props) {
  const labelClass = props.completed ? 'completed' : '';
  return (
    <li className={'todo-item'}>
      <input
        name="todoCheckbox"
        type="checkbox"
        checked={props.completed}
        key={`key-${props.id}`}
        onChange={props.onChange}
      />
      <label htmlFor="todoCheckbox" className={labelClass}>
        {props.title}
      </label>
    </li>
  );
}
