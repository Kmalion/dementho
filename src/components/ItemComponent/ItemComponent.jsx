import React from 'react'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const ItemComponent = ({producto}) => {
    
  return (
    <div className="col-md-3 mt-2">
    <Card  class="card bg-secondary mb-3" style={{ width: '18rem' }}>
    <Card.Img style={{height:'18rem',  width: '18rem', backgroundColor:'white'}} variant="top" src={ producto.imagen }  />
    <Card.Body style={{height:200}}>
      <Card.Title>{producto.referencia } </Card.Title>
      <Card.Text>{ producto.categoria } </Card.Text>
      <Card.Text>Color: {  producto.color } </Card.Text>
      <Card.Text>Disponibles: {  producto.stock } </Card.Text>
      <Card.Text><Link to = {`details/${producto.id}`}>Mas detalles </Link></Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Ultima actualizacion hace 3 minutos</small>
    </Card.Footer>  
    </Card>
    </div>
  )
}
