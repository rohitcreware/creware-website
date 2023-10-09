"use client";

import React from "react";
import styles from "./RightArrowTowardsButton.module.scss";
import { motion } from "framer-motion";

const RightArrowTowardsButton = ({ from, to, duration, hover }) => {
  return (
    <div className={`${styles["button-section"]}`}>
      <motion.div
        initial={from ? { x: from } : { x: 0 }}
        animate={hover ? (to ? { x: to } : { x: "90%" }) : ""}
        transition={duration ? { duration: duration } : { duration: 1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="30"
          viewBox="0 0 26 40"
          fill="none"
        >
          <path
            d="M7.55121 0.932617L0.258789 8.08003L11.7183 20.7255L0.258789 33.9207L7.55121 39.9685L25.7822 20.7255L7.55121 0.932617Z"
            fill="#d0021b"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default RightArrowTowardsButton;
