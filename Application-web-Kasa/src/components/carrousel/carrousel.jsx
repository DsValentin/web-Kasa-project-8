import ArrowLeft from "../../assets/arrow_left.png";
import ArrowRight from "../../assets/arrow_right.png";
import "../../components/carrousel/carrousel.style.scss";
import React, { useState } from "react";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="Carousel">
      <div className="CarouselContainer">
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="CarouselSlide"
        />
        {slides.length > 1 && (
          <div className="SlideCounter">
            {currentIndex + 1} / {slides.length}
          </div>
        )}
        {slides.length > 1 && (
          <>
            <button className=" CarouselButtonLeft" onClick={goToPreviousSlide}>
              <img src={ArrowLeft} alt="Previous" />
            </button>
            <button className=" CarouselButtonRight" onClick={goToNextSlide}>
              <img src={ArrowRight} alt="Next" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;
