import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/Crust.css';

export default function Crust({ handleCrustSelection }) {
  const [selectedOption, setSelectedOption] = useState(null);

  // Handle click event
  const handleClick = (option) => {
    setSelectedOption(option);
    handleCrustSelection(option);
    setTimeout(() => {
      setSelectedOption(null);
    }, 2000);
  };

  // Carousel settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div>
      {/* <h2>Crust</h2> */}
      <Slider {...settings}>
        <button
          className={`center-content ${selectedOption === "White" ? "selected" : ""}`}
          onClick={() => handleClick("White")}
        >
          <h3>White</h3>
          <img loading="lazy" src="public\white bread copy.png" alt="Crust White" />
        </button>
        <button
          className={`center-content ${selectedOption === "Wheat" ? "selected" : ""}`}
          onClick={() => handleClick("Wheat")}
        >
          <h3>Wheat</h3>
          <img loading="lazy" src="public\whole wheat copy.png" alt="Crust Wheat" />
        </button>
      </Slider>
      {selectedOption && <p className="selected-msg">Selected: {selectedOption}</p>}
    </div>
  );
}
