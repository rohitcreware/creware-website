"use client";
import React from "react";

import styles from "./EnterpriseSoftwareDevelopment.module.scss";
import mainbg from "../../../../public/images/enterprise-software/top_bg.gif";
import Image from "next/image";
import OverlapCards from "./OverlapCards/OverlapCards";
import DevelopCardAnime from "./DevlopCardsAnime/DevelopCardAnime";
import ContactusBtnSec from "./ContactusBtnSec/ContactusBtnSec";
import ContactUs from "../ContactUs/Contact";
import LatestInsights from "../ContactUs/LatestInsights";
import QueryForm from "../Hero/QueryHome";
import DevelopCardAnime2 from "./DevlopCardsAnime/DevelopCardAnime2";

const EnterpriseSoftwareDevelopment = () => {
  return (
    <div className={`${styles["main"]}`}>
      <div className={`${styles["top"]}`}>
        <div className="container">
          <div className={`${styles["top_left"]}`}>
            <h1 className={styles["slideUp"]}>
              TRANSFORM YOUR BUSINESS WITH OUR SCALABLE AND SECURE
              <span> ENTERPRISE SOFTWARE</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
              tempus sed tempus. Et pharetra gravida sed sit gravida. Id at
              morbi dignissim mauris. Vulputate
            </p>
          </div>
        </div>
        <div className={`${styles["lightning_bg"]}`}>
          <Image width={0} height={0} sizes="100vw" src={mainbg} alt="" />
        </div>
        <div className={styles["security_lock"]}></div>
      </div>

      {/* OverlapCards */}
      <OverlapCards />

      {/* Enterprise Software Development */}
      <div className={`${styles["enterprise_software"]}`}>
        <div className="container">
          <div className={`${styles["main"]}`}>
            <div className={`${styles["heading"]}`}>
              <h1>
                <span>Enterprise Software Development</span> We Provide
              </h1>
              <p>
                Et pharetra gravida sed sit gravida. Id at morbi dignissim
                mauris. Vulputate Et pharetra gravida sed sit gravida. Id at
                morbi dignissim mauris. Vulputate
              </p>
            </div>

            {/* anime cards */}
            <DevelopCardAnime />
          </div>
        </div>
      </div>

      {/* contact us Button sec*/}
      <ContactusBtnSec />

      {/* contact sec */}
      <LatestInsights />

      <QueryForm />
    </div>
  );
};

export default EnterpriseSoftwareDevelopment;
