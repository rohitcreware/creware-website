import {
  Arrowa,
  Arrowb,
  Hover1,
  Hover2,
  SmallArrowa,
  SmallArrowb,
  VerySmallArrowa,
  VerySmallArrowb,
} from "@/components/Svgs/contactus";
import React, { useEffect, useRef, useState } from "react";
import { test } from "../../../../Json/Testimonials";
import styles from "./Testimonials.module.scss";
import axios from "axios";

const Testimonial = () => {
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
  const cardScrollDuration = 200;
  const apiUrl = "https://strapi-home-k9zk.onrender.com/api/testimonials";

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const info = response.data.data;

        setData(info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  let big;
  let small;
  let displace;
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

  const handleThumbClick = (e) => {
    e.preventDefault();
    // setIsThumbClicked(!isThumbClicked);
  };

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
    // updateCardScrollPosition(scrollbarThumbPosition);
  };

  const updateCardScrollPosition = (newPosition) => {
    const container = cardRef.current;
    const containerScrollLeft =
      (newPosition / 100) * (container.scrollWidth - container.clientWidth);
    smoothScrollTo(container, containerScrollLeft, cardScrollDuration);
  };
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScrollTo = (element, to, duration) => {
    let start = element.scrollLeft;
    let change = to - start;
    let currentTime = 0;
    const increment = 20;

    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
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
    if (scrollbarThumbPosition > 5) {
      const newScrollPosition = scrollbarThumbPosition - 5;
      setScrollbarThumbPosition(scrollbarThumbPosition - 5);
      const container = cardRef.current;
      const containerScrollLeft =
        (newScrollPosition / 100) *
        (container.scrollWidth - container.clientWidth);
      container.scrollLeft = containerScrollLeft;
      smoothScrollTo(container, containerScrollLeft, cardScrollDuration);
    } else {
      const container = cardRef.current;
      setScrollbarThumbPosition(0);
      container.scrollLeft = 0;
      smoothScrollTo(container, 0, cardScrollDuration);
    }
  };

  const scrollRight = () => {
    if (scrollbarThumbPosition < 89) {
      const newScrollPosition = scrollbarThumbPosition + 5;
      setScrollbarThumbPosition(newScrollPosition);
      const container = cardRef.current;
      const containerScrollLeft =
        (newScrollPosition / 100) *
        (container.scrollWidth - container.clientWidth);
      container.scrollLeft = containerScrollLeft;
      smoothScrollTo(container, containerScrollLeft, cardScrollDuration);
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
    <>
      <div className={`${styles["base-div-tryal"]}`}>
        <div className={`${styles["test"]} container-fluid`}>
          <div className={`${styles["main-row"]} `} ref={cardRef}>
            {data?.map((item, index) => (
              <div
                className={`${styles["card-main"]} col-12 col-md-6 col-lg-3`}
                key={index}
              >
                <div
                  className={`${styles["main-test-div"]} d-flex align-items-center justify-content-center flex-coulmn`}
                >
                  <img
                    src={item.attributes.img}
                    className={`${styles["test-img"]} z-3 postion-relative ${styles.nTop}`}
                    alt={`Testimonial ${item.attributes.description}`}
                  />
                  <div className={`${styles["box-test"]}`}>
                    <p className={`${styles["box-test-p"]} text-white`}>
                      {item.attributes.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles["scroll-row"]} row`}>
            <div className="col-8">
              <div className={`${styles["track"]} `}>
                <div
                  className={`${styles["thumb"]} `}
                  style={{
                    width: `${scrollbarThumbWidth}%`,
                    // left: `${scrollbarThumbPosition}%`,
                    left: displace
                      ? isDragging
                        ? scrollbarThumbPosition <= 88
                          ? scrollbarThumbPosition + "%"
                          : `${88}%`
                        : scrollbarThumbPosition <= 88
                        ? `${scrollbarThumbPosition}%`
                        : `${88}%`
                      : scrollbarThumbPosition <= 96
                      ? `${scrollbarThumbPosition}%`
                      : `${96}%`,
                    height: "0.7rem",
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
            <div className="col-4">
              <div className={`${styles["arrow-row"]} row`}>
                <div className={`${styles["arrow-div"]} col-5 `}>
                  <div
                    style={{ cursor: "pointer", zIndex: "1" }}
                    onClick={() => handleClick("left")}
                    
                  >
                    {small ? (
                      big ? (
                        hover1 ? (
                          <Hover2 />
                        ) : (
                          <Arrowb />
                        )
                      ) : (
                        <SmallArrowb />
                      )
                    ) : (
                      <VerySmallArrowb />
                    )}
                  </div>
                  <div
                    onClick={() => handleClick("right")}
                    style={{ cursor: "pointer", zIndex: "1" }}
                    
                  >
                    {small ? (
                      big ? (
                        hover2 ? (
                          <Hover1 />
                        ) : (
                          <Arrowa />
                        )
                      ) : (
                        <SmallArrowa />
                      )
                    ) : (
                      <VerySmallArrowa />
                    )}
                  </div>
                </div>
                {/* <div
                  className={`${styles["custom-button"]} col-7`}
                  onMouseEnter={() => setHover3(true)}
                  onMouseLeave={() => setHover3(false)}
                >
                 View more 
                  {small?big ? hover3 ? <HoverArrow />: <ViewArrow />: hover3 ? <HoverArrowSmall />: <ViewArrowSmall/>:hover3 ? <HoverArrowVerySmall />: <ViewArrowVerySmall/>}
                  
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
