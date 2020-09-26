import { ADD_CITY, REMOVE_CITY, SET_CITY, UPDATE_CITIES, UPDATE_CITY, FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './actions'
import {loadStorage} from '../../../utils/localStore'

const preloadedState = loadStorage('weather')

const initialState = {
  isLoading: false,
  error_msg: '',
  targetCity: '',
  cities: preloadedState || [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_CITY:
    return {
      ...state,
      cities: [
        ...state.cities,
        {
          name: action.payload.city.name,
          date: new Date(),
          data: action.payload.list.filter((part,index) => index <= 3),
        },
      ],
    }
  case SET_CITY:
    return {
      ...state,
      targetCity: action.payload,
    }
  case REMOVE_CITY:
    return {
      ...state,
    }
  case UPDATE_CITIES:
    return {
      ...state,
      cities: action.payload,
    }
  case UPDATE_CITY:
    return{
      ...state,
      cities: state.cities.map(city => {
        if(city.name === action.payload.name) {
          return action.payload
        }
        return city
      }),
    }
  case FETCH_START:
    return {
      ...state,
      isLoading: true,
    }
  case FETCH_SUCCESS:
    return {
      ...state,
      isLoading: false,
    }
  case FETCH_FAIL:
    return {
      ...state,
      isLoading: false,
      error_msg: action.payload,
    }
  default:
    return state
  }
}

export default reducer
