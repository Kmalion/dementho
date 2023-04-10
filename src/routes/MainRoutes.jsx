import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { NavBarComponent } from "../components";
import { Carrito, Inicio, ItemCategoryContainer} from '../pages';
import { CardGroup } from "react-bootstrap";
import { ItemDetailsContainer } from "../pages/ItemDetailsContainer";




export const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <div className="container">
        <CardGroup>
        <Routes>
            <Route exact path="/" element={<Inicio />}/> 
            <Route exact path="/category/:categoryId" element={<ItemCategoryContainer />}/>
            <Route exact path="/details/:productoId" element={<ItemDetailsContainer />}/>
            <Route exact path="/category/:categoryId/:details/:productoId" element={<ItemDetailsContainer />}/>
            <Route exact path="/carrito" element={<Carrito />}/>
        </Routes>
        </CardGroup>
      </div>
    </Router>
  )
};
