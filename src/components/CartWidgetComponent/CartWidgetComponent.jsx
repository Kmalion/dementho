import React from 'react'
import {BsFillCartFill} from "react-icons/bs"
import { useCartContext } from '../../context'


export  function CartWidgetComponent() {
  const {totalProductos} = useCartContext();
  return (
    <>
    <BsFillCartFill />
    <span>{totalProductos() || ''}</span>
    </>
  )
}
