
import { useState ,useEffect } from "react";
import heart from "../assets/images/heart.png";
function Collection({ img, title, price, cart, setCart }) {

  const [addedToCart, setAddedToCart] = useState(false)
  useEffect(()=>{
    const cartItems = JSON.parse(localStorage.getItem('cart'))
    if(cartItems){
      const foundItem = cartItems.find((item)=> item.title === title)
      foundItem && foundItem.title === title
      ? setAddedToCart(true)
      : setAddedToCart (false)
    }
  },[])

  function handleAddToCart(e, product) {
          
          if(e.target.textContent.toLowerCase() === "add to cart"){
            setCart(prev=>[...prev, product])
            e.target.textContent = "Added to Cart"
            e.target.style.background = "gray"
          }
        }

  return (
    <div className=" container mx-auto flex flex-col items-start ">
      <div className=" bg-gray-200 w-80 h-80 p-10 flex items-center justify-cente object-contain relative group">
        <img src={img} alt="Collections img" width={"300px"} height={"300px"} />

        {/*  */}
        <button onClick={(e)=>handleAddToCart(e, {img,title,price})} className={`" ${addedToCart ? "bg-gray-500": "bg-teal-400" } text-white cursor-pointer border rounded-xl p-3 w-70 absolute bottom-4 hidden group-hover:block id="btn""`}>
          Add To Cart
        </button>
      </div>

      <div className=" flex justify-between ">
        <p style={{ textTransform: "capitalize" }}>{title}</p>
        <img
          src={heart}
          alt=""
          width={"30px"}
          className=" cursor-pointer hover:text-red-500 "
        />
      </div>

      <p className=" hover:text-red-500">Ksh.{price.toLocaleString()}</p>
    </div>
  );
}
export default Collection;
