import React from "react";
import styles from "./Cards.module.scss";
export default function Cards({ cardDetails }) {
  return (
    <div
      className={`${styles.margin} col-12 col-sm-12 col-md-6 col-lg-4 mb-md-5 p-0 border border-0 ${styles["h-11"]} ms-3 ms-sm-0`}
      key={Math.random()}
    >
      <div className={`${styles.border} col-10`}>
        <div className={`p-4 pb-lg-2 pb-xl-4 color-card-bg ${styles.box}`}>
          <h3 className="fw-semibold fs-5 mb-4">{cardDetails.title}</h3>
          <p className="fw-medium fs-13">
            {cardDetails.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
