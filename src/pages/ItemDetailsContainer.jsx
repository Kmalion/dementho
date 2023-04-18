import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, getDoc, doc} from "firebase/firestore"
import { Card, Col } from "react-bootstrap";
import { CountItem } from "../components/CountItem/CountItem";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"

export const ItemDetailsContainer = () => {
  const [productos, setProductos] = useState({});
  const { productoId } = useParams();
  
  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, 'productos', productoId);
    getDoc(queryDoc)
    .then (res => setProductos({ id: res.id, ...res.data()}))

  }, [])
  
  
  
  

const onAdd = (cantidad) => {
  console.log(`Compraste ${cantidad} unidades `);
}

  return (
    <div className="row mt-4">
      {
        <Col>
          <Card>
            <Card.Img
              style={{ height: 300, width: 400 }}
              variant="top"
              src={productos.imagen}
            />
            <Card.Body style={{ height: 350, width: 400 }}>
              <Card.Title>{productos.referencia} </Card.Title>
              <Card.Text>{productos.categoria} </Card.Text>
              <Card.Text>Color: {productos.color} </Card.Text>
              <Card.Text>$ {productos.precio} </Card.Text>
              <Card.Text>{productos.descripcion}</Card.Text>
              <Card.Text>Disponibles: {  productos.stock } </Card.Text>
              <CountItem initial={1} stock={productos.stock} onAdd={onAdd}></CountItem>
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
