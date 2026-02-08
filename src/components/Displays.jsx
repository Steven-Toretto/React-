import Display from "./Display";
import suit from "../assets/images/mens.png";
import watches from "../assets/images/watches.png";
import hbags from "../assets/images/hbags.png";
import ladies from "../assets/images/ladies.png";
function Displays() {
  return (
    <div className=" container mx-auto grid grid-cols-2 grid-row-3 gap-5 m-0 h-auto my-25">

      <div className=" col-start-1 col-end-2 row-start-1 row-end-3 h-full">
        <Display
          img={suit}
          title="Casual Collection"
          title2="Men's Collection"
          button="Shop Now"
          bg="bg-gray-100"
        />
      </div>

      <div className=" col-start-2 col-end-3 row-start-1 row-end-2">
        <Display
          img={watches}
          title="Casual Collection"
          title2="Luxury watches"
          button="Shop Now"
          bg="bg-cyan-100"
        />
      </div>

      <div className=" col-start-1 col-end-2 row-start-3 row-end-4">
        <Display
          img={hbags}
          title="Casual Collection"
          title2="Designer handbags"
          button="Shop Now"
          bg="bg-pink-50"
        />
      </div>

      <div className=" col-start-2 col-end-3 row-start-2 row-end-4">
        <Display
          img={ladies}
          title="Casual Collection"
          title2="ladies Collection"
          button="Shop Now"
          bg="bg-pink-100"
        />
      </div>
    </div>
  );
}
export default Displays;
