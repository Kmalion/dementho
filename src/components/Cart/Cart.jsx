import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { ItemCart } from '../ItemCart/ItemCart'
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import {BsFillCartFill} from "react-icons/bs"


export const Cart = () => {

    const { cart, precioTotal } = useCartContext();
    console.log(precioTotal)
    
    if (cart.length === 0){
        return(
            <>
            <h2 className='text-primary text-center mt-3'> Carrito Vacio</h2>
            <p class="text-secondary mt-3"><Link to={"/"}><BsFillArrowLeftCircleFill size={30}/>Volver a comprar</Link></p> 
            </>
        );
    }

  return (
    <>
    <h3 className='text-primary text-center mt-3'>Carrito de compras</h3>
    {   
        cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <h1 class="text-primary text-center mt-4"><strong>Total: ${precioTotal()}</strong> </h1>
    <hr />
    <div  class="d-flex justify-content-center mb-3"  >
    <button   type="button" class="justify-content-center btn btn-outline-info d-flex  mt-3"><BsFillCartFill /> Continuar con la compra</button>
    </div>
    </>
  )
}
