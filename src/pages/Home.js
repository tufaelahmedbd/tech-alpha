import Footer from "../Components/Footer";
import Slider from "../Components/Slider";
import Products from "../pages/Products";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
