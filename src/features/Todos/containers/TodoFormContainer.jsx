import React from 'react'
import TodoForm from '../components/TodoForm'

import { connect } from 'react-redux'
import { ADD_TASK, SET_TASK, RESET_TASK } from '../store/actions'

const mapStateToProps = state => {
  return {
    task: state.todos.task,
    todoTasks: state.todoTasks,
  }
}

const mapDispatchToProps = dispatch => {
  const addTask = payload => {
    dispatch({ type: ADD_TASK, payload: payload })
  }
  const setTask = event =>
    dispatch({ type: SET_TASK, payload: event.target.value })
  const resetTask = () => dispatch({ type: RESET_TASK, payload: '' })
  const addTaskAndReset = payload => {
    addTask(payload)
    resetTask()
  }

  return {
    setTask: setTask,
    addTaskAndReset: addTaskAndReset,
  }
}

const clearTodoStorage = itemKey => {
  localStorage.removeItem(itemKey)
  window.location.reload()
}

const TodoFormContainer = ({ task, setTask, addTaskAndReset }) => {
  return (
    <TodoForm
      task={task}
      setTask={setTask}
      addTaskAndReset={addTaskAndReset}
      clearTodoStorage={clearTodoStorage}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFormContainer)
