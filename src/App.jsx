import React , {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/place_order/PlaceOrder";
import Footer from "./components/footer/Footer";
import LoginPopup from "./components/loginPopup/LoginPopup";

const App = () => {
  const [showLogin , setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
       <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
 
    
  );
};

export default App;