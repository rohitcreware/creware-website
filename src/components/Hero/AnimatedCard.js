import React from "react";
import styles from './AnimatedCard.module.scss'

const AnimatedCard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h2 className={styles["card-title-animation"]}>
                  
                </h2>
                <h3 >Design</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className={`${styles["card-body-animation"]} card`}>
              <div className="">
                <h2 className={styles["card-title-animation"]} >
                  2
                </h2>
                <h3 className={styles["card-desc-animation"]}>Technology</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title-animation">
                  2
                </h2>
                <h3>Business</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedCard;
