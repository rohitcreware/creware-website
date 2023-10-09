"use client";
import React, { useState } from "react";
import { homeCard } from "../../../../Json/HomeCard";
import { homeCard2 } from "../../../../Json/HomeCard2";
import styles from "./Home.module.scss";
import Lottie from "lottie-react";
import topAnimation from "../../../../Json/Animation/New-head-animation.json";
import DigitalNumber from "./DigitalNumber";
import FounderSection from "./FounderSection";
import Testimonial from "./Testimonial";
import AnimatedCard from "../Hero/AnimatedCard";
import Thread from "./Thread";
import QueryHome from "../Hero/QueryHome";
import PortfolioBar from "./PortfolioBar";
import background from "../../../../public/images/homebackanimation.json";
import OurClientAnime from "@/components/Animations/OurClientAnime/OurClientFirstScreen";
import Link from "next/link";

const Home = () => {
  return (
    <div className={`${styles["home"]}`}>
      {/* video tran */}
      <Lottie animationData={background} className={`${styles["backround"]}`} />
      <section className={`${styles["home-sec-1"]} `}>
        <div className={`${styles["main"]} `}>
          <div className="main-div">
            <div className={`${styles["upper-row"]} row`}>
              <div className="col-lg-7">
                <div className={`${styles["lottie"]}`}>
                  <Lottie animationData={topAnimation} loop={false} />
                </div>
              </div>
              <div className={`${styles["home-sec-1-div-1"]} col-lg-5`}>
                <h2
                  className={`${styles["home-sec-1-h2"]} ${styles["slideUp"]}`}
                >
                  LOREM IPSUM DOLOR SIT : <span>LOREM</span>
                </h2>
                <p className={`${styles["home-sec-1-p"]}`}>
                  Lorem ipsum dolor sit amet consectetur. Feugiat proin volutpat
                  volutpat interdum orci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*our service card*/}
      <section className={`${styles["home-sec-2"]}`}>
        <div className="container">
          <h2 className={`${styles["sec-3-h2"]}`}>
            OUR <span>SERVICES</span>
          </h2>
          <div className="row">
            <div className="col-12 col-md-8">
              <h2 id={`${styles["service-head"]}`}>
                Powerful features to help you manage all your leads
              </h2>
            </div>
            <div className="col-12 col-md-4">
              <p className="" id={`${styles["service-desc"]}`}>
                Apsum dolor sit amet consectetur. Aliquam elementum elementum in
                ultrices. Dui maecenas ut eros turpis ultrices metus morbi
                aliquet vel.
              </p>
            </div>
          </div>
          <div className="row">
            {homeCard.map((item, index) => (
              <div
                className={`${styles["main_card"]} col-md-4 col-sm-6 mb-4`}
                key={index}
              >
                <Link href={item.url}>
                  <div className={`${styles["card"]}`}>
                    <div className={`${styles["outer-card"]} card-body`}>
                      <img
                        src={item.img}
                        alt={`Card ${item.title}`}
                        className={`${styles["service-img"]}`}
                      />
                      <div className={styles["card-content"]}>
                        <h5
                          className="card-title"
                          id={`${styles["card-title"]}`}
                        >
                          {item.title}
                        </h5>
                        <p className={`${styles["card-text"]} text-sm`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* creware cards */}
      <section className={`${styles["home-sec-3"]}`}>
        <div className="container">
          <h2 className={`${styles["sec-3-h2"]}`}>
            Why should you choose <span>Creware Technology?</span>
          </h2>
          <div className="row">
            {homeCard2.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className={`${styles["card-2"]}`}>
                  <div className={`${styles["card-body"]}`}>
                    <img
                      id={`${styles["sec-3-img"]}`}
                      src={item.img}
                      alt={`Card ${item.title}`}
                    />
                    <h5
                      className="card-title-"
                      id={`${styles["card-title-2"]}`}
                    >
                      {item.title}
                    </h5>
                    <p id={`${styles["card-text-2"]}`}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* animation section */}
      <section>
        <h2 className={`${styles["sec-3-h2"]}`}>
          OUR<span> OFFERNINGS</span>
        </h2>
        <AnimatedCard />
      </section>
      {/* coursoul */}
      <div className="container">
        <div className={`${styles["our_clients"]}`} >
          <h1 className={`${styles["sec-3-h2"]}`}>
            OUR <span> CLIENTS.</span>
          </h1>
          <OurClientAnime />
        </div>
      </div>
      {/* Digital Number Section */}
      <section>
        <DigitalNumber />
      </section>

      <section
        className={`d-flex position-relative align-items-center ${styles.threadContainer} flex-column`}
      >
        <Thread />
      </section>
      {/* our portfolio */}
      <section>
      <h2 className={`${styles["sec-3-h2"]}`}>
            OUR <span>PORTFOLIO</span>
          </h2>
        <PortfolioBar />
      </section>

      {/* Founder Intro Section */}
      <section>
        <FounderSection />
      </section>

      {/* Testimonials */}
      <section>
        <Testimonial />
      </section>
      {/*Form section*/}
      <section>
        <QueryHome />
      </section>
      {/* Back On Top */}
      <section></section>
    </div>
  );
};

export default Home;
