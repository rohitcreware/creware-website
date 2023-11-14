"use client";

import React from "react";
import Lottie from "lottie-react";

import styles from "./Partners.module.scss";
import GroupIconsSection from "./GroupIconsSection/GroupIconsSection";
import background from "../../../../public/images/homebackanimation.json";
import {
  JamPlay,
  TeamGiest,
  Uproar,
} from "@/components/Svgs/OurClientAnimationSvgs";
import Image from "next/image";
import {
  BigNetworks,
  GameIcon,
  MobileUser,
  PostBox,
  SystemUi,
  User,
} from "@/components/Svgs/partners";
import QueryForm from "../Hero/QueryHome";

const Partners = () => {
  return (
    <>
      <div className={styles["main"]}>
        <div className={`${styles["back_animation"]} d-none d-lg-block`}>
          <Lottie
            animationData={background}
            className={`${styles["backround"]}`}
          />
        </div>
        <div className="container">
          <div className={`${styles["top"]} row`}>
            <div className={`${styles["top_left"]} col-12 col-lg-8 col-xl-8`}>
              <h1>
                Partner with <span>creware</span>
              </h1>
              <p>
                Enhance Profitability And Efficiency, While Freeing Up Internal
                Resources To Focus On Key Tasks
              </p>
            </div>
            <div className={`${styles["top_right"]} col-12  col-lg-4 col-xl-4`}>
              <GroupIconsSection />
            </div>
          </div>
        </div>

        {/* Service Partnership */}
        <div className={`${styles["service_partner"]} container`}>
          <h1 className={styles["title"]}>
            Service <span>Partnership</span>
          </h1>

          <div className="row gy-3 gy-sm-5  gy-lg-0">
            <div className="col-12 col-lg-6">
              <div className={styles["service_left"]}>
                <h6>
                  Enhance Profitability And Efficiency, While Freeing Up
                  Internal Resources To Focus On Key Tasks
                </h6>

                <p className={styles["services_para"]}>
                  Not every business has all of the necessary resources or
                  access to the technological expertise and assistance they
                  require to grow. Weavers Web Solutions Private Limited offers
                  award-winning IT and numerous allied services that can help
                  you handle specific problems and take advantage of new
                  business prospects. Whatever your challenge is, we've most
                  likely dealt with it before and have a solution. Send us a
                  message; we enjoy a good conversation.
                </p>
              </div>
              <div className={`${styles["right_icons"]} row`}>
                <div className={`${styles["svg"]} col-4`}>
                  <TeamGiest />
                </div>
                <div className={`${styles["svg"]} col-4 text-center`}>
                  <Uproar />
                </div>
                <div className={`${styles["svg"]} col-4`}>
                  <JamPlay />
                </div>
              </div>
            </div>
            <div className={`${styles["service_right"]} col-12 col-lg-6`}>
              <div className={`${styles["first"]}`}>
                <h1>23,652 +</h1>
                <h6>Task Completed</h6>
              </div>
              <div className={`${styles["second"]}`}>
                <h1>9.5/10</h1>
                <h6>Average Review</h6>
              </div>
              <div className={`${styles["third"]}`}>
                <h1>3000 +</h1>
                <h6>Client Served</h6>
              </div>
              <div className={`${styles["fourth"]}`}>
                <h1>500 +</h1>
                <h6>Client Review</h6>
              </div>
            </div>
          </div>
        </div>

        {/* next partner */}
        <div className={`container`}>
          <div className={`${styles["next_partner"]}`}>
            <div className={styles["next_partner_top"]}>
              <h1>
                Do you want to be our <span>next partner</span> ?
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lorem et donec leo
                lectus vel ullamcorper facilisis. Dictum eros enim enim luctus
                sit semper euismod.Lorem ipsum dolor sit amet consectetur. Lorem
                et donec leo lectus vel ullamcorper facilisis. Dictum eros enim
                enim luctus sit semper euismod.Lorem ipsum dolor sit amet
                consectetur. Lorem et donec leo lectus vel ullamcorper
                facilisis. Dictum eros enim enim luctus sit semper euismod.Lorem
                ipsum dolor sit amet consectetur. Lorem et donec leo lectus vel
                ullamcorper facilisis.{" "}
              </p>
            </div>
            <div className={styles["icons"]}>
              <div className="row">
                <div
                  className={`${styles["icon"]} ${styles["icon_mobile_size"]} col-6 col-md-4`}
                >
                  <SystemUi />
                </div>
                <div
                  className={`${styles["icon"]} ${styles["icon_mobile_size"]} col-6 col-md-4`}
                >
                  <User />
                </div>
                <div
                  className={`${styles["icon"]} ${styles["icon_mobile_size"]} col-6 col-md-4`}
                >
                  <GameIcon />
                </div>
                <div
                  className={`${styles["icon"]} ${styles["icon_mobile_size"]} col-6 col-md-4`}
                >
                  <PostBox />
                </div>
                <div
                  className={`${styles["icon"]} ${styles["icon_mobile_size"]} col-6 col-md-4`}
                >
                  <BigNetworks />
                </div>
                <div
                  className={`${styles["icon"]} ${styles["icon_mobile_size"]} col-6 col-md-4`}
                >
                  <MobileUser />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The World */}
        <div className={styles["the_world"]}>
          <div className="container">
            <div className={styles["the_world_content"]}>
              <h1>
                We Have Partners and teams Around <span>the World</span>
              </h1>
              <Image
                style={{ width: "100%", height: "100%" }}
                height={0}
                width={0}
                sizes="100vw"
                src={require("../../../../public/images/Partners/world_map.png")}
                alt="world_map"
              />
            </div>
          </div>
        </div>

        {/* form */}
        <QueryForm />
      </div>
    </>
  );
};

export default Partners;
