import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../components/productos.json'
import { Card, Col } from 'react-bootstrap'

export const ItemDetailsContainer = () => {
    
    const {productoId} = useParams();
    console.log(productoId); 
    const [items] = useState(data);
    const resultado = items.filter(e => e.id === productoId)
    console.log(resultado); 

    return (
        
        <div className="row mt-5">
            
        {
            
        <Col>
        <Card>
        <Card.Img style={{height:300}} variant="top" src={ resultado.imagen }  />
        <Card.Body style={{height:300}}>
          <Card.Title>{resultado.referencia } </Card.Title>
          <Card.Text>{ resultado.categoria } </Card.Text>
          <Card.Text>Color: {  resultado.color } </Card.Text>
          <Card.Text>$ { resultado.precio } </Card.Text>
          <Card.Text>
          { resultado.descripcion }
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Ultima actualizacion hace 3 minutos</small>
        </Card.Footer>
        <Link to={'/'}>Regresar</Link>
        </Card>
        </Col>
        }
        </div>
  )
};
