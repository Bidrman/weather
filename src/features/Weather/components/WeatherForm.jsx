import React from 'react'
import { Button } from 'reactstrap'
import styles from '../../../styles/styles.global.scss'

const WeatherForm = ({
  city,
  cities,
  setCity,
  addCityAndReset,
  clearStorage,
  updateForecast,
}) => {
  return (
    <div className="weather-form">
      <div className="search">
        <input
          type="text"
          placeholder="Název města"
          className="m-3"
          onChange={setCity}
          value={city}
        />
        <Button onClick={() => addCityAndReset(city)}>Přidat město</Button>
      </div>
      <div className="clear">
        <Button
          className="mr-3"
          color="info"
          onClick={() => updateForecast(cities)}
        >
          Aktualizovat pocasi
        </Button>
        <Button
          className="mr-5"
          color="warning"
          onClick={() => clearStorage('weather')}
        >
          Smazat předpovědi
        </Button>
      </div>
    </div>
  )
}

export default WeatherForm
