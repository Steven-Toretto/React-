import Collection from "./Collection";
import leather from "../assets/images/leather-jacket.png"
import sweatshirts from "../assets/images/sweatshirts.png"
import pallazo from "../assets/images/pallazo.png"
import denim from "../assets/images/denim.png"
function Collections({cart, setCart}) {
  return (
    <section className=" container mx-auto ">
      <h2 className=" text-center text-[40px] font-medium mt-40">
        Featured Collection
      </h2>
      <div className=" flex my-10 justify-between">
        <Collection img={leather} title = "Brown Leather Jacket" price={2250} cart={cart} setCart={setCart}/>
        <Collection img={sweatshirts} title = "Round-neck Sweatshirts" price={2250} cart={cart} setCart={setCart}/>
        <Collection img={pallazo} title = "Pleated Pallazo Trousers" price={2250} cart={cart} setCart={setCart}/>
        <Collection img={denim} title = "M-22 Denim Jacket" price={2250} cart={cart} setCart={setCart}/>
      </div>
    </section>
  );
}
export default Collections;
