"use client";
import React, { useRef } from "react";
import LatestInsights from "../ContactUs/LatestInsights";
import QueryForm from "../Hero/QueryHome";
import Thread from "./Thread";
import styles from "./Testing.module.scss";
import { motion, useInView } from "framer-motion";
import first from "../../../../public/images/testing/cardimage1.png";
import second from "../../../../public/images/testing/second.png";
import third from "../../../../public/images/testing/third.png";
import fourth from "../../../../public/images/testing/fourth.png";
import fifth from "../../../../public/images/testing/fifth.png";
import sixth from "../../../../public/images/testing/sixth.png";
import testback from "../../../../public/images/testing/background.gif";
import Image from "next/image";
import OverlapCards from "../EnterpriseSfDev/OverlapCards/OverlapCards";

const Testing = () => {
  const cardRef = useRef(null);
  const cardIsInView = useInView(cardRef, { once: true });
  const variant = {
    offscreen: {
      opacity: 0,
      y: 200,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <>
      {/* desc section */}
      <section>
        <div className={styles["main"]}>
          <div className={`${styles["back_animation"]} d-none d-lg-block`}>
            <Image src={testback} className={`${styles["backani"]}`} />
          </div>
          <div className="container">
            <div className={`${styles["top"]}`}>
              <div className={`${styles["top_left"]}`}>
                <motion.h1
                  variants={cardIsInView ? "" : variant}
                  initial="offscreen"
                  whileInView="onscreen"
                  ref={cardRef}
                  className={styles["slideUp"]}
                >
                  Unleashing The Full Potential Of Your Software: Our
                  Comprehensive
                  <span> Testing Services</span>
                </motion.h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ipsum molestie
                  pulvinar tempus sed tempus. Et pharetra gravida sed sit
                  gravida. Id at morbi dignissim mauris. Vulputate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={`${styles["overdiv"]}`}>
          <OverlapCards />
        </div>
      </section>

      {/* card section */}
      <section>
        <div>
          <div className={`${styles["maincard"]}`}>
            <div className="container">
              <div className={`${styles["innerrow"]} row`}>
                <div className="col-lg-5">
                  <p className={`${styles["head"]}`}>
                    Benefits of Having Creware
                    <br /> <span>Testing Team</span>
                  </p>
                </div>
                <div className="col-lg-7">
                  <p className={`${styles["desc"]}`}>
                    Lorem ipsum dolor sit amet consectetur. Ipsum molestie
                    pulvinar tempus sed tempus. Et pharetra gravida sed sit
                    gravida. Id at morbi dignissim mauris. Vulputate Lorem ipsum
                    dolor sit amet consectetur. Ipsum molestie pulvinar tempus
                    sed tempus. Et pharetra gravida sed sit gravida. Id at morbi
                    dignissim mauris. Vulputate{" "}
                  </p>
                </div>
              </div>
              <div className={`${styles["innerrow2"]} row`}>
                <div className={`${styles["single1"]} col-md-6 col-lg-4`}>
                  <Image src={first} className={`${styles["cardimage"]}`} />
                  <p className={`${styles["cardtitle"]}`}>
                    Improved Software Quality
                  </p>
                  <p className={`${styles["carddesc"]}`}>
                    Lorem ipsum dolor sit amet consectetur. Ipsum molestie
                    pulvinar tempus sed tempus.{" "}
                  </p>
                </div>
                <div className={`${styles["single2"]} col-md-6 col-lg-4`}>
                  {" "}
                  <Image src={second} className={`${styles["cardimage"]}`} />
                  <p className={`${styles["cardtitle"]}`}>Reduced Cost</p>
                  <p className={`${styles["carddesc"]}`}>
                    Lorem ipsum dolor sit amet consectetur. Ipsum molestie
                    pulvinar tempus sed tempus.{" "}
                  </p>
                </div>
                <div className={`${styles["single3"]} col-md-6 col-lg-4`}>
                  {" "}
                  <Image src={third} className={`${styles["cardimage2"]}`} />
                  <p className={`${styles["cardtitle"]}`}>
                    Increase Customer Satification
                  </p>
                  <p className={`${styles["carddesc"]}`}>
                    Lorem ipsum dolor sit amet consectetur. Ipsum molestie
                    pulvinar tempus sed tempus.{" "}
                  </p>
                </div>
                <div className={`${styles["single4"]} col-md-6 col-lg-4`}>
                  <Image src={fourth} className={`${styles["cardimage"]}`} />
                  <p className={`${styles["cardtitle"]}`}>
                    Faster time-to-time Market
                  </p>
                  <p className={`${styles["carddesc"]}`}>
                    Lorem ipsum dolor sit amet consectetur. Ipsum molestie
                    pulvinar tempus sed tempus.{" "}
                  </p>
                </div>
                <div className={`${styles["single5"]} col-md-6 col-lg-4`}>
                  {" "}
                  <Image src={fifth} className={`${styles["cardimage"]}`} />
                  <p className={`${styles["cardtitle"]}`}>
                    Better Risk Management
                  </p>
                  <p className={`${styles["carddesc"]}`}>
                    Lorem ipsum dolor sit amet consectetur. Ipsum molestie
                    pulvinar tempus sed tempus.
                  </p>
                </div>
                <div className={`${styles["single6"]} col-md-6 col-lg-4`}>
                  {" "}
                  <Image src={sixth} className={`${styles["cardimage"]}`} />
                  <p className={`${styles["cardtitle"]}`}>
                    Continuous Improvement
                  </p>
                  <p className={`${styles["carddesc"]}`}>
                    Lorem ipsum dolor sit amet consectetur. Ipsum molestie
                    pulvinar tempus sed tempus.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* thread section */}
      <section
        className={`d-flex position-relative align-items-center ${styles.threadContainer} flex-column`}
      >
        <Thread />
      </section>
      {/* latest insight */}
      <section>
        <LatestInsights />
      </section>
      <section>
        <QueryForm />
      </section>
    </>
  );
};

export default Testing;
