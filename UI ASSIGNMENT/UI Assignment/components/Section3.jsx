// Section3.jsx
import React, { useState } from "react";
import "../src/Section3.css"; // Ensure you have your CSS file for styles

const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Lorem Ipsum",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      title: "Dolor Sit Amet",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    },
    {
      title: "Consectetur",
      content:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      title: "Adipiscing Elit",
      content:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="section3-container">
      <h2 className="section-title">
        SECTION III
      </h2>
      <div className="slider-container">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            >
              <h3>{slide.title}</h3>
              <p>{slide.content}</p>
            </div>
          ))}
        </div>
        <button className="nav-button prev" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="nav-button next" onClick={nextSlide}>
          &#8250;
        </button>
        <div className="indicator">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setSlide(index)}
            ></span>
          ))}
        </div>
        <button className="slider-button">Slider Button</button>
      </div>
    </div>
  );
};

export default Section3;
