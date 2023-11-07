import React, { useEffect, useRef, useState } from "react";
import styles from "./NewTestimonial.module.scss";
import {
  Arrowb,
  Hover2,
  SmallArrowb,
  VerySmallArrowb,
} from "@/components/Svgs/contactus";
const TestRightArrow = (props) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [hover1, setHover1] = useState(false);
  let big;
  let small;
  let displace;
  if (screenWidth > 769) {
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
  useEffect(() => {
    if (window !== undefined) {
      setScreenWidth(window.screen.width);
    }
  });



  return (
    <div onClick={props.onClick}>
      <div
        className={`${styles["arrow-div1"]}`}
        onClick={props.isButtonDisabled ? () => {} : props.onClickChange}
        disabled={props.isButtonDisabled}
      >
        <div
          style={{ cursor: "pointer", zIndex: "1" }}
          // onClick={() => handleClick("left")}

          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
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
      </div>
    </div>
  );
};

export default TestRightArrow;
