import { ADD_TASK, SET_TASK, REMOVE_TASK, RESET_TASK, TOGGLE_TASK } from './actions'
import {loadStorage} from '../../../utils/localStore'

const initialState = {
  task: '',
  todoTasks: loadStorage('todos') || [],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_TASK:
    return {
      ...state,
      todoTasks: [
        {
          taskId: state.todoTasks.length + 1,
          title: action.payload,
          completed: false,
        },
        ...state.todoTasks,
      ],
    }
  case SET_TASK:
    return {
      ...state,
      task: action.payload,
    }
  case RESET_TASK:
    return{
      ...state,
      task: '',
    }
  case REMOVE_TASK:
    return {
      ...state,
      todoTasks: state.todoTasks.filter(task => {
        console.log(action.payload, 'AKCE NA REMOVE')
        return task.taskId !== action.payload
      }),
    }
  case TOGGLE_TASK:
    return {
      ...state,
    }
  default:
    return state
  }
}

export default todoReducer
