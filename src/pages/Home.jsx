// import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Categories from "../components/Categories.jsx";
import Collections from "../components/Collections.jsx";
import Displays from "../components/Displays.jsx";
// import Cart from "../components/Cart.jsx";
// import Footer from "../components/Footer.jsx";
function Home({cart, setCart }) {
  return (
    <header className="bg-[url('src/assets/images/hero-background.png')] bg-no-repeat bg-top-right bg-size-[50%]">
      {/* <Nav /> */}
      <Hero />
      <Categories />
      <Collections cart={cart} setCart={setCart}/>
      <Displays />
      {/* <Footer/> */}
    </header>
  );
}
export default Home;
