import { createStore, compose, applyMiddleware } from 'redux'
import createReducer from './combineReducers'
import { saveWeatherStorage, saveTodoStorage } from './localStore'
import {fetchForecastStart, fetchForecastSuccess, fetchForecastFail} from '../middlewares/ForecastMiddleware'
    
const store = createStore(
  createReducer(),
  compose(
    applyMiddleware(fetchForecastStart, fetchForecastSuccess, fetchForecastFail),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)
    
store.subscribe(() => {
  //console.log('store',store.getState())
  saveWeatherStorage(store.getState().weather.cities)
  saveTodoStorage(store.getState().todos.todoTasks)
})

export default store
