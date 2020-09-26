import React from 'react'
import Weather from '../components/Weather'
import WeatherFormContainer from '../containers/WeatherFormContainer'
import WeatherListContainer from '../containers/WeatherListContainer'

const WeatherContainer = props => {
  return (
    <Weather
      addWeatherForm={<WeatherFormContainer />}
      addWeatherList={<WeatherListContainer />}
    />
  )
}

export default WeatherContainer
