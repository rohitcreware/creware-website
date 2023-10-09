"use client";

import React from "react";
import styles from "./ServerSecurityCardAnimation.module.scss";
import { serverSecurityCards } from "../../../../Json/ServerSecurity";

const ServerSecurityCardAnimation = () => {
  return (
    <>
      {serverSecurityCards.map((item, index) => (
        <div className="col-12 col-md-6 col-lg-4 mt-3" key={index}>
          <div className={styles["box"]}>
            <div className={styles["left"]}>
              <div className={styles["right"]}>
                <div className={styles["main"]}>
                  {item.img}
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServerSecurityCardAnimation;
