import React from 'react'
import { Navbar, Nav, Container, NavItem } from 'react-bootstrap'
import { CartWidgetComponent } from '../CartWidgetComponent';
import NavItems from './NavItems';
import './NavItems.css'


export function NavBarComponent() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><NavItems styles="text-decoration:none" label="DEMENTO" src="/"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav className='Ro'><NavItems label="Zapatos" src="/zapatos"/></Nav>
            <Nav className='Ro'><NavItems label="Accesorios" src="/accesorios"/></Nav>
            <Nav className='Ro'><NavItems label="Decoracion" src="/decoracion"/></Nav>
            <Nav className='Ro'><NavItems label="Hogar" src="/hogar"/></Nav>
            <Nav className='Ro'><CartWidgetComponent/> <NavItems label=" Carrito" src="/carrito"/></Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

