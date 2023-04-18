import React, {useState, useContext} from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  
  
  // Precio Total
  const precioTotal = () =>{
    return cart.reduce((prev, act)=> prev + act.cantidad * act.price, 0);
  }
  
  // total de productos
  const totalProductos = () =>  cart.reduce((acumulador, productoActual)=> acumulador + productoActual.cantidad, 0);


  //Agregar al carrito
  const addProducto = (item, cantidad) =>{
    let newCart;
    let product = cart.find(product => product.id === item.id)
    if (product){
      product.cantidad += cantidad;
      newCart = [...cart];
    } else{
      product = {...item, cantidad: cantidad};
      newCart = [...cart, product];
    }
    setCart(newCart);
  }

  console.log("Carrito: ", cart)
  
  //Limpiar carrito
  const cleanCarrito = () => setCart([]);
  
  //Verificar si existe en el carrito
  const isInCarrito = (id) => cart.find(producto => producto.id === id) ? true : false;
  
  //Borrar producto del Carrito

  const borrarProducto = (id) => setCart(cart.filter(producto => producto.id !== id));

  return (
    <CartContext.Provider value={{
      cleanCarrito,
      isInCarrito,
      borrarProducto,
      addProducto,
      precioTotal,
      totalProductos,
      cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

