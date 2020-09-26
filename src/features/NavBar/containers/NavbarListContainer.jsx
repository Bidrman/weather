import React from 'react'
import NavbarList from '../components/NavbarList'
import NavbarItemContainer from '../containers/NavbarItemContainer'

import withLinks from '../hoc/withLinks'

const NavbarListContainer = ({ number, getItems }) => {
  return <NavbarList number={number} getItems={<NavbarItemContainer />} />
}

export default withLinks(NavbarListContainer)
