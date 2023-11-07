"use client";

import React, { useRef } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

import styles from "./UiDesign.module.scss";
import background from "../../../../public/images/homebackanimation.json";
import securityBallAnimation from "../../../../public/images/securityBallAnimation.json";
import { UiUXDesign, UiUxHoverCards } from "../../../../Json/UiCardList";
import SecondCard from "../MobileAppDev/SecondCard";
import Carousel from "./Carousel/Carousel";
import Animation from "../MobileAppDev/Animation";
import QueryForm from "../Hero/QueryHome";
import NewLastestInsighr from "../ContactUs/NewLastestInsighr";

const UiDesign = () => {
  const cardRef = useRef(null);
  const paraRef = useRef(null);
  const cardIsInView = useInView(cardRef, { once: true });
  const paraInView = useInView(paraRef, { once: true });

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
        duration: 2,
      },
    },
  };

  return (
    <>
      <div className={styles["main"]}>
        <div className={`${styles["back_animation"]} d-none d-lg-block`}>
          <Lottie
            animationData={background}
            className={`${styles["backround"]}`}
          />
        </div>
        {/* Head */}
        <div className="container">
          <div className={`${styles["top"]}`}>
            <div className={`${styles["top_left"]}`}>
              <h1 className={styles["slideUp"]}>
                We specialize in creating custom <span>UI UX DESIGN</span> for
                businesses of all types and sizes
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
                tempus sed tempus. Et pharetra gravida sed sit gravida. Id at
                morbi dignissim mauris. Vulputate
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={styles["ui_design"]}>
            <h1>
              Expand Your Business With <span>UI UX DESIGN</span>
            </h1>

            <motion.div
              variants={cardIsInView ? "" : variant}
              initial="offscreen"
              whileInView="onscreen"
              className={`${styles["design_cards"]} row`}
              ref={cardRef}
            >
              {UiUXDesign.map((item, index) => (
                <div className="col-12  col-md-6 col-lg-4" key={index}>
                  <div className={`${styles["single_card"]} row`}>
                    <div className={`${styles["head"]} col-2`}>{item.img}</div>
                    <div className="col-10">
                      <h6>{item.title}</h6>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Contact us */}
        <div className={`${styles["third-sec"]}`}>
          <div className="container">
            <div className={`${styles["text-main"]}`}>
              <motion.div
                variants={paraInView ? "" : paragraphVariant}
                initial="offscreen"
                whileInView="onscreen"
                ref={paraRef}
                className={`${styles["text"]}`}
              >
                Have any concerns on the economic benefits of your mobile app ?
                contact us today to discuss it with our business development
                expert who increased company sales up to 500%
              </motion.div>
              <button type="button" className={`${styles["button"]}`}>
                <motion.span
                  variants={paraInView ? "" : paragraphVariant}
                  initial="offscreen"
                  whileInView="onscreen"
                  ref={paraRef}
                >
                  Contact Us
                </motion.span>
              </button>
            </div>
          </div>
        </div>

        {/* Help You */}
        <div className={`${styles["help_you"]} container`}>
          <h1>
            How We can <span>Help You</span>
          </h1>
          <SecondCard />
        </div>

        {/* communication & trust */}
        <div className="container">
          <div className={styles["conmmunication"]}>
            <h1>
              We build lasting Client Partnerships through Effective
              <span> Communication and Trust</span>
            </h1>
            <Carousel />
          </div>
        </div>

        {/* services we provide */}
        <div className="container">
          <div className={styles["services_provide"]}>
            <h1>UI UX Design Services We Provide</h1>
            <p>
              Hidden Brains is continuously bringing business ideas to life with
              a team that is at the forefront of technology innovation.
            </p>
          </div>
        </div>

        <div className="container">
          <div className={`${styles["hoverCards_main"]}`}>
            <div className="row d-flex justify-content-start align-items-start">
              {UiUxHoverCards.map((card, index) => {
                return (
                  <div
                    className={`col-md-6 col-lg-4 col-xl-3 ${styles.hireCards} pt-3 mt-3`}
                    key={index}
                  >
                    <div className="border border-white rounded-4 d-fles align-items-start justify-content-start p-4">
                      <h3 className={`${styles.crewareRed} fs-4`}>
                        {card.heading}
                      </h3>
                      <p
                        className={`${styles["hover_Cards_para"]} text-white fw-medium fs-13`}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2nd contact us */}
        <div className={`${styles["second_contact_main"]}`}>
          {/* <Lottie
            height={0}
            width={0}
            animationData={securityBallAnimation}
            className={`${styles["contact_backround"]} d-none d-lg-block`}
            style={{
              position: "absolute",
            }}
          /> */}
          <div className="container">
            <div className={`${styles["text-main"]}  ${styles["contact_p"]}`}>
              <div className={`${styles["text"]}`}>
                Bring your project to life with our expert team! Contact us
                today for a free quote and let's work together to turn your
                vision into a reality.
              </div>
              <button type="button" className={`${styles["button"]} `}>
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>

        <div className="red_anime">
          <Animation />
        </div>

        <NewLastestInsighr />

        <QueryForm />
      </div>
    </>
  );
};

export default UiDesign;
