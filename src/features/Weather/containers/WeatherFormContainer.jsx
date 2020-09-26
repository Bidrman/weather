import React from 'react'
import WeatherForm from '../components/WeatherForm'
import { connect } from 'react-redux'
import { SET_CITY, ADD_CITY, UPDATE_CITIES } from '../store/actions'
import { fetchWeather } from '../../FetchAPI/fetchWeather'

const mapStateToProps = (state) => {
  return {
    targetCity: state.weather.targetCity,
    cities: state.weather.cities,
  }
}
// save to localStorage
const clearStorage = (itemKey) => {
  localStorage.removeItem(itemKey)
  window.location.reload()
}

const mapDispatchToProps = (dispatch) => {
  const setCity = (event) =>
    dispatch({ type: SET_CITY, payload: event.target.value })
  const addCity = (cityName) => {
    return fetchWeather(cityName).then((data) =>
      dispatch({ type: ADD_CITY, payload: data }),
    )
  }
  const resetCity = () => dispatch({ type: SET_CITY, payload: '' })
  const addCityAndReset = (payload) => {
    addCity(payload).then(resetCity)
  }

  const updateCityForecast = (cities) => {
    const promises = cities.map((city) => (city.data = fetchWeather(city.name)))

    // MUSI SE OPRAVIT kvuli novymu API
    Promise.all(promises).then((values) => {
      const transformedData = values.map((city) => {
        return {
          name: city.city.name,
          date: new Date(),
          data: city.list.filter((part, index) => index <= 3),
        }
      })
      dispatch({ type: UPDATE_CITIES, payload: transformedData })
    })
  }

  return {
    setCity: setCity,
    addCityAndReset: addCityAndReset,
    updateCityForecast: updateCityForecast,
  }
}

const WeatherFormContainer = ({
  targetCity,
  cities,
  setCity,
  addCityAndReset,
  updateCityForecast,
}) => {
  return (
    <WeatherForm
      updateForecast={updateCityForecast}
      clearStorage={clearStorage}
      setCity={setCity}
      city={targetCity}
      cities={cities}
      addCityAndReset={addCityAndReset}
    />
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherFormContainer)
