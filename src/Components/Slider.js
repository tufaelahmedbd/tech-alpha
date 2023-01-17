import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1787236/pexels-photo-1787236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Close-Up Photo of Dslr Camera",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/6186813/pexels-photo-6186813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Interior of modern living room at home",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Top View Photo of Black Wireless Headphones",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Person Holding Game Pad",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Rose Gold Aluminum Case Apple Watch With White Sports Band",
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
          <div
            className="slide"
            style={{ backgroundImage: `url(${image.src})` }}
            key={image.id}
          ></div>
        ))}
      </div>
      <div className="btns absolute z-[1] text-gray-50 text-2xl flex gap-10 bottom-20 w-screen justify-center">
        <button
          onClick={prevSlide}
          className="prev-btn h-14 w-20 bg-white/40 backdrop-blur-xl flex justify-center items-center hover:bg-white/90 hover:text-black duration-300"
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="prev-btn h-14 w-20 bg-white/40 backdrop-blur-xl flex justify-center items-center hover:bg-white/90 hover:text-black duration-300"
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
