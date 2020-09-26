import React from 'react'
import { Button } from 'reactstrap'

const TodoForm = ({ addTaskAndReset, task, setTask, clearTodoStorage }) => {
  return (
    <div className="todo-form">
      <div>
        <input
          type="text"
          value={task}
          onChange={setTask}
          placeholder="Napište úkol"
          className="m-2"
        />
        <Button
          type="button"
          onClick={() => addTaskAndReset(task)}
          className="m-2"
          color="info"
        >
          Přidat úkol
        </Button>
        <div className="ml-3">
          <p>Přehled úkolů na den</p>
        </div>
      </div>
      <div>
        <Button
          color="warning"
          className="mr-5 cleaner"
          onClick={() => clearTodoStorage('todos')}
        >
          Smazat úkoly
        </Button>
      </div>
    </div>
  )
}

export default TodoForm
