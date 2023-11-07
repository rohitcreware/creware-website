import React from "react";

import styles from "./OurMissionCards.module.scss";
import { ourMissionCardsData } from "../../../../../Json/Aboutus";
import Image from "next/image";

const OurMissionCards = () => {
  return (
    <div className={styles["main"]}>
      {ourMissionCardsData?.map((item, index) => {
        return (
          <div className={styles["card"]} key={index}>
            <h1 className={styles["title"]}>
              Our <span>{item.title}</span>
            </h1>

            <div className="row">
              <div
                className={`${styles["description"]} col-12 col-md-8 col-lg-7`}
              >
                <p>{item.description}</p>
              </div>
              <div className={`${styles[""]} d-none d-lg-block col-1 `}></div>
              <div className={`${styles["image"]} col-12 col-md-4`}>
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "100%" }}
                  alt="mission"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OurMissionCards;
