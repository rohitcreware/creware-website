import React from "react";
import styles from "./ExploreCards.module.scss";
import Image from "next/image";
import { explore_cards } from "../../../../../Json/Aboutus";

const ExploreCards = () => {
  return (
    <div className={styles["main"]}>
      <div className="row g-3 g-md-5">
        {explore_cards?.map((item, index) => (
          <div className={`${styles["card"]} col-6 col-md-4`} key={index}>
            <div>
              <Image
                src={item.image}
                width={0}
                height={0}
                style={{ width: "100%", height: "100%" }}
                alt="explore"
              />
            </div>
            <h3>{item.title}</h3>
            <h6>{item.designation}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCards;
