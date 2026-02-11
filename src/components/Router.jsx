import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Layout from "../pages/Layout";
import Cart from "../pages/Cart";
import CartProduct from "./CartProduct";
import { useEffect, useState } from "react";

    

function Router() {
      const [cart, setCart] = useState([])
    
      
      // console.log(cartData)
useEffect(()=>{
  if(cart.length !== 0)
    localStorage.setItem("cart", JSON.stringify(cart))
  

  },[cart]);

  useEffect(()=>{
    const cartData = JSON.parse(localStorage.getItem('cart'))
    
    if(cartData){
      setCart(cartData)
    }
  },[])


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout cart={cart} setCart={setCart}>
              {" "}
              <Home cart={cart} setCart={setCart} />{" "}
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout cart={cart} setCart={setCart}>
              {" "}
              <Cart cart={cart} setCart={setCart}/>
            </Layout>
          }
        />
        <Route
          path="/cartproduct"
          element={
            <Layout cart={cart} setCart={setCart}>
              {" "}
              <CartProduct cart={cart} setCart={setCart}/>
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
