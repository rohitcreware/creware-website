"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./LatestInsights.module.scss";
import { Insights } from "../../../../Json/LatestInsight";
import {
  Arrowa,
  Arrowb,
  Hover1,
  Hover2,
  SmallArrowa,
  SmallArrowb,
  VerySmallArrowa,
  VerySmallArrowb
} from "@/components/Svgs/contactus";
import { HoverArrow, ViewArrow,HoverArrowSmall,ViewArrowSmall,ViewArrowVerySmall,HoverArrowVerySmall } from "@/components/Svgs/portfoliobar";

const LatestInsights = () => {
  const cardRef = useRef(null);
  const [scrollbarThumbPosition, setScrollbarThumbPosition] = useState(0);
  const [scrollbarThumbWidth, setScrollbarThumbWidth] = useState(0);
  const [leftMotion, setLeftMotion] = useState(0);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [initialThumbPosition, setInitialThumbPosition] = useState(0);
 
  let big;
  let small;
  let displace
  if (screenWidth > 992) {
    big = true;
  } else {
    big = false;
  }
  if (screenWidth > 550) {
    small = true;
  } else {
    small = false;
  }
  if (screenWidth > 800) {
    displace = true;
  } else {
    displace = false;
  }

  const handleThumbDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStartX(e.clientX);
    setInitialThumbPosition(scrollbarThumbPosition);
  };

  const handleThumbDrag = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    const newPosition =
      initialThumbPosition + (deltaX / cardRef.current.clientWidth) * 100;
    if (newPosition >= 0 && newPosition <= 100) {
      setScrollbarThumbPosition(newPosition);
      updateCardScrollPosition(newPosition);
    }
  };

  const handleThumbDragEnd = () => {
    setIsDragging(false);
  };

  const updateCardScrollPosition = (newPosition) => {
    const container = cardRef.current;
    const containerScrollLeft =
      (newPosition / 100) * (container.scrollWidth - container.clientWidth);
    container.scrollLeft = containerScrollLeft;
  };

  useEffect(() => {
    if (window !== undefined) {
      setScreenWidth(window.screen.width);
    }
  });

  useEffect(() => {
    const container = cardRef.current;
    const handleScroll = () => {
      if (container) {
        // Calculate the scrollbar thumb width
        const scrollbarThumbWidth =
          (container.clientWidth / container.scrollWidth) * 65;
        setScrollbarThumbWidth(scrollbarThumbWidth);

        setLeftMotion(scrollbarThumbWidth + 9);
        const scrollThumbPosition =
          (container.scrollLeft /
            (container.scrollWidth - container.clientWidth)) *
          100;
        setScrollbarThumbPosition(scrollThumbPosition);
      }
    };

    // Set an initial scroll position to make the thumb visible
    container.scrollLeft = 1;

    // Attach the scroll event listener
    container.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollbarThumbPosition > 30) {
      const newScrollPosition = scrollbarThumbPosition - 20;
      setScrollbarThumbPosition(scrollbarThumbPosition - 20); // Adjust scrolling distance as needed
      // cardRef.current.scrollLeft = scrollbarThumbPosition - 30;
      const container = cardRef.current;
      const containerScrollLeft =
        (newScrollPosition / 100) *
        (container.scrollWidth - container.clientWidth);
      container.scrollLeft = containerScrollLeft;
    } else {
      const container = cardRef.current;
      setScrollbarThumbPosition(0);
      container.scrollLeft = 0;
    }
  };

  const scrollRight = () => {
  
    if (scrollbarThumbPosition < 89) {
      const newScrollPosition = scrollbarThumbPosition + 20;
      setScrollbarThumbPosition(scrollbarThumbPosition + 20); // Adjust scrolling distance as needed
      // cardRef.current.scrollLeft = scrollbarThumbPosition + 30;
      const container = cardRef.current;
      const containerScrollLeft =
        (newScrollPosition / 100) *
        (container.scrollWidth - container.clientWidth);
      container.scrollLeft = containerScrollLeft;
     
    } else {
      const container = cardRef.current;
      // setScrollbarThumbPosition(89);
      // container.scrollLeft = 89;
    }
  };

  const handleClick = (direction) => {
    if (direction === "left") {
      scrollLeft();
    } else {
      scrollRight();
    }
  };
  return (
    <div>
      <h2 className={`${styles["insight-head"]}`}>Latest Insights :</h2>
      <div className={`${styles["test"]} container`}>
        <div className={`${styles["scroll-card"]}`} ref={cardRef}>
          {Insights.map((item, index) => (
            <div key={index}>
              <div
                className={`${styles["single-card"]}`}
                style={{ width: "18rem" }}
                key={index}
              >
                <img
                  className={`${styles["card-img-top"]}`}
                  src="/images/contact/insight.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className={`${styles["upper-p"]}`}>{item.subtitle}</p>
                  <h5 className={`${styles["card-title-h2"]}`}>{item.title}</h5>
                  <p className={`${styles["card-text-p"]}`}>{item.desc}</p>
                </div>
              </div>
              <div className={styles["content"]}>
                Jan 5,2022 <div className={styles["bullets"]}></div> 5 min Read
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles["scroll-row"]} row`}>
          <div className="col-7">
            <div className={`${styles["track"]} `}>
              <div
                className={`${styles["thumb"]} `}
                style={{
                    width: `${scrollbarThumbWidth}%`,
                    left: displace?isDragging? initialThumbPosition +(scrollbarThumbPosition - dragStartX) +"%": scrollbarThumbPosition <= 88? `${scrollbarThumbPosition}%`: `${88}%`:scrollbarThumbPosition <= 96? `${scrollbarThumbPosition}%`: `${96}%`
                    ,height: "0.7rem",
                    cursor: "pointer",
                  }}
                onMouseDown={(e) => handleThumbDragStart(e)}
                onMouseMove={(e) => handleThumbDrag(e)}
                onMouseUp={() => handleThumbDragEnd()}
                onMouseLeave={() => handleThumbDragEnd()}
              >
                .
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className={`${styles["arrow-row"]} row`}>
              <div className={`${styles["arrow-div"]} col-5 `}>
                <div
                  style={{ cursor: "pointer", zIndex: "1" }}
                  onClick={() => handleClick("left")}
                  className={`${styles["scroll-button"]}`}
                  onMouseEnter={() => setHover1(true)}
                  onMouseLeave={() => setHover1(false)}
                >
                 

                 {small?big ? hover1 ? <Hover2 /> : <Arrowb /> : <SmallArrowb />:<VerySmallArrowb/>}
                </div>
                <div
                  onClick={() => handleClick("right")}
                  style={{ cursor: "pointer", zIndex: "1" }}
                  className={`${styles["scroll-button"]}`}
                  onMouseEnter={() => setHover2(true)}
                  onMouseLeave={() => setHover2(false)}
                >
                {small?big ? hover2 ? <Hover1 /> : <Arrowa /> : <SmallArrowa />:<VerySmallArrowa/>}
                </div>
              </div>
              <div
                className={`${styles["custom-button"]}  col-7`}
                onMouseEnter={() => setHover3(true)}
                onMouseLeave={() => setHover3(false)}
              >
                 View more 
                  {small?big ? hover3 ? <HoverArrow />: <ViewArrow />: hover3 ? <HoverArrowSmall />: <ViewArrowSmall/>:hover3 ? <HoverArrowVerySmall />: <ViewArrowVerySmall/>}
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestInsights;
