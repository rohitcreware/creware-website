import React from "react";

import styles from "./DevelopCardAnime2.module.scss";
import { EnterSoftwareCardData } from "../../../../../Json/enterprise-software";

const DevelopCardAnime2 = () => {
  return (
    <div className="row m-4 me-0">
      {EnterSoftwareCardData.map((item, index) => {
        return (
          <div
            className={`col-12 col-sm-6 col-md-4 mb-5 p-0 border border-0 ${styles["h-11"]} ms-3 ms-sm-0`}
            key={index}
          >
            <div className={`${styles.border} col-10`}>
              <div className={`p-4 color-card-bg ${styles.box}`}>
                <h3 className="fw-semibold fs-5">{item.title}</h3>
                <p className="fw-medium fs-13">{item.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DevelopCardAnime2;
