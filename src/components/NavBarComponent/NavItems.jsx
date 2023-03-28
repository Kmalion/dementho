import React from 'react'
import './NavItems.css'

const NavItems = ({label, src}) => {
  return (
    <a href={src}>{label}</a>
  )
}

export default NavItems