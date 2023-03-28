import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home, Zapatos, Accesorios, Decoracion, Hogar, Carrito  } from '../pages';



export const MainRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/zapatos" element={<Zapatos />}/>
            <Route exact path="/accesorios" element={<Accesorios />}/>
            <Route exact path="/decoracion" element={<Decoracion />}/>
            <Route exact path="/hogar" element={<Hogar />}/>
            <Route exact path="/carrito" element={<Carrito />}/>
        </Routes>
    </Router>
  )
};
