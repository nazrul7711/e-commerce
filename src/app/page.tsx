
import "@/styles/mainpage.scss";
import Slider from "./components/Slider";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <main className="mainpage">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories/>
      <FeaturedProducts type="trending" />
    </main>
  );
}

/**
 how to make slider 
 */
