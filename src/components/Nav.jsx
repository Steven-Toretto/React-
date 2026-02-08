import logo from "../assets/images/logo.svg";
import { ShoppingCart } from "lucide-react";
import {Menu} from "lucide-react";
function Nav() {
  return (
    <nav>
      <div className="container mx-auto">
        <div className=" flex justify-between">
            
          <div className="flex items-center gap-5">
            <img src={logo} alt="Clozzet Logo" width={'250px'} />
            <ul className="lg:flex gap-5 hidden">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-5 ">
            
            <ul className="lg:flex gap-5 hidden">
                <li><ShoppingCart />{" "}</li>
              <li>
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Log In</a>
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
