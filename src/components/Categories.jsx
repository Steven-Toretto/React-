import Category from "../components/Category";
import jacket from "../assets/images/jacket.png";
import handbag from "../assets/images/handbag.png";
import tshirt from "../assets/images/tshirt.png";
import dress from "../assets/images/dress.png";
import jeans from "../assets/images/jeans.png";
import shoe from "../assets/images/shoe.png";
import sweater from "../assets/images/sweater.png";
function Categories() {
  return (
    <section className=" container mx-auto">
      <h2 className=" text-center text-[40px] font-medium mt-40">
        Top Categories
      </h2>

      <div className="flex items-center justify-evenly my-10">
        <Category img={jacket} title = "Jackets"/>
        <Category img={handbag} title = "handbag"/>
        <Category img={tshirt} title = "tshirt"/>
        <Category img={dress} title = "dress"/>
        <Category img={jeans} title = "jeans"/>
        <Category img={shoe} title = "shoe"/>
        <Category img={sweater} title = "sweater"/>
      </div>

    </section>
  );
}

export default Categories;
