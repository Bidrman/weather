import React from 'react'
import styles from '../../../styles/styles.global.scss'

const TodoList = ({ todos }) => {
  return (
    <div>
      <div className="ml-3">
        <h3>Úkoly:</h3>
        <ul className="todo-list">{todos}</ul>
      </div>
    </div>
  )
}

export default TodoList
