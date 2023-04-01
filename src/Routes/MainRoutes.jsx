import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { NavBarComponent } from "../components";
import { Carrito, Inicio, ItemCategoryContainer} from '../pages';
import { CardGroup } from "react-bootstrap";




export const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <div className="container">
        <CardGroup>
        <Routes>
            <Route exact path="/" element={<Inicio />}/> 
            <Route exact path="/category/:categoryId" element={<ItemCategoryContainer />}/>
            <Route exact path="/carrito" element={<Carrito />}/>
        </Routes>
        </CardGroup>

      </div>
    </Router>
  )
};
