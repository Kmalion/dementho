import React, { useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {collection, getFirestore, getDocs} from "firebase/firestore"



export const ItemCategoryContainer = () => {
    
    const [productos, setProductos] = useState([]);
    useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, "productos");
      getDocs(itemsCollection)
      .then (productos => {
        if(productos.length === 0){
          console.log("No hay productos")
        }
        setProductos(productos.docs.map(doc => ({id: doc.id, ...doc.data()})))
      }
        )
  
    }, [])
    const { categoryId } = useParams();
    const resultado = productos.filter(e => e.categoria === categoryId);
    


  return (
    
    <div className="row mt-5">
      
    {
    resultado.map(e =>
    
    <Col>
    <Card>
    <Card.Img style={{height:300}} variant="top" src={ e.imagen }  />
    <Card.Body style={{height:300}}>
      <Card.Title>{e.referencia } </Card.Title>
      <Card.Text>{ e.categoria } </Card.Text>
      <Card.Text>Color: {  e.color } </Card.Text>
      <Card.Text>$ { e.precio } </Card.Text>
      <Card.Text>Disponibles: {  e.stock } </Card.Text>
      <Card.Text><Link to = {`details/${e.id}`}>Mas detalles </Link></Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Ultima actualizacion hace 3 minutos</small>
    </Card.Footer>
    </Card>
    </Col>
    )
    }
    </div>

  )
}


