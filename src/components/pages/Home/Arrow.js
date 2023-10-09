  "use client";

import React, { useEffect, useState } from "react";
import styles from "./Arrow.module.scss";
import {
  Arrowa,
  Arrowb,
  Hover1,
  Hover2,
  SmallArrowa,
  SmallArrowb,
} from "@/components/Svgs/contactus";
import { motion } from "framer-motion";

const Arrow = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  let big;
  if (screenWidth > 701) {
    big = true;
  } else {
    big = false;
  }

  useEffect(() => {
    if (window !== undefined) {
      setScreenWidth(window.screen.width);
    }
  });

  return (
    <>
      <div className="container-fluid row">
        <div className="col-md-7"></div>
        <div className={`${styles["below-row"]} col-5 d-flex`}>
          <div className={`${styles["arrow-div"]}`}>
            <motion.div
              onMouseEnter={() => setHover1(true)}
              onMouseLeave={() => setHover1(false)}
            >
              {" "}
              {big ? hover1 ? <Hover2 /> : <Arrowb /> : <SmallArrowb />}
            </motion.div>

            <div
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
            >
              {" "}
              {big ? hover2 ? <Hover1 /> : <Arrowa /> : <SmallArrowa />}
            </div>
          </div>
          <div className={`${styles["custom-button"]} `}>View more &lt;</div>
        </div>
      </div>
    </>
  );
};

export default Arrow;
