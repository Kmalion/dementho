import React, {useEffect, useState} from 'react'
import { Button, Card, } from "react-bootstrap";
import { useCartContext } from '../../context';
import { getFirestore, getDocs,  collection} from "firebase/firestore"



 export const ItemCart = ({ producto } ) => {

 const { borrarProducto } = useCartContext();
 const [data, setData] = useState([]);
 
 useEffect(() => {
   const db = getFirestore();
   const itemsCollection = collection(db, 'productos');
   getDocs(itemsCollection)
   .then (res => setData(res.docs.map(producto =>({id: producto.id, ...producto.data() }))))
   const resultado = data.filter(e => e.id === producto.id);
    console.log(resultado);
 }, [data.id])



  return (
    <div className='container-md mt-3 '>
      <Card>
      <Card.Img
        style={{ height: 200, width: 200 }}
        variant="right"
        src={data.imagen}
      />
      <Card.Body style={{ height: 250, width: '10rem' }}>
        <Card.Title>Referencia: {data.referencia} </Card.Title>
        <Card.Text>Categoria: {data.categoria} </Card.Text>
        <Card.Text>Precio unitario: $ {data.precio} </Card.Text>
        <Card.Text>Cantidad: $ {data.cantidad} </Card.Text>
        <Card.Text>Subtotal: {data.cantidad * data.precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button onClick={()=> borrarProducto(data.id)}>Eliminar</Button>
      </Card.Footer>
      </Card>
  </div>
  )
}
