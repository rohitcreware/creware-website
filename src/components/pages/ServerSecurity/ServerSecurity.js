"use client";
import React from "react";
import Image from "next/image";

import styles from "./ServerSecurity.module.scss";
import ServerSecurityCardAnimation from "@/components/Animations/ServerSecurityCardAnimation/ServerSecurityCardAnimation";
import DigitalDeviceCard from "./DigitalDeviceCard/DigitalDeviceCard";
import LatestInsights from "../ContactUs/LatestInsights";
import QueryForm from "../Hero/QueryHome";

import four_boxes from "../../../../public/images/security-server/four_boxes.gif";
import lightning_bg from "../../../../public/images/security-server/lightning_bg.gif";
import security_lock from "../../../../public/images/security-server/security_lock.png";

const ServerSecurity = () => {
  return (
    <div className={styles["main"]}>
      <div className={`${styles["top"]}`}>
        <div className="container">
          <div className={`${styles["top_left"]}`}>
            <h1 className={styles["slideUp"]}>
              CHOOSE <span>SERVER SECURITY</span> for businesses of all types
              and sizes
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
              tempus sed tempus. Et pharetra gravida sed sit gravida. Id at
              morbi dignissim mauris. Vulputate
            </p>
          </div>
        </div>
        <div className={`${styles["lightning_bg"]}`}>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={lightning_bg}
            alt="lightning_bg"
          />
        </div>
        <div className={styles["security_lock"]}>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={security_lock}
            alt="security_lock"
          />
        </div>
      </div>

      <div className="container">
        {/* digital device */}

        <div className={styles["digital_device"]}>
          <h1 className={styles["title"]}>
            comprehensive protection For <span>Digital Device</span>
          </h1>
          <p className={styles["para"]}>
            Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
            tempus sed tempus. Et pharetra gravida sed sit gravida. Id at morbi
            dignissim mauris. Vulputate
          </p>

          <div className={`${styles["bottom"]} row gx-5`}>
            <div className={`col-12 col-lg-8`}>
              <div
                className="d-flex align-items-center"
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  src={four_boxes}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "90%" }}
                  alt="four_boxes"
                />
              </div>
            </div>
            <div className={`${styles["bottom_right"]} col-11 col-lg-4`}>
              <DigitalDeviceCard />
            </div>
          </div>
        </div>

        {/* managed_services */}
        <div className={styles["managed_services"]}>
          <h1 className={styles["title"]}>
            Managed <span>Services</span>
          </h1>
          <p className={styles["para"]}>
            Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
            tempus sed tempus. Et pharetra gravida sed sit gravida. Id at morbi
            dignissim mauris. Vulputate
          </p>

          {/* cards */}
          <div className={`${styles["cards"]} row gy-5 `}>
            <ServerSecurityCardAnimation />
          </div>

          <LatestInsights />
          <QueryForm />
        </div>
      </div>
    </div>
  );
};

export default ServerSecurity;
