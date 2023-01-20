import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";
const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1787236/pexels-photo-1787236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "DSLR cameras for stunning photos",
    body: "Are you an aspiring photographer looking to take your skills to the next level? Our DSLR cameras offer advanced features and high-quality image sensors to help you capture stunning photos. From landscape shots to portraits, these cameras are perfect for capturing all types of subjects.",
    cta: "Shop DSLR cameras now",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Upgrade your home entertainment with our TVs",
    body: "Experience the latest in home entertainment with our selection of TVs. From sleek and modern designs to advanced features like 4K resolution and smart capabilities, our TVs will bring your favorite movies, TV shows, and streaming content to life.",
    cta: "Shop TVs and upgrade now",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Enhance your listening experience",
    body: "Take your music, movies, and more to the next level with our headphones. Our selection offers a range of styles and features, including noise-cancelling technology, wireless connectivity, and comfortable designs for all-day wear.",
    cta: "Experience enhanced sound",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Take your gaming to the next level",
    body: "Elevate your gaming experience with our selection of gaming consoles. From the latest models to classic systems, we have a console for every type of gamer. Our consoles offer advanced graphics, fast processing speeds, and a variety of exclusive games to choose from.",
    cta: "Shop consoles and play now",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Stay connected with smart watches",
    body: "Stay connected and on top of your day with our smart watches. Our selection offers a range of styles and features, including fitness tracking, phone notifications, and voice assistants. These watches are the perfect combination of functionality and style.",
    cta: "Connect with a smart watch",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };
  return (
    <div className="frame relative">
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide image={image} key={image.id} />
        ))}
      </div>
      <div className="btns absolute z-[1] left-0 right-0 bottom-0 m-auto  text-2xl flex gap-10 w-fit">
        <button
          onClick={prevSlide}
          className="prev-btn h-14 w-20  flex justify-center items-center bg-violet-900 text-violet-200 border-2 border-violet-200 hover:bg-gray-900 hover:text-gray-200 hover:border-gray-200 duration-300"
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="prev-btn h-14 w-20  flex justify-center items-center bg-violet-900 text-violet-200 border-2 border-violet-200 hover:bg-gray-900 hover:text-gray-200 hover:border-gray-200 duration-300"
        >
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
