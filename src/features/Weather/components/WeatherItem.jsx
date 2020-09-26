import React from 'react'
import styles from '../../../styles/styles.global.scss'

const WeatherItem = ({ name, temp, hours }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Předpověď počasí: </p>
      <ul className="weather-list">{temp}</ul>
    </div>
  )
}

export default WeatherItem
