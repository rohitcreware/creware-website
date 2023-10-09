"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Digital.module.scss";
import Lottie from "lottie-react";
import Image from "next/image";
import sectionback from "../MobileAppDev/json/homebackanimation.json";
import { motion, useAnimation, useInView, useMediaQuery } from "framer-motion";
import background from "../../../../public/images/homebackanimation.json";
import image from "../../../../public/images/digitalmarketing/image.png";
import Limage from "../../../../public/images/digitalmarketing/Limage.png";
import Rimage from "../../../../public/images/digitalmarketing/Rimage.png";
import one from "../../../../public/images/digitalmarketing/firstcard.png";
import two from "../../../../public/images/digitalmarketing/secondcard.png";
import three from "../../../../public/images/digitalmarketing/thirdcard.png";
import four from "../../../../public/images/digitalmarketing/fourthcard.png";
import { data } from "../../../../Json/DigitalMarketing";
import { Tick } from "@/components/Svgs/Digital";
import Card from "./Cards";
import LatestInsights from "../ContactUs/LatestInsights";
import QueryForm from "../Hero/QueryHome";
import ContactusBtnSec from "../EnterpriseSfDev/ContactusBtnSec/ContactusBtnSec";

const Digital = () => {
  const cardRef = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardIsInView = useInView(cardRef, { once: true });
  const cardIsInView1 = useInView(cardRef1, { once: true });
  const cardIsInView2 = useInView(cardRef2, { once: true });
  const [screenWidth, setScreenWidth] = useState(0);

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
  const variant1 = {
    offscreen1: {
      opacity: 0,
      x: -200,
    },
    onscreen1: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };
  const variant2 = {
    offscreen2: {
      opacity: 0,
      x: -200,
    },
    onscreen2: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };

  const nameControl = useAnimation(); // Define nameControl

  const startAnimation = async () => {
    await nameControl.start({ y: 0 });

    // Check the screen width
    const width = window.innerWidth;

    // Adjust y values based on screen width
    let yOffset;
    let negativeYOffset;

    if (width <= 992) {
      yOffset = 30;
      negativeYOffset = -45;
    } else if (width <= 1200) {
      yOffset = 45;
      negativeYOffset = -45;
    } else {
      yOffset = 70; // Default value for larger screens
      negativeYOffset = -70; // Default value for larger screens
    }

    await nameControl.start({ y: yOffset });

    await nameControl.start({ y: 0 });

    await nameControl.start({ y: negativeYOffset });

    await nameControl.start({ y: 0 });
  };

  useEffect(() => {
    startAnimation();
    const intervalId = setInterval(() => {
      startAnimation();
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

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
      {/*Page Description*/}
      <section>
        <div className={styles["main"]}>
          <div className={`${styles["back_animation"]} d-none d-lg-block`}>
            <Lottie
              animationData={background}
              className={`${styles["backround"]}`}
            />
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
                  Choose <span>Creware</span> As Your{" "}
                  <span>Digital Marketing</span> for businesses of all types and
                  sizes
                </motion.h1>
                <p className={styles["desc-p"]}>
                  Lorem ipsum dolor sit amet consectetur. Ipsum molestie
                  pulvinar tempus sed tempus. Et pharetra gravida sed sit
                  gravida. Id at morbi dignissim mauris. Vulputate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* second section */}
      <section>
        <div className={` ${styles["second"]} container`}>
          <div className={` ${styles["maincard"]} row`}>
            <div className="col-3">
              <div className={` ${styles["image1-div"]}`}>
                <Image className={` ${styles["img1"]}`} src={one} />
              </div>
            </div>
            <div className="col-3">
              <div>
                <Image className={` ${styles["img2"]}`} src={two} />
              </div>
            </div>
            <div className="col-3">
              <div>
                <Image className={` ${styles["img3"]}`} src={three} />
              </div>
            </div>
            <div className="col-3">
              <div className={` ${styles["image4-div"]}`}>
                <Image className={` ${styles["img4"]}`} src={four} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third section */}
      <section className={`${styles["move"]}`}>
        <div className="container">
          <div className="row">
            <div
              className={`${styles["initaltext"]} col-7 d-flex align-items-center justify-content-end`}
              style={{}}
            >
              <p>We are the best choice for your</p>
            </div>

            <motion.div
              transition={{ type: "spring", duration: 1, stiffness: 100 }}
              animate={nameControl}
              className={`${styles["inital"]} col-5`}
            >
              <p className={`${styles["p1"]}`}>Branding</p>
              <p className={`${styles["p2"]}`}>Social Media Ads</p>
              <p className={`${styles["p3"]}`}>Digital Marketing</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fourth section */}
      <section>
        <div>
          <Card />
        </div>
      </section>

      {/* animated div */}
      <section>
        <div className={`${styles["fourthmain"]}`}>
          <div className={`${styles["fourthdiv"]} container`} style={{}}>
            <div className={`${styles["animatedrow"]} row`}>
              <motion.div
                variants={cardIsInView1 ? "" : variant1}
                initial="offscreen1"
                ref={cardRef1}
                whileInView="onscreen1"
                className={`${styles["mainimage"]} col-md-5`}
              >
                <Image src={image} className={`${styles["image"]}`} />
              </motion.div>
              <motion.div
                variants={cardIsInView2 ? "" : variant2}
                initial="offscreen2"
                whileInView="onscreen2"
                ref={cardRef2}
                className={`${styles["mainimage"]} col-md-6`}
              >
                <p className={`${styles["upper-p"]}`}>
                  How Creware Creates Growth Business
                </p>
                <div className="row">
                  {data.map((item) => (
                    <>
                      {" "}
                      <div className={`${styles["tick"]} col-2 col-md-1`}>
                        <Tick />
                      </div>
                      <div className={`${styles["desc"]} col-10 col-md-11`}>
                        {item.desc}
                      </div>
                    </>
                  ))}
                </div>
                <div>
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
              </motion.div>
            </div>
            <motion.div
              variants={cardIsInView ? "" : variant}
              initial="offscreen"
              whileInView="onscreen"
              ref={cardRef}
              className={`${styles["lowerrow"]} row gx-5`}
              style={{}}
            >
              <div className="col-md-6">
                <Image src={Limage} />
                <p className={`${styles["lower-p"]}`}>Proven Performance</p>
                <p className={`${styles["down-p"]}`}>
                  Lorem ipsum dolor sit amet consectetur. Ipsum molestie
                  pulvinar tempus sed tempus. Et pharetra gravida sed sit
                  gravida. Id at morbi dignissim mauris. Vulputate{" "}
                </p>
              </div>
              <div className="col-md-6">
                <Image src={Rimage} />
                <p className={`${styles["lower-p"]}`}>Our Track Record</p>
                <p className={`${styles["down-p"]}`}>
                  Lorem ipsum dolor sit amet consectetur. Ipsum molestie
                  pulvinar tempus sed tempus. Et pharetra gravida sed sit
                  gravida. Id at morbi dignissim mauris. Vulputate{" "}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* contact us */}
      <section>
        {/* <div className={`${styles["fifth-sec"]} `}>
          <Lottie
            animationData={background}
            className={`${styles["lottie"]}`}
          />
          <div className="container">
            <div className={`${styles["text-main-5"]} row gx-5`}>
              <div className={`${styles["text-5"]} col-md-6`}>
                Ready to grow with a digital marketing agency you can trust ?
                Get your proposal now !
              </div>
              <div className={`${styles["p-5"]} col-md-6`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ipsum molestie
                  pulvinar tempus sed tempus. Et pharetra gravida sed sit
                  gravida. Id at morbi dignissim mauris. Vulputate{" "}
                </p>
                <button type="button" className={`${styles["button-5"]}`}>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <ContactusBtnSec />
      </section>
      {/* latest insight */}
      <section>
        <LatestInsights />
      </section>

      {/* query form */}
      <section>
        <QueryForm />
      </section>
    </>
  );
};

export default Digital;
