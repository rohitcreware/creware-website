"use client";
import React, { useRef } from "react";
import styles from "./MobileApp.module.scss";
import background from "../../../../public/images/homebackanimation.json";
import sectionback from "./json/homebackanimation.json";
import Lottie from "lottie-react";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import { motion, useInView } from "framer-motion";
import Animation from "./Animation";
import LatestInsights from "../ContactUs/LatestInsights";
import QueryForm from "../Hero/QueryHome";
import Carousel from "../UiDesign/Carousel/Carousel";

const MobileApp = () => {
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
    <>
      {/* Page heading */}
      <section className={`${styles["background-img"]}`}>
        <Lottie
          animationData={background}
          className={`${styles["background"]}`}
        />
        <div className={`${styles["background-img"]}`}> </div>
        <div className={`${styles["main"]} container`}>
          <p className={`${styles["upper-head"]}`}>
            We specialize in creating custom
          </p>
          <p className={`${styles["upper-head"]}`}>
            <span>mobile apps</span> for businesses of all
          </p>
          <p className={`${styles["upper-head"]} mb-4`}>types and sizes</p>
          <p className={`${styles["upper-text"]}`}>
            Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
            tempus sed tempus. Et pharetra gravida sed sit gravida. Id at morbi
            dignissim mauris. Vulputate
          </p>
        </div>
      </section>

      {/* second section */}
      <section>
        <div className="">
          <p className={`${styles["sec-head"]} `}>
            Expand Your Business With <span>Mobile Application</span>
          </p>
          <div>
            <FirstCard />
          </div>
        </div>
      </section>

      {/* third section */}
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
            <Carousel/>
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
    </>
  );
};

export default MobileApp;
