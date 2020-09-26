import React from 'react'
import { Button } from 'reactstrap'
import styles from '../../../styles/styles.global.scss'

const Todo = props => {
  const { content, removeTask, id } = props
  const remove = () => removeTask(id)

  return (
    <li className="todo-list-item m-2">
      <div>
        <input type="checkbox" className="m-2" />
        <span>{content}</span>
        <Button type="button" className="ml-3" color="danger" onClick={remove}>
          Smazat
        </Button>
      </div>
    </li>
  )
}

export default Todo
