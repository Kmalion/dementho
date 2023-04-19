import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { NavBarComponent } from "../components";
import { Inicio, ItemCategoryContainer} from '../pages';
import { ItemDetailsContainer } from "../pages/ItemDetailsContainer";
import { CartProvider } from "../context/CartContext";
import { Cart } from "../components/Cart/Cart";
import { BannerFooter } from "../components/BannerFooter/BannerFooter";




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
            <Route exact path="/cart" element={<Cart />}/>
        </Routes>
      </div>
      <BannerFooter></BannerFooter>
      </CartProvider>
    </Router>
  )
};
