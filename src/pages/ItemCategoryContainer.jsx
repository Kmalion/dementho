import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'
import data from '../components/productos.json'



export const ItemCategoryContainer = () => {

    const { categoryId } = useParams();
    const [ items ] = useState (data);
    const resultado = items.filter(e => e.categoria === categoryId);


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
      <Card.Text>
      { e.descripcion }
      </Card.Text>
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


