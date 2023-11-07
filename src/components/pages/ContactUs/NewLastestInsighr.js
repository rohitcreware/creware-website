"use client";
import React, { useEffect, useState } from "react";
import styles from "./NewLatestInsight.module.scss";
import Slider from "react-slick";
import { Insights } from "../../../../Json/LatestInsight";
import LeftArrow from "../Home/LeftArrow";
import RightArrow from "../Home/RightArrow";
import {
  ViewArrow,
  HoverArrow,
  HoverArrowSmall,
  HoverArrowVerySmall,
  ViewArrowSmall,
  ViewArrowVerySmall,
} from "@/components/Svgs/portfoliobar";
import {} from "@/components/Svgs/contactus";
import Link from "next/link";

const NewLastestInsighr = () => {
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
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 576,
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
      <h2 className={`${styles["insight-head"]}`}>Latest Insights :</h2>
      <div className={`${styles["header1"]} container`}>
        <div className={`${styles["content"]}`}>
          <div className={`${styles["container1"]}`}>
            <Slider {...settings}>
              {Insights.map((item, index) => (
                <div key={index}>
                  <div
                    className={`${styles["single-card"]}`}
                    // style={{ width: "18rem" }}
                    key={index}
                  >
                    <img
                      className={`${styles["card-img-top"]}`}
                      src="/images/contact/insight.png"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className={`${styles["upper-p"]}`}>{item.subtitle}</p>
                      <h5 className={`${styles["card-title-h2"]}`}>
                        {item.title}
                      </h5>
                      <p className={`${styles["card-text-p"]}`}>{item.desc}</p>
                    </div>
                  </div>
                  <div className={styles["lowercontent"]}>
                    Jan 5,2022 <div className={styles["bullets"]}></div> 5 min
                    Read
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <Link
          href="/blog"
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

export default NewLastestInsighr;
