"use client"

import React from 'react'
import { motion } from 'framer-motion'
import styles from './GroupIconsSection.module.scss'

const GroupIconsSection = () => {
  return (
    <motion.div className={styles["main"]}>
      <div className={styles["img1"]}>
        <motion.img
          src="/images/Partners/1.png"
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
          src="/images/Partners/2.png"
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
          src="/images/Partners/3.png"
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
          src="/images/Partners/4.png"
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
          src="/images/Partners/5.png"
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
          src="/images/Partners/6.png"
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
          src="/images/Partners/7.png"
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
          src="/images/Partners/8.png"
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
          src="/images/Partners/9.png"
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
  )
}

export default GroupIconsSection