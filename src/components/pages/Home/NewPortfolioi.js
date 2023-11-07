import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./NewPortfolio.module.scss";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import {
  HoverArrow,
  ViewArrow,
  HoverArrowSmall,
  HoverArrowVerySmall,
  ViewArrowSmall,
  ViewArrowVerySmall,
} from "@/components/Svgs/portfoliobar";
import Link from "next/link";
const Images = [
  {
    id: 1,
    src: "https://i.postimg.cc/s2ybcPrJ/Project6.png",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://i.postimg.cc/x8W4bM5M/Project1.png",
    alt: "Image 2 ",
  },
  {
    id: 3,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
  {
    id: 5,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
  {
    id: 6,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
  {
    id: 7,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
  {
    id: 8,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
  {
    id: 9,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
  {
    id: 10,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
  {
    id: 11,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
  {
    id: 12,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
  {
    id: 13,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
  {
    id: 14,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
  {
    id: 15,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
  {
    id: 16,
    src: "https://i.postimg.cc/L6DySdKj/Project2.png",
    alt: "Image 3",
  },
];
const NewPortfolioi = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [hover3, setHover3] = useState(false);
  let big;
  let small;
  if (screenWidth > 789) {
    big = true;
  } else {
    big = false;
  }
  if (screenWidth > 550) {
    small = true;
  } else {
    small = false;
  }

  useEffect(() => {
    if (window !== undefined) {
      setScreenWidth(window.screen.width);
    }
  });
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0.3,
    arrows: true,
    dots: false,
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
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };
  return (
    <>
      <div className={`${styles["header1"]}`}>
        <div className={`${styles["content"]}`}>
          <div className={`${styles["container1"]}`}>
            <Slider {...settings}>
              {Images.map((item) => (
                <div key={item.id} className={`${styles["card-img-overlay"]}`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`${styles["img"]}`}
                  />
                  <div className={`${styles["overlay"]} ${styles["red"]}`}>
                    <h6 className={`${styles["animated-h6"]}`}>Company</h6>
                    <p className={`${styles["animated-desc"]}`}>
                      Our work Description......
                    </p>
                    <div className={`${styles["animated-p-div"]}`}>
                      <p className={`${styles["animated-p"]}`}>Web design</p>
                      <p className={`${styles["animated-p"]}`}>Figma</p>
                      <p className={`${styles["animated-p"]}`}>Backend etc</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <Link
          href="/our-projects"
          className={`${styles["custom-button"]}`}
          onMouseEnter={() => setHover3(true)}
          onMouseLeave={() => setHover3(false)}
        >
          View more
          {small ? (
            big ? (
              hover3 ? (
                <HoverArrow />
              ) : (
                <ViewArrow />
              )
            ) : hover3 ? (
              <HoverArrowSmall />
            ) : (
              <ViewArrowSmall />
            )
          ) : hover3 ? (
            <HoverArrowVerySmall />
          ) : (
            <ViewArrowVerySmall />
          )}
        </Link>
      </div>
    </>
  );
};

export default NewPortfolioi;
