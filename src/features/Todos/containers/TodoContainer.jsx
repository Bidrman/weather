import React from 'react'
import { connect } from 'react-redux'
import { REMOVE_TASK } from '../store/actions'
import Todo from '../components/Todo'

const mapStateToProps = state => {
  return {
    todoTasks: state.todos.todoTasks,
  }
}

const mapDispatchToProps = dispatch => {
  const removeTask = id => dispatch({ type: REMOVE_TASK, payload: id })

  return {
    removeTask: removeTask,
  }
}

const TodoContainer = props => {
  return (
    <Todo content={props.content} id={props.id} removeTask={props.removeTask} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
