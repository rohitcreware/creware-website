import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import styles from "./our_success_cards.module.scss";
import { AttachBorder } from "@/components/Svgs/about";
import { our_success_cards } from "../../../../../Json/Aboutus";

// AttachBorder
const OurSuccessCards = () => {
  const cardRef = useRef(our_success_cards.map(() => React.createRef()));
  const cardIsInView = useInView({root:cardRef.current}, {
    once: true,
  });

  useEffect(() => {
  }, [cardIsInView]);

  const slideDown = {
    offScreen: { marginBottom: "6rem" },
    onScreen: { marginBottom: "2rem", transition: { duration: 1 } },
  };
  const slideRight = {
    offScreen: { x: "100%" },
    onScreen: { x: "0%", transition: { duration: 1 } },
  };

  return (
    <div className={styles["main"]}>
      {our_success_cards.map((item, index) => (
        <div className={styles["card"]} key={index}>
          <motion.div
            className={styles["left"]}
            variants={cardIsInView ? "" : slideDown}
            initial="offScreen"
            whileInView="onScreen"
            ref={cardRef.current[index]}
          >
            <h6 className={styles["years"]}>{item.year}</h6>
            <AttachBorder />
          </motion.div>

          <motion.div
            variants={cardIsInView ? "" : slideRight}
            initial="offScreen"
            whileInView="onScreen"
            className={styles["info"]}
          >
            <div className={styles["middle"]}>
              <div className={styles["horizontal_line"]} />
              {item.svg}
            </div>
            <div className={styles["right"]}>
              <h2 className={styles["title"]}>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default OurSuccessCards;
