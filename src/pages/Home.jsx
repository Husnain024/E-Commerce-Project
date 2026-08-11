import Hero from "../components/sections/Hero";
import Categories from "../components/sections/Categories";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import PromoBanner from "../components/home/PromoBanner";
import Benefits from "../components/home/Benefits";
import Newsletter from "../components/home/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <PromoBanner />
      <Benefits />
      <Newsletter />
    </>
  );
}

export default Home;
