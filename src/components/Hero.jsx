import heroImage from "../assets/images/hero-image.png";
import {Search} from "lucide-react"
function Hero() {
  return (
    <section>
      <div className="container m-auto flex items-center">
        <div className=" flex-1 w-full" >

          <h1 className=" text-[80px] font-bold">
            Choose the look <br /> that{" "}
            <span className="text-teal-500">
              suits
            </span>{" "}
            you best
          </h1>
          <p className=" w-100% py-4">
            Every day is a fashion show & the world is your runway. Clozzet will
            elevate your wardrobe with the best collections. Be exclusive, Be
            Devine, Be yourself. Explore outfits that will make you comfortably
            beautiful.True style never dies.
          </p>
          <div className=" flex gap-9">
            <button className="bg-teal-500 px-12 py-4 rounded-full">Shop NOw</button>
            <button className="bg-teal-500 px-12 py-4 rounded-full ">About Us</button>
          </div>
          <div className="flex items-center border border-gray-300 my-9 w-[50%] shadow-xs gap-3 px-7 py-4 rounded-full">
            <Search className=""/>
            <input type="text" placeholder="Search" className="border-none outline-none w-full"/>
          </div>
          
        </div>

        <div className=" flex-1 hidden lg:flex">
          <img src={heroImage} alt="Hero image" width={"100%"}/>
        </div>
      </div>
    </section>
  );
}
export default Hero;
