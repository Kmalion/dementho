import React from 'react'
import { Link } from 'react-router-dom'
import './NavItem.css'


export const NavItems = ({label, src}) => {
  return (
    <Link to={src} className="Ro">{label}</Link>
  )
}

