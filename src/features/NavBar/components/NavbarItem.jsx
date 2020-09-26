import React from 'react'

const NavbarItem = ({ coordX, coordY }) => {
  return (
    <li>
      <div>
        <span>souradnice X jsou: {coordX}</span>
      </div>
      <div>
        <span>souradnice Y jsou: {coordY}</span>
      </div>
    </li>
  )
}

export default NavbarItem
