"use client";

import React from "react";
import styles from "./ClientSection.module.scss";
import { Image } from "react-bootstrap";

const ClientSection = () => {
  return (
    <div className={`${styles["main"]}`}>
      <div className={`${styles["top"]} row`}>
        <div className={`${styles["left"]} col-12 col-lg-6`}>
          <h2 className={styles["client"]}>Client</h2>

          <h2 className={styles["albany"]}>
            ALBANY <span>BAHAMAS</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
            tempus sed tempus. Et pharetra gravida sed sit gravida. Id at morbi
            dignissim mauris. Vulputate et{" "}
          </p>

          <div className={styles["bottom"]}>
            <div className={styles["content"]}>
              UI UX <div className={styles["bullets"]}></div>
              Web <div className={styles["bullets"]}></div> Development
            </div>
          </div>
        </div>
        <div className={`${styles["right"]} col-12 col-lg-6`}>
          <Image
            src="/images/project-details/bahamas.png"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
