import React from 'react'

const Weather = ({ addWeatherForm, addWeatherList }) => {
  return (
    <div className="Weather">
      <div className="m-3">
        Napište jméno města v ČR, klikněte na přidat a zobrazí se vám předpověď
        počasí
      </div>
      {addWeatherForm}
      {addWeatherList}
    </div>
  )
}

export default Weather
