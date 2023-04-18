import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { NavBarComponent } from "../components";
import { Carrito, Inicio, ItemCategoryContainer} from '../pages';
import { ItemDetailsContainer } from "../pages/ItemDetailsContainer";
import { CartProvider } from "../context/CartContext";




export const MainRoutes = () => {
  return (
    <Router>
      
      <CartProvider>
      <NavBarComponent />
      <div className="container">
        <Routes>
            <Route exact path="/" element={<Inicio />}/> 
            <Route exact path="/category/:categoryId" element={<ItemCategoryContainer />}/>
            <Route exact path="/details/:productoId" element={<ItemDetailsContainer />}/>
            <Route exact path="/category/:categoryId/:details/:productoId" element={<ItemDetailsContainer />}/>
            <Route exact path="/carrito" element={<Carrito />}/>
        </Routes>
      </div>
      </CartProvider>
    </Router>
  )
};
