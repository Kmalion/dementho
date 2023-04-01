import React from 'react'
import { Card } from 'react-bootstrap'

export const ItemComponent = ({producto}) => {
  return (
    <div className="col-md-3 mt-3">
    <Card>
    <Card.Img style={{height:300}} variant="top" src={ producto.imagen }  />
    <Card.Body style={{height:300}}>
      <Card.Title>{producto.referencia } </Card.Title>
      <Card.Text>{ producto.categoria } </Card.Text>
      <Card.Text>Color: {  producto.color } </Card.Text>
      <Card.Text>$ { producto.precio } </Card.Text>
      <Card.Text>
      { producto.descripcion }
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Ultima actualizacion hace 3 minutos</small>
    </Card.Footer>
    </Card>
    </div>
  )
}
