import React from 'react'
import { Card, CardGroup} from 'react-bootstrap'

export function ItemListContainerComponent() {
  return (
    <div>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/foto-gratis/zapatos-moda-zapatillas_1203-7529.jpg?w=1380&t=st=1679359658~exp=1679360258~hmac=8407e6fa5873dadea6df9654330b9064e991c4fe3e908a9e00ac7c4712be4339  " />
        <Card.Body>
          <Card.Title>Zapatos deportivos Brand1</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores qui ducimus, non dolores quae excepturi quod sed aperiam labore provident dicta nostrum, odio ipsum eius numquam accusantium nobis voluptas?    
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/fotos-premium/par-zapatos-masculinos-cuero-negro-sobre-fondo-beige_77190-9956.jpg?w=1380" />
        <Card.Body>
          <Card.Title>Zapatos deportivos Brand2</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/foto-gratis/zapatos-derby-hombre-piel-marron_53876-97144.jpg?w=1380&t=st=1679359745~exp=1679360345~hmac=c8dd46d448242734f6e623a88081d1124e7dbb951e07709cd3c9145bdc863592" />
        <Card.Body>
          <Card.Title>Zapatos formales brand1</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/foto-gratis/zapatos-hombre-cordones-cuero-marron-moda_53876-104481.jpg?w=1060&t=st=1679360128~exp=1679360728~hmac=4517ab1b3160d3b31539982ecf442212560a582e0f5877a61efc61867e97cb75" />
        <Card.Body>
          <Card.Title>Zapatos formales brand2</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}

export default ItemListContainerComponent