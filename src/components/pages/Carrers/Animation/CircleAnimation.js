"use client";

import React from "react";
import styles from "./CircleAnimation.module.scss";
import { motion } from "framer-motion";

const CircleAnimation = () => {
  return (
    <motion.div className={styles["main"]}>
      <div className={styles["img1"]}>
        <motion.img
          src="/images/carrers/1.png"
          alt=""
          className="img-fluid"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        />
      </div>
      <div className={styles["img2"]}>
        <motion.img
          src="/images/carrers/2.png"
          alt=""
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        />
      </div>
      <div className={styles["img3"]}>
        <motion.img
          src="/images/carrers/3.png"
          alt=""
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        />
      </div>
      <div className={styles["img4"]}>
        <motion.img
          src="/images/carrers/4.png"
          alt=""
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        />
      </div>
      <div className={styles["img5"]}>
        <motion.img
          src="/images/carrers/5.png"
          alt=""
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        />
      </div>
      <div className={styles["img6"]}>
        <motion.img
          src="/images/carrers/6.png"
          alt=""
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        />
      </div>
      <div className={styles["img7"]}>
        <motion.img
          src="/images/carrers/7.png"
          alt=""
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        />
      </div>
      <div className={styles["img8"]}>
        <motion.img
          src="/images/carrers/8.png"
          alt=""
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        />
      </div>
      <div className={styles["img9"]}>
        <motion.img
          src="/images/carrers/9.png"
          alt=""
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        />
      </div>
    </motion.div>
  );
};

export default CircleAnimation;
