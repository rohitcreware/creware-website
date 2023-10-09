import React, { useState } from "react";

import styles from "./DevelopCardsAnime.module.scss";
import { useAnimation, motion, easeInOut } from "framer-motion";
import { EnterSoftwareCardData } from "../../../../../Json/enterprise-software";

const DevelopCardAnime = () => {
  const [controlsArray, setControlsArray] = useState(
    EnterSoftwareCardData.map(() => useAnimation())
  );

  const hoverVariants = {
    hidden: {
      y: 0,
      x: 0,
      border: "none",
    },
    visible: {
      y: 20,
      x: -20,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const borderVariants = {
    hidden: {
      border: "1px solid transparent",
    },
    visible: {
      border: "1px solid red",
      transition: {
        duration: 0.5, // Animation duration
        ease: easeInOut, // Easing function
        delay: 0.1, // Delay the animation by 0.5 seconds
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
    <div className={`${styles["main"]}`}>
      <div className={`row g-5`}>
        {EnterSoftwareCardData.map((item, index) => (
          <div className="col-12  col-md-6 col-lg-4" key={index}>
            <motion.div
              className="animatingBorder"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              animate={controlsArray[index]}
              variants={borderVariants}
            >
              <motion.div
                className={`${styles["single_card"]}`}
                initial="hidden"
                animate={controlsArray[index]}
                variants={hoverVariants}
              >
                <div className={`${styles["content"]}`}>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopCardAnime;
