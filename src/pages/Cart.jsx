import Collection from "../components/Collection";
import { useEffect, useState } from "react";

import CartProduct from "../components/CartProduct";

function Cart({ cart, setCart, item, title }) {
  const [cartCopy, setCartCopy] = useState([]);

  useEffect(()=>{
    setCartCopy([...cart])

      const cartCopyData = JSON.parse(localStorage.getItem('cartCopy'))
  if(cartCopyData){
    setCartCopy(cartCopyData)
  }else{
    setCartCopy(cart)
  }
  },[])
////

  useEffect(()=>{
  if(cartCopy.length !== 0)
    localStorage.setItem("cartCopy", JSON.stringify(cartCopy))
  },[cartCopy]);



  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* LEFT — CART ITEMS */}
      <div className="lg:col-span-2 border rounded-lg">
        <div className="grid grid-cols-3 p-4 border-b font-semibold">
          <p>Product</p>
          <p className="text-center">Quantity</p>
          <p className="text-right">Price</p>
        </div>

        {cart && cart.map((item) => {
         return <CartProduct cart={cart} setCart={setCart} item={item} cartCopy={cartCopy} setCartCopy={setCartCopy} key={item.title}/>
})}
      </div>

      {/* RIGHT — CART SUMMARY */}
      <div className="border rounded-lg p-6 bg-gray-50 h-fit">
        <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>

        <p className="text-sm mb-2">Have a promo code? Apply here</p>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Promo Code (optional)"
            className="border p-2 flex-1 rounded"
          />
          <button className="bg-teal-400 text-white px-4 rounded">Apply</button>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>KSh {cartCopy.reduce((acc,curr)=>acc+ curr.price,0)}</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>KSh 450</span>
          </div>

          <hr />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>KSh {cartCopy.reduce((acc,curr)=>acc+ curr.price,450)}</span>
          </div>
        </div>

        <button className="w-full mt-6 bg-teal-400 text-white py-3 rounded font-medium">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
