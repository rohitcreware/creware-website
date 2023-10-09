import React from "react";
import Slider from "react-slick";

import styles from "./Carousel.module.scss";
import { secondCard } from "../../../../../Json/MobileApp";
import Card from "./Card/Card";

const Carousel = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className={styles["feedBack_boxes"]}>
        <Slider {...sliderSettings}>
          {secondCard.map((item, key) => (
            <div className={styles["box_div"]} key={key}>
              <Card />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
