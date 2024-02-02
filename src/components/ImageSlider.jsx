/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [timerProgress, setTimerProgress] = useState(0);

  const goToPrevious = () => {
    const isfirstSlide = currentIndex === 0;
    const newIndex = isfirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
  };

  useEffect(() => {
    let sliderInterval;

    if (isAutoPlay) {
      sliderInterval = setInterval(() => {
        setTimerProgress((prevProgress) => {
          if (prevProgress === 100) {
            goToNext();
            return 0;
          }
          return prevProgress + 0.5;
        });
      }, 30);
    } else {
      clearInterval(sliderInterval);
    }

    return () => clearInterval(sliderInterval);
  }, [isAutoPlay, currentIndex, goToNext]);

  return (
    <div
      className="slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide-info">
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].description}</p>
      </div>
      <div className="slide-container">
        <div
          className="slide"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        <div className="dots-container">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={
                slideIndex === currentIndex ? "dot active" : "dot inactive"
              }
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
        <div
          className="progress-bar"
          style={{ width: `${timerProgress}%` }}
        ></div>
      </div>
      <div className="left-arrow" onClick={goToPrevious}>
        ❰
      </div>
      <div className="right-arrow" onClick={goToNext}>
        ❱
      </div>
    </div>
  );
};

export default ImageSlider;
