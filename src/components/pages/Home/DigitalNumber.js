"use client";
import React, { useRef, useState } from "react";
import styles from "./DigitalNumber.module.scss";
import { motion, useInView } from "framer-motion";

const DigitalNumber = ({ main_align_class, titleDisable }) => {
  const digitalRef = useRef(null);
  const digitalInView = useInView(digitalRef, { once: true });

  const [firstNumber] = useState([5, 9, 8, 7, 6, 5, 4, 9, 5]);
  const [secondNumber] = useState([6, 0, 8, 7, 6, 2, 4, 3, 6]);
  const [thirdNumber] = useState([3, 9, 8, 4, 5, 2, 4, 3, 3]);

  return (
    <>
      <div className={styles["main"]}>
        <div className="container">
          <div className={`${styles["digital-container"]} ${main_align_class}`}>
            {titleDisable ? (
              ""
            ) : (
              <h2 className={`${styles["sec-3-h2"]}`}>
                Our <span>Digital Numbers...</span>
              </h2>
            )}
            <div className={`${styles["digital-row"]} row`} ref={digitalRef}>
              <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <div className={`${styles["digital-div"]} col-md-4`}>
                    {firstNumber.map((number, index) => (
                      <h3
                        className={`${styles["digital-h3"]} ${
                          digitalInView ? styles["digital_animation"] : ""
                        }`}
                        key={index}
                      >
                        {number}
                      </h3>
                    ))}
                  </div>
                  <div className={`${styles["digital-div"]} col-md-4`}>
                    {thirdNumber.map((number, index) => (
                      <h3
                        className={`${styles["digital-h3"]}  ${
                          digitalInView ? styles["digital_animation"] : ""
                        }`}
                        key={index}
                      >
                        {number}
                      </h3>
                    ))}
                  </div>
                  <div className={`${styles["digital-div"]} col-md-4`}>
                    {thirdNumber.map((number, index) => (
                      <h3
                        className={`${styles["digital-h3"]}  ${
                          digitalInView ? styles["digital_animation"] : ""
                        }`}
                        key={index}
                      >
                        {number}
                      </h3>
                    ))}
                  </div>
                </div>
                <h1 className={styles["digits_heading"]}>Coffee Cups</h1>
              </div>

              <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <div className={`${styles["digital-div"]} col-md-4`}>
                    {secondNumber.map((number, index) => (
                      <motion.h3
                        className={`${styles["digital-h3"]}  ${
                          digitalInView ? styles["digital_animation"] : ""
                        }`}
                        key={index}
                      >
                        {number}
                      </motion.h3>
                    ))}
                  </div>
                  <div className={`${styles["digital-div"]} col-md-4`}>
                    {firstNumber.map((number, index) => (
                      <h3
                        className={`${styles["digital-h3"]}  ${
                          digitalInView ? styles["digital_animation"] : ""
                        }`}
                        key={index}
                      >
                        {number}
                      </h3>
                    ))}
                  </div>
                  <div className={`${styles["digital-div"]} col-md-4`}>
                    {thirdNumber.map((number, index) => (
                      <h3
                        className={`${styles["digital-h3"]}  ${
                          digitalInView ? styles["digital_animation"] : ""
                        }`}
                        key={index}
                      >
                        {number}
                      </h3>
                    ))}
                  </div>
                </div>
                <h1 className={styles["digits_heading"]}>Projects</h1>
              </div>

              <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <div className={`${styles["digital-div"]} col-md-4`}>
                    {thirdNumber.map((number, index) => (
                      <h3
                        className={`${styles["digital-h3"]}  ${
                          digitalInView ? styles["digital_animation"] : ""
                        }`}
                        key={index}
                      >
                        {number}
                      </h3>
                    ))}
                  </div>
                  <div className={`${styles["digital-div"]} col-md-4`}>
                    {secondNumber.map((number, index) => (
                      <h3
                        className={`${styles["digital-h3"]}  ${
                          digitalInView ? styles["digital_animation"] : ""
                        }`}
                        key={index}
                      >
                        {number}
                      </h3>
                    ))}
                  </div>
                  <div className={`${styles["digital-div"]} col-md-4`}>
                    {firstNumber.map((number, index) => (
                      <h3
                        className={`${styles["digital-h3"]}  ${
                          digitalInView ? styles["digital_animation"] : ""
                        }`}
                        key={index}
                      >
                        {number}
                      </h3>
                    ))}
                  </div>
                </div>
                <h1 className={styles["digits_heading"]}>Working Days</h1>
              </div>

              <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <div className={`${styles["digital-div"]} col-md-4`}>
                    {secondNumber.map((number, index) => (
                      <h3
                        className={`${styles["digital-h3"]}  ${
                          digitalInView ? styles["digital_animation"] : ""
                        }`}
                        key={index}
                      >
                        {number}
                      </h3>
                    ))}
                  </div>
                  <div className={`${styles["digital-div"]} col-md-4`}>
                    {firstNumber.map((number, index) => (
                      <h3
                        className={`${styles["digital-h3"]}  ${
                          digitalInView ? styles["digital_animation"] : ""
                        }`}
                        key={index}
                      >
                        {number}
                      </h3>
                    ))}
                  </div>
                  <div className={`${styles["digital-div"]} col-md-4`}>
                    {thirdNumber.map((number, index) => (
                      <h3
                        className={`${styles["digital-h3"]}  ${
                          digitalInView ? styles["digital_animation"] : ""
                        }`}
                        key={index}
                      >
                        {number}
                      </h3>
                    ))}
                  </div>
                </div>
                <h1 className={styles["digits_heading"]}>Clients</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalNumber;
