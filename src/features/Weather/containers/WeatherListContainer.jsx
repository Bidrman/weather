import React from 'react'
import WeatherList from '../components/WeatherList'
import WeatherItemContainer from './WeatherItemContainer'
import { FETCH_START } from '../store/actions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { lifecycle } from 'recompose'

const mapStateToProps = (state) => {
  return {
    cities: state.weather.cities,
  }
}

const mapDispatchToProps = (dispatch) => {
  const fetchForUpdate = (cities) => {
    return cities.map((city) => {
      return dispatch({ type: FETCH_START, payload: city.name })
    })
  }

  return {
    fetchForUpdate: fetchForUpdate,
  }
}

const WeatherListContainer = (props) => {
  // ZDE bude componentDidMount?

  const { cities } = props
  const cityData = cities.map((oneCity) => {
    return (
      <WeatherItemContainer
        name={oneCity.name}
        data={oneCity.data}
        key={oneCity.name}
      />
    )
  })

  return <WeatherList item={cityData} />
}

const enhance: Function = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      console.log(this.props.cities, 'this.props.cities')
      this.props.fetchForUpdate(this.props.cities)
    },
  }),
)

export default enhance(WeatherListContainer)
