import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { NavBarComponent } from "../components";
import { Home, Zapatos, Accesorios, Decoracion, Hogar, Carrito  } from '../pages';



export const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
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
