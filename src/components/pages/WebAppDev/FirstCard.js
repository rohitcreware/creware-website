"use client"
import React, { useRef } from "react";
import styles from "./FirstCard.module.scss";
import { UiUXDesign } from "../../../../Json/UiCardList";
import { firstCard } from "../../../../Json/WebApp";
import { motion, useInView } from "framer-motion";
const FirstCard = () => {
  const cardRef = useRef(null);
  const cardIsInView = useInView(cardRef, { once: true });
  const variant = {
    offscreen: {
      opacity: 0,
      y: 200,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div className={`${styles["main"]} container`}>
      <motion.div
        variants={cardIsInView ? "" : variant}
        initial="offscreen"
        whileInView="onscreen"
        className={`${styles["design_cards"]} row`}
        ref={cardRef}
      >
        {firstCard.map((item) => (
          <div className="col-12  col-md-6 col-lg-4">
            <div className={`${styles["single_card"]} row`}>
              <div className={`${styles["head"]} col-2`}>{item.img}</div>
              <div className="col-10">
                <h6>{item.head}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FirstCard;
