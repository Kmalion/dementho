import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { CartWidgetComponent } from '../CartWidgetComponent';
import { NavItems} from './NavItems'
import { Link } from 'react-router-dom';

import './NavItem.css'





export function NavBarComponent({onAdd}) {
   
    console.log(`Compraste Navbar ${onAdd} unidades `);
  
  return (
    <>
    <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand> <Link to={"/"}>
          <img
              src="https://www.dementho.com/img/dementho-logo-1539136727.jpg"
              width="200"
              height="50"
              className="d-inline-block align-top"
              alt="Dementho logo"
            /></Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><NavItems label="Zapatos" src='category/zapatos'/></Nav.Link>
            <Nav.Link><NavItems label="Accesorios" src="category/accesorios"/></Nav.Link>
            <Nav.Link><NavItems label="Decoracion" src="category/decoracion"/></Nav.Link>
            <Nav.Link><NavItems label="Hogar" src="/category/hogar"/></Nav.Link>
            <Nav.Link><CartWidgetComponent/> <NavItems label="Carrito" src="/carrito"/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

