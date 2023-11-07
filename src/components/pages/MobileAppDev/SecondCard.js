import React, { useRef } from "react";
import styles from "./SecondCard.module.scss";
import { secondCard } from "../../../../Json/MobileApp";
import { useInView, motion } from "framer-motion";

const SecondCard = () => {
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
        // type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className={`${styles["main"]}`}
      variants={cardIsInView ? "" : variant}
      initial="offscreen"
      whileInView="onscreen"
      ref={cardRef}
    >
      <div
        className={`${styles["main-row"]} row gy-3 gy-md-5 gy-lg-0 justify-content-center`}
      >
        {secondCard.map((item, index) => (
          <div
            className={`${styles["main-card"]} col-10 col-md-6 col-lg-3`}
            key={index}
          >
            <div
              className={`d-flex flex-column align-items-center align-items-md-start`}
            >
              {item.img}
              <div className="card-title">
                <p id={`${styles["title"]}`}>{item.head}</p>
              </div>
              <p id={`${styles["desc"]}`}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SecondCard;
