import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    number: state.navbar.number,
  }
}

export default connect(mapStateToProps)