import React from 'react'
import Navbar from '../components/Navbar'
import NavbarListContainer from '../containers/NavbarListContainer'

const NavbarContainer = () => {
  return <Navbar addLinks={<NavbarListContainer />} />
}

export default NavbarContainer
