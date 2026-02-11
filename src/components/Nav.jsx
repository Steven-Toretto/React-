import logo from "../assets/images/logo.svg";
import { ShoppingCart } from "lucide-react";
import {Menu} from "lucide-react";
import { Link } from "react-router-dom";
function Nav({cart, setCart}) {
  
  return (
    <nav>
      <div className="container mx-auto">
        <div className=" flex justify-between">
            
          <div className="flex items-center gap-5 cursor-pointer">
            <img src={logo} alt="Clozzet Logo" width={'250px'} />
            <ul className="lg:flex gap-5 hidden">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-5 ">
            
            <ul className="lg:flex gap-5 hidden">
                <li className=" relative "> <Link to="/cart"> <ShoppingCart/>{" "} 
                {cart.length > 0 && (
                <span className=" flex items-center justify-center absolute -top-2 -right-3 bg-teal-500 text-white text-xs font-bold rounded-full h-5 w-5">{cart.length}</span>)}
                </Link>
                 </li>
              <li>
                <Link to="">Sign up</Link>
              </li>
              <li>
                <Link to="">Log In</Link>
              </li>
            </ul>
            <Menu className="lg:hidden"/>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
  
}
export default Nav;
