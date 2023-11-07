import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Image from "next/image";
import TestLeftArrow from "./TestLeftArrow";
import TestRightArrow from "./TestRightArrow";
import styles from "./NewTestimonial.module.scss";
import { test } from "../../../../Json/Testimonials";

const NewTestimonial = () => {
  const sliderRef = useRef(null);
  const slickListRef = useRef(null);
  const slickTrackRef = useRef(null);
  const [bar, setBar] = useState(1);
  const [screenWidth, setScreenWidth] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [hover3, setHover3] = useState(false);
  // const apiUrl = "https://strapi-home-k9zk.onrender.com/api/testimonials";
  // const [data, setData] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const slickList = sliderRef.current.innerSlider.list;
    slickListRef.current = sliderRef.current.innerSlider.list;
    slickTrackRef.current = sliderRef.current.innerSlider.track;
  }, []);

  // Fetch data and set it in the 'data' state
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(apiUrl);
  //       const info = response.data.data;
  //       setData(info);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  const length = test.length - 4;
  // Detect screen width and set it in the 'screenWidth' state
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.screen.width);
    }
  }, []);

  // Function to handle increasing the progress bar
  const increaseProgressBar = () => {
    setIsButtonDisabled(true);
    if (bar < 100) {
      setBar(bar + 100 / length);
    } else if (bar > 95) {
      setBar(100);
    }
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 500);
  };

  // Function to handle decreasing the progress bar
  const decreaseProgressBar = () => {
    setIsButtonDisabled(true);
    if (bar > 0) {
      setBar(bar - 100 / length);
    }

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 500);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    arrows: true,
    dots: false,
    nextArrow: (
      <TestLeftArrow
        onClickChange={increaseProgressBar}
        isButtonDisabled={isButtonDisabled}
        disabled={isButtonDisabled}
      />
    ),
    prevArrow: (
      <TestRightArrow
        onClickChange={decreaseProgressBar}
        isButtonDisabled={isButtonDisabled}
        disabled={isButtonDisabled}
      />
    ),
    onSwipe: (index) => {
   
      if (index === "left") {
        const newBar = bar + 100 / length;
        setBar(newBar);
        if (bar > 94) setBar(100);
      } else if (index === "right") {
        const newBar = bar - 100 / length;
        setBar(newBar);
      }
      setCurrentCardIndex(index);
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={`${styles["header1"]}`}>
      <div className={`${styles["content"]}`}>
        <div className={`${styles["container1"]}`}>
          <Slider ref={sliderRef} {...settings}>
            {test.map((item, index) => (
              <div
                className={`${styles["card-main"]} col-12 col-md-6 col-lg-3`}
                key={index}
              >
                <div className={`${styles["main-test-div"]}`}>
                  <Image
                    height={0}
                    width={0}
                    src={item.img}
                    className={`${styles["test-img"]} `}
                    alt={`Testimonial ${item.desc}`}
                  />
                  <div className={`${styles["box-test"]}`}>
                    <p className={`${styles["box-test-p"]} text-white`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div
          className={`${styles["progress"]} ${styles["progress-striped1"]} col-9`}
        >
          <div
            className={`${styles["progress-bar1"]} `}
            style={{ width: `${bar}%` }}
            role="progressbar"
            aria-valuenow={bar}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </div>
  );
};

export default NewTestimonial;
