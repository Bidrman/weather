import React from 'react'
import TodoListContainer from './TodoListContainer'
import TodoFormContainer from './TodoFormContainer'
import Todos from '../components/Todos'

const TodosContainer = props => {
  return (
    <Todos
      addTodoForm={<TodoFormContainer />}
      addTodoLists={<TodoListContainer />}
    />
  )
}

export default TodosContainer
