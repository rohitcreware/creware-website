"use client";
import React, { useRef } from "react";
import styles from "./WebApp.module.scss";
import FirstCard from "./FirstCard";
import { motion, useInView } from "framer-motion";
import sectionback from "../MobileAppDev/json/homebackanimation.json";
import SecondCard from "../MobileAppDev/SecondCard";
import Carousel from "../UiDesign/Carousel/Carousel";
import LatestInsights from "../ContactUs/LatestInsights";
import QueryForm from "../Hero/QueryHome";
import Animation from "./Animation";
import Lottie from "lottie-react";
const WebApp = () => {
  const paraRef = useRef(null);
  const paraInView = useInView(paraRef, { once: true });
  const paragraphVariant = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "dump",
        dumping: 0.4,
        duration: 2,
      },
    },
  };

  const buttonVariant = {
    offscreen: {
      opacity: 0,
      y: 500,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "dump",
        duration: 2,
      },
    },
  };
  return (
    <div>
      {/* Page descripton */}
      <section className={`${styles["bg-gif"]}`}>
        <div
          className={`container align-items-center justify-content-center d-flex`}
        >
          <div className="row d-flex flex-column flex-sm-column flex-lg-row mx-4 px-0">
            <div className="col d-flex flex-column flex-sm-column">
              <div
                className={`${styles["slide-effect"]} d-flex flex-column align-items-start justify-content-start`}
              >
                <div className={`${styles["slideUp"]}  fw-bold text-white `}>
                  WE CREATE CUSTOM
                </div>
                <div className={`${styles["slideUp"]}  fw-bold text-white `}>
                  <span className={`  fw-bold ${styles.crewareRed}`}>
                    WEB APPS
                  </span>{" "}
                  FOR ALL
                </div>
                <div className={`${styles["slideUp"]}  fw-bold text-white`}>
                  BUSINESSES
                </div>
              </div>
              <div>
                <p className={` text-white fw-normal`}>
                  Lorem ipsum dolor sit amet consectetur. Ipsum molestie
                  pulvinar tempus sed tempus. Et pharetra gravida sed sit
                  gravida. Id at morbi dignissim mauris. Vulputate
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-center  align-items-lg-end justify-content-center mt-5 pe-0 flex-column">
              <img
                src="/images/hireTeam/handshake.gif"
                alt="img"
                className={`${styles["move"]}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* First card section */}

      <section>
        <div className="">
          <p className={`${styles["sec-head"]}`}>
            Expand Your Business With <span>Web APPLICATION</span>
          </p>
          <div>
            <FirstCard />
          </div>
        </div>
      </section>

      {/* second section */}
      <section>
        <div className={`${styles["third-sec"]}`}>
          <div className="container">
            <div className={`${styles["text-main"]}`}>
              <motion.div
                variants={paraInView ? "" : paragraphVariant}
                initial="offscreen"
                whileInView="onscreen"
                className={`${styles["text"]}`}
                ref={paraRef}
              >
                Have any concerns on the economic benefits of your mobile app ?
                contact us today to discuss it with our business development
                expert who increased company sales up to 500%
              </motion.div>
              <button type="button" className={`${styles["button"]} `}>
                <motion.span
                  variants={buttonVariant}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport="viewport"
                >
                  Contact Us
                </motion.span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* fourth section */}
      <section>
        <div>
          <p className={`${styles["sec-head"]}`}>
            How We can <span>Help You</span>
          </p>
          <div className="container">
            <SecondCard />
          </div>
        </div>
      </section>

      {/*scroll card */}
      <section>
        <div>
          <p className={`${styles["sec-head"]}`}>
            We build lasting Client Partnerships through Effective{" "}
            <span>Communication and Trust</span>
          </p>
          <div className="mb-5">
            <Carousel />
          </div>
        </div>
      </section>

      {/* contact us */}
      <section>
        <div className={`${styles["fifth-sec"]} `}>
          <Lottie
            animationData={sectionback}
            className={`${styles["lottie"]}`}
          />
          <div className="container">
            <div className={`${styles["text-main-5"]}`}>
              <div className={`${styles["text-5"]}`}>
                Bring your project to life with our expert team! Contact us
                today for a free quote and let's work together to turn your
                vision into a reality.
              </div>
              <button type="button" className={`${styles["button-5"]}`}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* animation */}
      <section>
        <Animation />
      </section>

      {/* latest insight */}
      <section>
        <LatestInsights />
      </section>

      <section>
        <QueryForm />
      </section>
    </div>
  );
};

export default WebApp;
