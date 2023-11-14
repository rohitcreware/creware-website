"use client";
import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";

import styles from "./Aboutus.module.scss";
import background from "../../../../public/images/homebackanimation.json";
import DigitalNumber from "../Home/DigitalNumber";
import OurSuccessCards from "./our_success_cards/OurSuccessCards";
import { Achievements } from "@/components/Svgs/about";
import ExploreCards from "./ExploreCards/ExploreCards";
import OurMissionCards from "./OurMissionCards/OurMissionCards";
import QueryForm from "../Hero/QueryHome";

const Aboutus = () => {
  return (
    <div className={`${styles["main"]}`}>
      <div className={styles["top"]}>
        <div className={`${styles["back_animation"]} d-none d-lg-block`}>
          <Lottie
            animationData={background}
            className={`${styles["backround"]}`}
          />
        </div>
        <div className={`${styles.row} row`}>
          <div className={`${styles["left"]} col-12 col-md-6 col-xl-5`}>
            <h1 className={styles["slideUp"]}>
              Helping millions grow their business better
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
              tempus sed tempus. Et pharetra gravida sed sit gravida. Id at
              morbi dignissim mauris. Vulputate et pulvinar fermentum sed semper
              placerat.Lorem ipsum dolor sit amet consectetur. Ipsum molestie
              pulvinar tempus sed tempus. Et pharetra gravida sed sit gravida.
              Id at morbi dignissim mauris. Vulputate et pulvinar fermentum sed
              semper placerat.
            </p>
          </div>
          <div className={`${styles["right"]} col-12 col-md-6 col-xl-7`}>
            <Image
              src={require("../../../../public/images/Aboutus/main_bg.png")}
              alt="main_bg"
              height={0}
              width={0}
            />
          </div>
        </div>
      </div>

      {/* our story */}
      <div className="container">
        <div className={styles["our_story"]}>
          {" "}
          <div className="row">
            <div className={`${styles["left"]} col-12 col-md-6`}>
              <h2>Our <span>Story</span></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
                tempus sed tempus. Et pharetra gravida sed sit gravida. Id at
                morbi dignissim mauris. Vulputate et pulvinar fermentum sed
                semper placerat. Sit et massa cursus sed purus dictum ornare.
                Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
                tempus sed tempus. Et pharetra gravida sed sit gravida. Id at
                morbi dignissim mauris. Vulputate et pulvinar fermentum sed
                semper placerat. Sit et massa cursus sed purus dictum ornare.
                Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
                tempus sed tempus. Et pharetra gravida sed sit gravida. Id at
                morbi dignissim mauris. Vulputate et pulvinar fermentum sed
                semper placerat. Sit et massa cursus sed purus dictum ornare.{" "}
              </p>
            </div>
            <div className={`${styles["right"]} col-12 col-md-6`}>
              <div className={styles["image"]}>
                <Image
                  src={require("../../../../public/images/Aboutus/our_story_bg.png")}
                  alt="main_bg"
                  height={0}
                  width={0}
                />

                <div className={`${styles["founder_details"]}`}>
                  <div className={`${styles["left"]} `}>
                    <h4>Lorem Ipsum</h4>
                    <h6>Founder</h6>
                    <h5>Executive Chair Person</h5>
                  </div>
                  <div className={`${styles["middle"]} `}>
                    <div className={styles["border"]}></div>
                  </div>
                  <div className={`${styles["details_right"]} `}>
                    <h4>Lorem Ipsum</h4>
                    <h6>Co-Founder</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* digital number */}
        <div className={styles["digital_number_title"]}>
          <h1>
            Our <span>Digital Numbers...</span>
          </h1>
        </div>
        <DigitalNumber
          main_align_class={styles["digital_number_align"]}
          titleDisable
        />

        {/* our success */}
        <div className={styles["our_success"]}>
          <div className={styles["our_achievements_title"]}>
            <h1>
              Our <span>Success Timeline</span>
            </h1>
          </div>
          <OurSuccessCards />
        </div>

        {/* our achievements */}
        <div className={styles["our_achievements"]}>
          <div className={styles["our_achievements_title"]}>
            <h1>
              Our <span>Achievements</span>
            </h1>
          </div>
          <div className={styles["achievement_icons"]}>
            <div className="row">
              <div className="col-4 text-center d-md-flex justify-content-center">
                <Achievements />
              </div>
              <div className="col-4 text-center d-md-flex justify-content-center">
                {" "}
                <Achievements />
              </div>
              <div className="col-4 text-center d-md-flex justify-content-center">
                <Achievements />
              </div>
            </div>
          </div>
        </div>

        {/* our team */}
        <div className={styles["our_team"]}>
          <div className={styles["our_achievements_title1"]}>
            <h1>
              Explore <span>Our Team</span>
            </h1>
            <h6>
              We are the defenders of usability, champions of product
              consistency, and the emissaries of enjoyable human-technology
              interactions.
            </h6>
          </div>
        </div>

        <ExploreCards />
        <div className={styles["margin"]}><OurMissionCards /></div>
        
      </div>
      <QueryForm />
    </div>
  );
};

export default Aboutus;
