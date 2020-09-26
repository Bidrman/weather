import React from 'react'
import TodoList from '../components/TodoList'
import TodoContainer from './TodoContainer'

import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    todoTasks: state.todos.todoTasks,
  }
}

const TodoListContainer = props => {
  const todos = props.todoTasks.map(task => {
    return (
      <TodoContainer id={task.taskId} key={task.taskId} content={task.title} />
    )
  })

  const extraProps = { todos }

  if (todos.length) {
    return <TodoList {...extraProps} />
  }
  return null
}

export default connect(mapStateToProps)(TodoListContainer)
