"use client";

import React from "react";
import styles from "./Hero.module.scss";
import { motion, useAnimation } from "framer-motion";

const BackOnTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section>
        <motion.div
          className={styles["back-div"]}
          style={{ textAlign: "center" }}
          onClick={scrollToTop}
        >
          Back on top
          <img
            className={styles["back-div-img"]}
            src="https://i.postimg.cc/cJ6rrW8w/Vector-2.png"
            alt=""
          />
        </motion.div>
      </section>
    </>
  );
};

export default BackOnTop;
