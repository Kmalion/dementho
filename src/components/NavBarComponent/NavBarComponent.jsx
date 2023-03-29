import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { CartWidgetComponent } from '../CartWidgetComponent';
import { NavItems } from './NavItems'
import './NavItem.css'



export function NavBarComponent() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> 
            <NavItems styles="text-decoration:none" label="DEMENTHO" src="/"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><NavItems label="Zapatos" src="/zapatos"/></Nav.Link>
            <Nav.Link><NavItems label="Accesorios" src="/accesorios"/></Nav.Link>
            <Nav.Link><NavItems label="Decoracion" src="/decoracion"/></Nav.Link>
            <Nav.Link><NavItems label="Hogar" src="/hogar"/></Nav.Link>
            <Nav.Link><CartWidgetComponent/> <NavItems label=" Carrito" src="/carrito"/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

