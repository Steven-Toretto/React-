import logo from "../assets/images/logo.svg";
import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
function Footer() {
  return (
    <footer className=" bg-gray-200 py-10">
      <div className=" container mx-auto">
        <div className=" text-center">
          <h1>Subscribe and get up to 30% OFF</h1>
          <div className=" flex items-center justify-center gap-10">
            <div className="border border-green-500 my-9 w-[30%] p-7 rounded-full">
              <input
                type="text"
                placeholder="Enter you email"
                className="border-none outline-none w-full"
              />
            </div>
            <button
              className="bg-green-500 
        hover:bg-green-600 
        text-white 
        font-semibold 
        px-14 py-7 rounded-full 
        transition-colors 
        duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
        {/* --------------------------------- */}
        <div className=" flex justify-between my-20 ">
          <div className=" w-40">
            <img src={logo} alt="Clozzet Logo" width={"200px"} />
            <p className=" py-4 " style={{ lineHeight: "1.8" }}>
              Offering a unique and stylish perspective on fashion is our number
              one priority. Confuse your mirror with our trendy outfits at clozzet.com.
            </p>
          </div>

          <div>
            <p className=" text-xl font-bold">Store</p>
            <ul className=" py-4" style={{ lineHeight: "2.5" }}>
              <li>Women's Fashion</li>
              <li>Men's Fashiom</li>
              <li>Store Sale</li>
              <li>Collections</li>
            </ul>
          </div>

          <div>
            <p className=" text-xl font-bold">Help</p>
            <ul className=" py-4" style={{ lineHeight: "2.5" }}>
              <li>Customer Support</li>
              <li>Terms And Conditions</li>
              <li>Privacy Policy</li>
              <li>Track Your Order</li>
            </ul>
          </div>

          <div className=" items-start">
            <p className="text-xl font-bold"> Contact US</p>

            <div className=" flex items-center gap-5 my-5">
                <img src={email} alt="Clozzet Logo" width={"40px"} />
                <p>contact@clozzet.com</p>
            </div>

            <div className=" flex items-center gap-5 my-4">
                <img src={phone} alt="Clozzet Logo" width={"40px"} />
                <p>contact@clozzet.com</p>
            </div>
            <p className=" my-4">Follow Us</p>

            <div className="flex ite justify-between">
                <img src={facebook} alt="Clozzet Logo" width={"40px"} />
                <img src={instagram} alt="Clozzet Logo" width={"40px"} />
                <img src={twitter} alt="Clozzet Logo" width={"40px"} />
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
