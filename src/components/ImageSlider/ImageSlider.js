import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useRef } from "react";
import Image from "next/image";
import styles from "./ImageSlider.module.scss";

const VerticalMode = ({ index }) => {
  const sliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(index);
  const [slideToShow, setSlideToShow] = useState(3);
  const carouselData = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setSlideIndex(index);
    }
    if (index === carouselData.length - 3) {
      setSlideToShow(2);
    } else if (index === carouselData.length - 2) {
      setSlideToShow(2);
    }
  }, [index]);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    centerPadding: "50px",
    arrows: false,
    centerMode: true,
  };

  return (
    <div className={`${styles["main"]}`}>
      <Slider ref={sliderRef} {...settings} className={styles["main_slider"]}>
        {carouselData.map((imageUrl, i) => (
          <div className={`${styles["img-div"]} `} key={i}>
            <Image
              height={0}
              width={0}
              className={`${slideIndex === i ? styles["center-image"] : ""}`}
              src={require(`../../../public/images/services/carousel/${i}.png`)}
              alt="carousel"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VerticalMode;
