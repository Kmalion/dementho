import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { ItemCart } from '../ItemCart/ItemCart'


export const Cart = () => {

    const { cart, precioTotal } = useCartContext();

    if (cart.length === 0){
        return(
            <>
            <h2>Carrito Vacio</h2>
            <Link to='/'>Seguir comprando</Link>
            </>
        );
    }

  return (
    <>
    <h3 className='text-center mt-3'>Carrito de compras</h3>
    {   
        cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <h5>Total: $ {precioTotal()}</h5>
    </>
  )
}
