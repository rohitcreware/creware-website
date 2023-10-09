"use client";

import React, { useEffect, useState } from "react";
import ReactOdometer from "react-odometerjs";
import styles from "./CounterNumber.module.scss";

const CounterNumber = () => {
  const [odometerValue, setOdometerValue] = useState(0);

  useEffect(() => {
    setOdometerValue(9);
  }, []);

  return (
    <div className="container">
      <div className={styles["main"]}>
        <div className="row gx-5">
          <div className="col-12 col-md-6 col-lg-3  column-with-overflow">
            <div>
              <div className="d-flex  justify-content-left">
                <div className={`${styles["single_digit"]}`}>
                  <ReactOdometer
                    style={{ padding: "40px 20PX " }}
                    value={odometerValue}
                    format="d"
                    className={styles["custom-odometer"]}
                  />
                </div>
                <div className={`${styles["single_digit"]}`}>
                  <ReactOdometer
                    style={{ padding: "40px 20PX " }}
                    value={odometerValue}
                    format="d"
                    className={styles["custom-odometer"]}
                  />
                </div>
                <div className={`${styles["single_digit"]}`}>
                  <ReactOdometer
                    style={{ padding: "40px 20PX " }}
                    value={odometerValue}
                    format="d"
                    className={styles["custom-odometer"]}
                  />
                </div>
              </div>
              <p style={{ textAlign: "center", color: "white" }}>
                bbwshdv uygd wuygu y
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3  column-with-overflow ">
            <div>
              <div className="d-flex justify-content-left">
                <div className={`${styles["single_digit"]}`}>
                  <ReactOdometer
                    style={{ padding: "40px 20PX " }}
                    value={odometerValue}
                    format="d"
                    className={styles["custom-odometer"]}
                  />
                </div>
                <div className={`${styles["single_digit"]}`}>
                  <ReactOdometer
                    style={{ padding: "40px 20PX " }}
                    value={odometerValue}
                    format="d"
                    className={styles["custom-odometer"]}
                  />
                </div>
                <div className={`${styles["single_digit"]}`}>
                  <ReactOdometer
                    style={{ padding: "40px 20PX " }}
                    value={odometerValue}
                    format="d"
                    className={styles["custom-odometer"]}
                  />
                </div>
              </div>
              <p style={{ textAlign: "center", color: "white" }}>
                bbwshdv uygd wuygu y
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3  column-with-overflow ">
            <div className="d-flex justify-content-center">
              <div className={`${styles["single_digit"]}`}>
                <ReactOdometer
                  style={{ padding: "40px 20PX " }}
                  value={odometerValue}
                  format="d"
                  className={styles["custom-odometer"]}
                />
              </div>
              <div className={`${styles["single_digit"]}`}>
                <ReactOdometer
                  style={{ padding: "40px 20PX " }}
                  value={odometerValue}
                  format="d"
                  className={styles["custom-odometer"]}
                />
              </div>
              <div className={`${styles["single_digit"]}`}>
                <ReactOdometer
                  style={{ padding: "40px 20PX " }}
                  value={odometerValue}
                  format="d"
                  className={styles["custom-odometer"]}
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3  column-with-overflow ">
            <div className="d-flex justify-content-center">
              <div className={`${styles["single_digit"]}`}>
                <ReactOdometer
                  value={odometerValue}
                  format="d"
                  style={{ padding: "40px 20PX " }}
                  className={styles["custom-odometer"]}
                />
              </div>
              <div className={`${styles["single_digit"]}`}>
                <ReactOdometer
                  value={odometerValue}
                  format="d"
                  style={{ padding: "40px 20PX " }}
                  className={styles["custom-odometer"]}
                />
              </div>
              <div className={`${styles["single_digit"]}`}>
                <ReactOdometer
                  value={odometerValue}
                  format="d"
                  style={{ padding: "40px 20PX " }}
                  className={styles["custom-odometer"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterNumber;
