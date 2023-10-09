import React from "react";
import styles from "./FilterCards.module.scss";

const FilterCards = ({ item }) => {
  return (
    <div className={`${styles["main"]} row d-flex align-items-center`}>
      <div className={`${styles["left"]}  col-4`}>
        <div className={styles["title"]}>{item.title}</div>
        <div className={styles["subTitle"]}>{item.designation}</div>
      </div>
      <div className={`${styles["middle"]}  col-4 d-flex flex-column`}>
        <div className={styles["subTitle"]}>{item.location}</div>
        <div className={styles["subTitle"]}>{item.duration}</div>
      </div>
      <div className={`${styles["right"]}  col-4`}>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default FilterCards;
