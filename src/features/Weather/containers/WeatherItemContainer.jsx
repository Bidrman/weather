import React from 'react'
import { connect } from 'react-redux'
import WeatherItem from '../components/WeatherItem'

const mapStateToProps = (state) => {
  return {
    cities: state.weather.cities,
  }
}

const WeatherItemContainer = ({ name, data }) => {
  const forecast =
    data &&
    data.map((hour) => {
      const forecastTime = hour.dt_txt.match(/\s([0-9:]{5})/)

      return (
        <li className="weather-list-item" key={hour.dt}>
          <span className="time">{forecastTime[1]}</span>
          <span className="important">
            <span className="description">{hour.weather[0].description}</span>
            <span className="temp">{hour.main.temp} °C</span>
          </span>
          <span className="feels_like">
            Pocitově: {hour.main.feels_like}&nbsp;°C
          </span>
        </li>
      )
    })

  return <WeatherItem name={name} hours={data && data.length} temp={forecast} />
}

export default connect(mapStateToProps)(WeatherItemContainer)
