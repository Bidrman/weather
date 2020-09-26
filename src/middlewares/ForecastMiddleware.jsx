import { fetchWeather } from '../features/FetchAPI/fetchWeather'
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  UPDATE_CITY,
} from '../features/Weather/store/actions'

export const fetchForecastStart = (store) => (next) => async (action) => {
  if (action.type === FETCH_START) {
    next(action)
    try {
      const response = await fetchWeather(action.payload)
      store.dispatch({ type: FETCH_SUCCESS, payload: response })
    } catch (error) {
      store.dispatch({ type: FETCH_FAIL, payload: error })
    }
  } else {
    return next(action)
  }
}

export const fetchForecastSuccess = (store) => (next) => async (action) => {
  if (action.type === FETCH_SUCCESS) {
    // opetovne volani
    //console.log('AKCE FETCH SUCCESS', action)
    setTimeout(() => {
      store.dispatch({ type: FETCH_START, payload: action.payload.city.name })
    }, 600000)
    //
    const new_data = {
      name: action.payload.city.name,
      date: new Date(),
      data: action.payload.list.filter((piece, index) => index <= 3),
    }

    const next_action = { type: UPDATE_CITY, payload: new_data }
    console.log('novy data', next_action)

    return next(next_action)
  }
  return next(action)
}

export const fetchForecastFail = (store) => (next) => async (action) => {
  console.log(action)

  if (action.type === FETCH_FAIL) {
    alert(
      'spojeni se serverem nebylo uspesne, nastala chyba: ' + action.payload,
    )

    return next(action)
  }

  return next(action)
}
