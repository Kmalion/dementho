import React, {useEffect, useState} from 'react'
import { Button, Card } from "react-bootstrap";
import { useCartContext } from '../../context';
import { getFirestore, getDocs,  collection} from "firebase/firestore"



 export const ItemCart = ({ product } ) => {

  

 const { borrarProducto } = useCartContext();
 
 const [ setData] = useState([]);
 
 
 useEffect(() => {
   const db = getFirestore();
   const itemsCollection = collection(db, 'productos');
   getDocs(itemsCollection)
   .then (res => setData(res.docs.map(product =>({id: product.id, ...product.data() }))))
  
  
 }, [])
  

  return (
    <div className='container-md mt-3 '>
      <div className="row">

      <Card.Img
        style={{ height: 300, width: 300 }}
        variant="right"
        src={product.imagen}
      />
      
      <div className="col">
      <Card.Body border="primary" style={{ height: 200, width: 400 }}>
        <Card.Title>Referencia: {product.referencia} </Card.Title>
        <Card.Text>Categoria: {product.categoria} </Card.Text>
        <Card.Text>Precio unitario: $ {product.precio} </Card.Text>
        <Card.Text>Cantidad: {product.cantidad} </Card.Text>
        <Card.Text>Subtotal: ${product.cantidad * product.precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button onClick={()=> borrarProducto(product.id)}>Eliminar</Button>
      </Card.Footer>
  
      </div>
      </div>
  </div>
  )
}
