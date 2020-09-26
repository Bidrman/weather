import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import todoReducer from '../features/Todos/store/todoReducer'
import navbarReducer from '../features/NavBar/store/navbarReducer'
import weatherReducer from '../features/Weather/store/weatherReducer'
//import formReducer from '../features/Form/store/formReducer'

export default function createReducer() {
  return combineReducers({
    todos: todoReducer,
    form: reduxFormReducer,
    navbar: navbarReducer,
    weather: weatherReducer,
  })
}
