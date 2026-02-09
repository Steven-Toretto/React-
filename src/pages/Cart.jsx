import { useState } from "react";
import { Trash2 } from "lucide-react";

// IMPORT LOCAL IMAGES
import sweater from "../assets/shop-images/knitted-sweater.png";
import sneakers from "../assets/shop-images/unisex.png";
import dress from "../assets/shop-images/slim-banquet-dress.png";
import jeans from "../assets/shop-images/denim-jeans.png";

// INITIAL CART DATA
const initialCart = [
  {
    id: 1,
    name: "Strip Knitted Sweater",
    size: "XL",
    price: 2250,
    image: sweater,
    quantity: 1,
  },
  {
    id: 2,
    name: "Unisex Airforce Sneakers",
    size: "40",
    price: 2000,
    image: sneakers,
    quantity: 1,
  },
  {
    id: 3,
    name: "Slim Banquet Dress",
    size: "M",
    price: 10250,
    image: dress,
    quantity: 1,
  },
  {
    id: 4,
    name: "Women Denim Jeans",
    size: "L",
    price: 10250,
    image: jeans,
    quantity: 1,
  },
];

function Cart() {
  const [cart, setCart] = useState(initialCart);

  // REMOVE ITEM
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* LEFT — CART ITEMS */}
      <div className="lg:col-span-2 border rounded-lg">
        <div className="grid grid-cols-3 p-4 border-b font-semibold">
          <p>Product</p>
          <p className="text-center">Quantity</p>
          <p className="text-right">Price</p>
        </div>

        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 items-center p-4 border-b"
          >
            {/* PRODUCT */}
            <div className="flex gap-4 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
              </div>
            </div>

            {/* QUANTITY (buttons visible but inactive) */}
            <div className="flex justify-center items-center gap-2">
              <button className="border px-3 py-1">−</button>
              <span>{item.quantity}</span>
              <button className="border px-3 py-1">+</button>
            </div>

            {/* PRICE (constant display) */}
            <div className="flex justify-end items-center gap-4">
              <p className="font-medium">KSh {item.price.toLocaleString()}</p>
              <button onClick={() => removeItem(item.id)}>
                <Trash2 className="w-5 text-red-500" />
              </button>
            </div>
          </div>
        ))}
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
            <span>KSh 24,750</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>KSh 450</span>
          </div>

          <hr />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>KSh 25,200</span> 
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
