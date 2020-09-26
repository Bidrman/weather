import React from 'react'
import NavbarItem from '../components/NavbarItem'

import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    coordX: state.navbar.coordX,
    coordY: state.navbar.coordY,
  }
}

const NavbarItemContainer = ({ coordX, coordY }) => {
  return <NavbarItem coordX={coordX} coordY={coordY} />
}

export default connect(mapStateToProps)(NavbarItemContainer)
