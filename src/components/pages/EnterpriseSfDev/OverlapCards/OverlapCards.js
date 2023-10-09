import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { OverlapCardsData } from "../../../../../Json/enterprise-software";

import styles from "./OverlapCards.module.scss";

const OverlapCards = () => {
  const [controlsArray, setControlsArray] = useState(
    OverlapCardsData.map(() => useAnimation())
  );

  const hoverVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
      },
    },
  };

  const handleHover = (index) => {
    const updatedControlsArray = [...controlsArray];
    updatedControlsArray[index].start("visible");
    setControlsArray(updatedControlsArray);
  };

  const handleMouseLeave = (index) => {
    const updatedControlsArray = [...controlsArray];
    updatedControlsArray[index].start("hidden");
    setControlsArray(updatedControlsArray);
  };

  return (
    <div className={`${styles["main"]} container`}>
      <div className={`row gy-3 gy-md-5 gy-lg-0`}>
        {OverlapCardsData.map((item, index) => (
          <div className="col-12  col-md-6 col-lg-4" key={index}>
            <div
              className={`${styles["single_card"]}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className={`${styles["head"]}`}>0{item.id}</div>
              <div className={`${styles["content"]}`}>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
              <motion.div
                className={styles["line_animation"]}
                initial="hidden"
                animate={controlsArray[index]}
                variants={hoverVariants}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverlapCards;
