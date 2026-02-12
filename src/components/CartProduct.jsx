import { Filter, Trash2 } from "lucide-react";
function CartProduct({ item, setCart, cart, cartCopy, setCartCopy }) {
  function handleincrement(product) {
    setCartCopy((prev) => [...prev, product]);
  }
  ////// duplicated cartCopy to CartCopyCopy
  function handledecrement(product) {
    const cartCopyCopy = [...cartCopy];
    const productIndex = cartCopyCopy.indexOf(product);
    cartCopyCopy.splice(productIndex, 1);

    setCartCopy(cartCopyCopy);
  }

  const removeItem = (title)=>{
    setCart(cart.filter((item)=>item.title !== title))
  }



  return (
    <div className="grid grid-cols-3 items-center p-4 border-b">
      {/* PRODUCT */}
      <div className="flex gap-4 items-center">
        <img
          src={item.img}
          alt={item.name}
          className="w-16 h-16 object-contain"
        />
        <div>
          <p className="font-medium">{item.title}</p>
          <p className="text-sm text-gray-500">Size: {item.size}</p>
        </div>
      </div>
      {/* ---------- */}
      {console.log(
        cartCopy.filter((cartItem) => cartItem.title === item.title),
      )}

      {/* QUANTITY*/}
      <div className="flex justify-center items-center gap-2">
        <button
          className="border px-3 py-1 cursor-pointer"
          onClick={() => handledecrement(item)}
          disabled={
            cartCopy.filter((cartItem) => cartItem.title === item.title)
              .length === 1
          }
        >
          −
        </button>

        <span>
          {cartCopy.filter((cartItem) => cartItem.title === item.title).length}
        </span>
        <button
          className="border px-3 py-1 cursor-pointer"
          onClick={() => handleincrement(item)}
        >
          +
        </button>
      </div>

      {/* PRICE */}
      <div className="flex justify-end items-center gap-4">
        
        <p className="font-medium">KSh {cartCopy.filter((cartItem) => cartItem.title === item.title).reduce((acc,curr)=>acc+ curr.price,0)}</p>
        
        <button onClick={() => removeItem(item.title)}>
  <Trash2 className="w-5 text-red-500 cursor-pointer" />
</button>

      </div>
    </div>
  );
}
export default CartProduct;
