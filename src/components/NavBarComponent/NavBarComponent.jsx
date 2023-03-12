import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export function NavBarComponent() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DEMENTHO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#productos">Zapatos</Nav.Link>
            <Nav.Link href="#pedidos">Accesorios</Nav.Link>
            <Nav.Link href="#decoracion">Decoracion</Nav.Link>
            <Nav.Link href="#hogar">Hogar</Nav.Link>
            <Nav.Link href="#carrito">Carrito</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
