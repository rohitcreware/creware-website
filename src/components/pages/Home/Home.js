"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { homeCard2 } from "../../../../Json/HomeCard2";
import styles from "./Home.module.scss";
import Lottie from "lottie-react";
import imagecircle from "../../../../Json/Animation/5.json";
import DigitalNumber from "./DigitalNumber";
import FounderSection from "./FounderSection";
import AnimatedCard from "../Hero/AnimatedCard";
import Thread from "./Thread";
import QueryHome from "../Hero/QueryHome";
import background from "../../../../public/images/homebackanimation.json";
import OurClientAnime from "@/components/Animations/OurClientAnime/OurClientFirstScreen";
import Link from "next/link";
import Image from "next/image";
import NewPortfolioi from "./NewPortfolioi";
import NewTestimonial from "./NewTestimonial";
import innermost from "../../../../Json/Animation/innermost.json";
import secondmost from "../../../../Json/Animation/secondmost.json";
import { MiddleLogo, SmallMiddleLogo } from "@/components/Svgs/Home";
const axios = require("axios");

const Home = () => {
  const digitalRef = useRef(null);
  const digitalInView = useInView(digitalRef, { once: true });
  const [showHide, setShowHide] = React.useState(false);
  const apiUrl =
    "https://strapi-home-k9zk.onrender.com/api/servicescards?sort=id:asc";
  // const apiUrl1 = "https://strapi-home-k9zk.onrender.com/api/creware-cards?sort=id:asc";
  const [data, setData] = useState();
  const [technology, setTechnology] = useState();
  const [rotate, setRotate] = useState(false);
  const [rotateLogo, setRotateLogo] = useState(false);
  const [start, setStart] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  let big;
  if (screenWidth > 767) {
    big = true;
  } else {
    big = false;
  }
  useEffect(() => {
    if (window !== undefined) {
      setScreenWidth(window.screen.width);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const info = response.data;
        setData(info);

        // const response1 = await axios.get(apiUrl1);
        // const info1 = response1.data;
        // setTechnology(info1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRotate(true);
    }, 500);
    setTimeout(() => {
      setStart(true);
    }, 3000);
  }, []);

  return (
    <div className={`${styles["home"]}`}>
      {/* video tran */}
      <Lottie animationData={background} className={`${styles["backround"]}`} />
      <section className={`${styles["home-sec-1"]} `}>
        <div className={`${styles["main"]}`}>
          <div className="container">
            <div className={`${styles["upper-row"]} row`}>
              <div className={`${styles["upper"]} col-lg-7`}>
                <div className={`${styles["imagelottie1-parent"]}`}>
                  <div className={`${styles["imagelottie1"]}`}>
                    <Lottie
                      animationData={start ? imagecircle : ""}
                      loop={false}
                    />
                  </div>
                </div>
                <div className={`${styles["lottie"]}`}>
                  {/* <div className={`${styles["newlottie"]}`}>
                    <Lottie animationData={bigercircle} loop={false} />
                  </div> */}
                  <div
                    className={
                      rotate ? `${styles["middlelogo"]}` : `${styles["new"]}`
                    }
                  >
                    {big ? <MiddleLogo /> : <SmallMiddleLogo />}
                  </div>

                  <motion.div
                    className={`${styles["lottie1"]}`}
                    transition={
                      {
                        // delay: 2,
                      }
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Lottie
                      animationData={innermost}
                      className={
                        rotate
                          ? `${styles["rotating-svg-main1"]}`
                          : `${styles["new"]}`
                      }
                      loop={false}
                    />
                  </motion.div>
                  <motion.div
                    className={`${styles["lottie2"]}`}
                    transition={
                      {
                        // delay: 2,
                      }
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Lottie
                      animationData={secondmost}
                      className={
                        rotate
                          ? `${styles["rotating-svg-main2"]}`
                          : `${styles["new"]}`
                      }
                      loop={false}
                    />
                  </motion.div>
                  <motion.div
                    className={`${styles["lottie3"]}`}
                    transition={
                      {
                        // delay: 2,
                      }
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.svg
                      className={
                        rotate
                          ? `${styles["rotating-svg-main3"]}`
                          : `${styles["new"]}`
                      }
                      width="305"
                      height="352"
                      viewBox="0 0 351 352"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.circle
                        cx="175.534"
                        cy="175.907"
                        r="174.815"
                        transform="rotate(-150 175.534 175.907)"
                        stroke="white"
                        strokeWidth="1.13149"
                        strokeDasharray="11.31 11.31"
                      />
                    </motion.svg>
                  </motion.div>
                </div>
              </div>
              <div className={`${styles["home-sec-1-div-1"]} col-lg-3`}>
                <div className="">
                  {" "}
                  <h2
                    className={`${styles["home-sec-1-h2"]} `} //slideHeadUp
                  >
                    LOREM IPSUM DOLOR SIT : <span>LOREM</span>
                  </h2>
                </div>
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
            {data?.data.map((item, index) => (
              <div
                className={`${styles["main_card"]} col-md-4 col-sm-6 mb-4`}
                key={index}
              >
                <Link href={item.attributes.url}>
                  <div className={`${styles["card"]}`}>
                    <div className={`${styles["outer-card"]} card-body`}>
                      <img
                        src={item.attributes.img}
                        alt={`Card ${item.attributes.title}`}
                        className={`${styles["service-img"]}`}
                      />
                      <div className={styles["card-content"]}>
                        <h5
                          className="card-title"
                          id={`${styles["card-title"]}`}
                        >
                          {item.attributes.title}
                        </h5>
                        <p className={`${styles["card-text"]} text-sm`}>
                          {item.attributes.description}
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
      <section>
        <div className="container">
          <h2 className={`${styles["sec-3-h2"]}`}>
            Why should you choose <span>Creware Technology?</span>
          </h2>
          <div className="row">
            {!showHide &&
              homeCard2.map((item, index) => (
                <div
                  ref={digitalRef}
                  className="col-12 col-sm-6 col-lg-4 mb-4"
                  key={index}
                >
                  <div className={`${styles["card-2"]}`}>
                    <div className="card-body">
                      <div className={`${styles["card_image"]}`}>
                        <Image
                          className={` ${
                            digitalInView ? styles[item.class] : ""
                          }`}
                          id={`${styles["sec-3-img"]}`}
                          src={item.img}
                          alt={`Card ${item.title}`}
                          width={0}
                          height={0}
                        />
                      </div>

                      <h5 id={`${styles["card-title-2"]}`}>{item.title}</h5>
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
          OUR<span> OFFERINGS</span>
        </h2>
        <AnimatedCard />
      </section>
      {/* coursoul */}
      <div className="container">
        <div className={`${styles["our_clients"]}`}>
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
        <h2 className={`${styles["sec-3-h2"]} ${styles["up"]}`}>
          OUR <span>PORTFOLIO</span>
        </h2>
        {/* <PortfolioBar /> */}
        <NewPortfolioi />
      </section>

      {/* Founder Intro Section */}
      <section>
        <FounderSection />
      </section>

      {/* Testimonials */}
      <section>
        {/* <Testimonial /> */}
        <h2 className={`${styles["sec-3-h2"]}`}>TESTIMONIALS</h2>
        <NewTestimonial />
      </section>
      {/*Form section*/}
      <section>
        <QueryHome />
      </section>
    </div>
  );
};

export default Home;
