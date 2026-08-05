import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Categories from "./components/sections/Categories";
import FeaturedProducts from "./components/sections/FeaturedProducts";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
    </div>
  );
}

export default App;
