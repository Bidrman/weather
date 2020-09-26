export const fetchWeather = (cityName) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=cz&units=metric&appid=64128163cebd1a19281dea72993d1cd6`,
  )
    .then((response) => {
      if (response.status !== 200) {
        alert('Request status = ' + response.status)
      }
      return response.json()
    })
    .then((data) => {
      //console.log('DATA: ', data)
      //console.log(data.data.map(item => item.temp))
      return data
    })
}
