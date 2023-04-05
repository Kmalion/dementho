import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../components/productos.json";
import { Card, Col } from "react-bootstrap";
import { CountItem } from "../components/CountItem/CountItem";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"

export const ItemDetailsContainer = () => {
  const { productoId } = useParams();
  console.log(productoId);
  const [items, setItems] = useState({});

  React.useEffect(() => {
    setItems(data.filter((e) => e.id == productoId)[0]);
  }, [productoId]);

const onAdd = (cantidad) => {
  console.log(`Compraste ${cantidad} unidades `);
}

  return (
    <div className="row mt-4">
      {
        <Col>
          <Card>
            <Card.Img
              style={{ height: 330, width: 400 }}
              variant="top"
              src={items.imagen}
            />
            <Card.Body style={{ height: 420, width: 400 }}>
              <Card.Title>{items.referencia} </Card.Title>
              <Card.Text>{items.categoria} </Card.Text>
              <Card.Text>Color: {items.color} </Card.Text>
              <Card.Text>$ {items.precio} </Card.Text>
              <Card.Text>{items.descripcion}</Card.Text>
              <Card.Text>Disponibles: {  items.stock } </Card.Text>
              <CountItem initial={1} stock={items.stock} onAdd={onAdd}></CountItem>
              <p class="text-secondary mt-3"><Link to={"/"}><BsFillArrowLeftCircleFill size={30}/></Link></p>  
            </Card.Body>
            <Card.Footer>
              <small className="text-muted mt-1">
                Ultima actualizacion hace 3 minutos
              </small>
            </Card.Footer>
          </Card>
        </Col>
      }
    </div>
  );
};
