import React from "react";
import styles from "./LatestInsights.module.scss";
import { Insights } from "../../../../Json/LatestInsight";
import "./LatestInsights.module.scss";

import Arrow from "../Home/Arrow";

const LatestInsights = () => {
  return (
    <div>
      <h2 className={`${styles["insight-head"]}`}>Latest Insights :</h2>
      <div className={`${styles["test"]} container`}>
        <div className={`${styles["scroll-card"]}`}>
          {Insights.map((item, index) => (
            <div key={index}>
              <div
                className={`${styles["single-card"]}`}
                style={{ width: "18rem" }}
                key={index}
              >
                <img
                  className={`${styles["card-img-top"]}`}
                  src="/images/contact/insight.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className={`${styles["upper-p"]}`}>{item.subtitle}</p>
                  <h5 className={`${styles["card-title-h2"]}`}>{item.title}</h5>
                  <p className={`${styles["card-text-p"]}`}>{item.desc}</p>
                </div>
              </div>
              <div className={styles["content"]}>
                Jan 5,2022 <div className={styles["bullets"]}></div> 5 min Read
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles["arrow-insight"]}`} >
            <Arrow/>
          </div>
      </div>
    </div>
  );
};

export default LatestInsights;
