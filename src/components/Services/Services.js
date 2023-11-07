"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Services.module.scss";
import Dedication from "../../components/Svgs/dedication.js";
import Clients from "../../components/Svgs/clients.js";
import Experience from "../../components/Svgs/experience.js";
import Detail from "../../components/Svgs/details.js";
import Delivered from "../../components/Svgs/delivered.js";
import Support from "../../components/Svgs/support.js";
import Team from "../../components/Svgs/team.js";
import { AccordianMain } from "../Accordion/Accordion";
import ImageSlider from "../ImageSlider/ImageSlider";
import ServiceCards from "./ServiceCards/ServiceCards";
import { AccordionList } from "../../../Json/AccordionList";
import background from "../../../public/images/homebackanimation.json";
import Lottie from "lottie-react";
import { Industries } from "../../../Json/Industries";
import NewTestimonial from "../pages/Home/NewTestimonial";
import cycleOfService from "../../../Json/Animation/cycleOfService.json";
import { useInView } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const cycleRef = useRef(null);
  const outerCircleRef = useRef(null);
  const innerCirlceRef = useRef(null);
  const c0Ref = useRef(null);
  const c1Ref = useRef(null);
  const c2Ref = useRef(null);
  const c3Ref = useRef(null);
  const c4Ref = useRef(null);
  const c5Ref = useRef(null);
  const c6Ref = useRef(null);

  const [outerCircleSelectedItem, setOuterCircleSelectedItem] = useState(0);
  const [OuterItemHover, setOuterItemHover] = useState(false);
  const [slickSlideNo, setSlickSlideNo] = useState(0);
  const [imageName, setImageName] = useState("technology");
  const [selectedTab, setSelectedTab] = useState(0);

  let selectedCircleTimer;

  useEffect(() => {
    selectedCircleTimer = setInterval(() => {
      if (outerCircleSelectedItem <= 5) {
        handleSmallCircleClick(outerCircleSelectedItem + 1);
      } else {
        handleSmallCircleClick(0);
      }
    }, 6000);

    return () => {
      clearInterval(selectedCircleTimer);
    };
  }, [outerCircleSelectedItem]);

  let smallCircleAngles = [270, 321.43, 12.86, 64.29, 115.72, 167.15, 218.58];

  function handleSmallCircleClick(index) {
    setOuterCircleSelectedItem(index);

    // Calculate the new rotation angle based on the current angle
    const rotationAngle = 90 - index * 51.43; // Adjust the angle calculation as needed

    // Rotate the large circle to bring the clicked small circle to the top
    outerCircleRef.current.style.transform = `rotate(${rotationAngle}deg)`;
    innerCirlceRef.current.style.transform = `rotate(${-rotationAngle}deg)`;

    let outerItemAngle = -rotationAngle;
    c0Ref.current.style.transform = `rotate(${outerItemAngle}deg)`;
    c1Ref.current.style.transform = `rotate(${outerItemAngle}deg)`;
    c2Ref.current.style.transform = `rotate(${outerItemAngle}deg)`;
    c3Ref.current.style.transform = `rotate(${outerItemAngle}deg)`;
    c4Ref.current.style.transform = `rotate(${outerItemAngle}deg)`;
    c5Ref.current.style.transform = `rotate(${outerItemAngle}deg)`;
    c6Ref.current.style.transform = `rotate(${outerItemAngle}deg)`;

    // Update the angle array with the new rotation angle
    smallCircleAngles[index] = rotationAngle;
  }

  const cycleIsInView = useInView(cycleRef, {
    once: true,
    threshold: 0.5,
  });

  const portfolio = [
    { img: "https://i.postimg.cc/s2ybcPrJ/Project6.png" },
    { img: "https://i.postimg.cc/x8W4bM5M/Project1.png" },
    { img: "https://i.postimg.cc/L6DySdKj/Project2.png" },
    { img: "https://i.postimg.cc/L6DySdKj/Project2.png" },
    { img: "https://i.postimg.cc/L6DySdKj/Project2.png" },
    { img: "https://i.postimg.cc/L6DySdKj/Project2.png" },
  ];

  const tabSelected = (index) => {
    setSelectedTab(index);
  };

  const outerItemHover = (hoverItem) => {
    setOuterItemHover(hoverItem);
  };

  return (
    <div>
      <section className="overflow-hidden">
        <Lottie
          animationData={background}
          className={`${styles["backround"]}`}
        />
        <div className={`d-flex align-items-center justify-content-center`}>
          <div className="row poisition-relative mx-1 mx-lg-5 py-lg-5">
            <div className="col-12  pe-md-4 col-md-6  mb-3">
              <div className={`${styles["slide-effect"]} d-flex flex-column`}>
                <h1 className={`${styles["slideUp"]} ${styles["top_title"]}`}>
                  OUR
                </h1>
              </div>
              <div className={`${styles["slide-effect"]} d-flex flex-column`}>
                <div
                  className={`${styles["slideUp"]} ${styles["crewareRed"]} ${styles["top_title"]}`}
                >
                  SERVICES
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mx-1 mx-md-0">
              <div className="col-12">
                <p className={`${styles["top_subtitle"]}`}>
                  Enhance Profitability And Efficiency, While Freeing Up
                  Internal Resources To Focus On Key Tasks
                </p>
              </div>
              <div>
                <p className={`${styles["top_desc"]}`}>
                  Not Every Business Has All Of The Necessary Resources Or
                  Access To The Technological Expertise And Assistance They
                  Require To Grow. Weavers Web Solutions Private Limited Offers
                  Award-Winning IT And Numerous Allied Services That Can Help
                  You Handle Specific Problems And Take Advantage Of New
                  Business Prospects. Whatever Your Challenge Is, We've Most
                  Likely Dealt With It Before And Have A Solution. Send Us A
                  Message; We Enjoy A Good Conversation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="container mt-4 mt-sm-5 pt-4">
            <div className="row">
              <div className="col-12 col-lg-6 d-flex justify-content-center">
                <div
                  className={`${styles["outer_circle"]}`}
                  ref={outerCircleRef}
                >
                  <div
                    className={`${styles["hoverItemOuterCircle"]}   ${
                      styles["outer_position_circle_1"]
                    }  ${
                      OuterItemHover === 4 && styles["itemOuterCircleOutline"]
                    } ${
                      outerCircleSelectedItem === 4 &&
                      styles["itemOuterCircleOutline"]
                    }`}
                  >
                    <div
                      data-index="4"
                      className={`${styles["outer_item_inner_size"]}   ${
                        outerCircleSelectedItem === 4 &&
                        styles["selected_outer_item"]
                      }`}
                      onClick={() => handleSmallCircleClick(4)}
                      ref={c4Ref}
                      onMouseOver={() => outerItemHover(4)}
                      onMouseLeave={() => outerItemHover(null)}
                    >
                      <Dedication id="c10" />
                    </div>
                  </div>

                  <div
                    className={`${styles["hoverItemOuterCircle"]} ${
                      styles["outer_position_circle_2"]
                    }  ${
                      OuterItemHover === 2 && styles["itemOuterCircleOutline"]
                    } ${
                      outerCircleSelectedItem === 2 &&
                      styles["itemOuterCircleOutline"]
                    }`}
                  >
                    <div
                      data-index="2"
                      className={`${styles["outer_item_inner_size"]}  ${
                        outerCircleSelectedItem === 2 &&
                        styles["selected_outer_item"]
                      }`}
                      onClick={() => handleSmallCircleClick(2)}
                      onMouseOver={() => outerItemHover(2)}
                      onMouseLeave={() => outerItemHover(null)}
                      ref={c2Ref}
                    >
                      <Clients />
                    </div>
                  </div>

                  <div
                    className={`${styles["hoverItemOuterCircle"]} ${
                      styles["outer_position_circle_3"]
                    }   ${
                      OuterItemHover === 6 && styles["itemOuterCircleOutline"]
                    } ${
                      outerCircleSelectedItem === 6 &&
                      styles["itemOuterCircleOutline"]
                    }`}
                  >
                    <div
                      data-index="6"
                      className={`${styles["outer_item_inner_size"]}  ${
                        outerCircleSelectedItem === 6 &&
                        styles["selected_outer_item"]
                      }`}
                      onClick={() => handleSmallCircleClick(6)}
                      ref={c6Ref}
                      onMouseOver={() => outerItemHover(6)}
                      onMouseLeave={() => outerItemHover(null)}
                    >
                      <Team />
                    </div>
                  </div>

                  <div
                    className={`${styles["hoverItemOuterCircle"]} ${
                      styles["outer_position_circle_4"]
                    }  ${
                      OuterItemHover === 1 && styles["itemOuterCircleOutline"]
                    } ${
                      outerCircleSelectedItem === 1 &&
                      styles["itemOuterCircleOutline"]
                    }`}
                  >
                    <div
                      data-index="1"
                      className={`${styles["outer_item_inner_size"]} ${
                        outerCircleSelectedItem === 1 &&
                        styles["selected_outer_item"]
                      }`}
                      onClick={() => handleSmallCircleClick(1)}
                      ref={c1Ref}
                      onMouseOver={() => outerItemHover(1)}
                      onMouseLeave={() => outerItemHover(null)}
                    >
                      <Experience />
                    </div>
                  </div>

                  <div
                    className={`${styles["hoverItemOuterCircle"]} ${
                      styles["outer_position_circle_5"]
                    } ${
                      OuterItemHover === 5 && styles["itemOuterCircleOutline"]
                    } ${
                      outerCircleSelectedItem === 5 &&
                      styles["itemOuterCircleOutline"]
                    }`}
                  >
                    <div
                      data-index="5"
                      className={`${styles["outer_item_inner_size"]}  ${
                        outerCircleSelectedItem === 5 &&
                        styles["selected_outer_item"]
                      }`}
                      onClick={() => handleSmallCircleClick(5)}
                      ref={c5Ref}
                      onMouseOver={() => outerItemHover(5)}
                      onMouseLeave={() => outerItemHover(null)}
                    >
                      <Support />
                    </div>
                  </div>

                  <div
                    className={`${styles["hoverItemOuterCircle"]} ${
                      styles["outer_position_circle_6"]
                    }  ${
                      OuterItemHover === 0 && styles["itemOuterCircleOutline"]
                    } ${
                      outerCircleSelectedItem === 0 &&
                      styles["itemOuterCircleOutline"]
                    }`}
                  >
                    <div
                      data-index="0"
                      className={`${styles["outer_item_inner_size"]}  ${
                        outerCircleSelectedItem === 0 &&
                        styles["selected_outer_item"]
                      }`}
                      onClick={() => handleSmallCircleClick(0)}
                      ref={c0Ref}
                      onMouseOver={() => outerItemHover(0)}
                      onMouseLeave={() => outerItemHover(null)}
                    >
                      <Delivered />
                    </div>
                  </div>

                  <div
                    className={`${styles["hoverItemOuterCircle"]} ${
                      styles["outer_position_circle_7"]
                    } ${
                      OuterItemHover === 3 && styles["itemOuterCircleOutline"]
                    } ${
                      outerCircleSelectedItem === 3 &&
                      styles["itemOuterCircleOutline"]
                    }`}
                  >
                    <div
                      data-index="3"
                      className={`${styles["outer_item_inner_size"]} ${
                        outerCircleSelectedItem === 3 &&
                        styles["selected_outer_item"]
                      } `}
                      onClick={() => handleSmallCircleClick(3)}
                      onMouseOver={() => outerItemHover(3)}
                      onMouseLeave={() => outerItemHover(null)}
                      ref={c3Ref}
                    >
                      <Detail />
                    </div>
                  </div>

                  <div
                    className={`${styles["inner_circle"]} d-flex align-items-center justify-content-center`}
                    ref={innerCirlceRef}
                  >
                    <div className="circle9 d-flex align-items-center justify-content-center">
                      {outerCircleSelectedItem === 0 && (
                        <div
                          className={`${styles.inner_circle_svg_size} fadeIn fs0-5rem fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                        >
                          <Delivered />
                          <h6 className={styles["inner_circle_item_title"]}>
                            500+
                          </h6>
                          <div className={styles["inner_circle_item_subTitle"]}>
                            Projects Delivered
                          </div>
                        </div>
                      )}

                      {outerCircleSelectedItem === 2 && (
                        <div
                          className={`${styles.inner_circle_svg_size} fs0-5rem fadeIn fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                        >
                          <Clients />
                          <h6 className={styles["inner_circle_item_title"]}>
                            100+
                          </h6>{" "}
                          <div className={styles["inner_circle_item_subTitle"]}>
                            clients covered
                          </div>
                        </div>
                      )}

                      {outerCircleSelectedItem === 6 && (
                        <div
                          className={`${styles.inner_circle_svg_size} fs0-5rem fadeIn fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                        >
                          <Team />
                          <h6 className={styles["inner_circle_item_title"]}>
                            50+
                          </h6>{" "}
                          <div className={styles["inner_circle_item_subTitle"]}>
                            Team Size
                          </div>
                        </div>
                      )}

                      {outerCircleSelectedItem === 1 && (
                        <div
                          className={`${styles.inner_circle_svg_size} fs0-5rem fadeIn fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                        >
                          <Experience />
                          <h6 className={styles["inner_circle_item_title"]}>
                            10+
                          </h6>
                          <div className={styles["inner_circle_item_subTitle"]}>
                            Experience
                          </div>
                        </div>
                      )}

                      {outerCircleSelectedItem === 5 && (
                        <div
                          className={`${styles.inner_circle_svg_size} fs0-5rem fadeIn fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                        >
                          <Support />
                          <h6 className={styles["inner_circle_item_title"]}>
                            24/7
                          </h6>
                          <div className={styles["inner_circle_item_subTitle"]}>
                            support
                          </div>
                        </div>
                      )}

                      {outerCircleSelectedItem === 4 && (
                        <div
                          className={`${styles.inner_circle_svg_size} fs0-5rem fadeIn fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                        >
                          <Dedication id="c10" />
                          <h6 className={styles["inner_circle_item_title"]}>
                            100%
                          </h6>
                          <div className={styles["inner_circle_item_subTitle"]}>
                            Dedication
                          </div>
                        </div>
                      )}

                      {outerCircleSelectedItem === 3 && (
                        <div
                          className={`${styles.inner_circle_svg_size} fs0-5rem fadeIn fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                        >
                          <Detail />
                          <h6 className={styles["inner_circle_item_title"]}>
                            500+
                          </h6>
                          <div className={styles["inner_circle_item_subTitle"]}>
                            Projects Delivered
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-1" />

              <div className="col-12 col-lg-5 d-flex align-items-center">
                <div className={`ps-lg-5`}>
                  {outerCircleSelectedItem === 6 && (
                    <div className="fadeIn">
                      <p className={`${styles["circle_sec_title"]}`}>
                        Industry Best Team
                      </p>
                      <p className={`${styles["circle_sec_desc"]}`}>
                        Throughout your journey from ideation to execution lorem
                        ipsum dolor sit amet consectetur. lorem et donec leo
                        lectus vel ullamcorper facilisis. lorem ipsum dolor sit
                        amet consectetur. lorem et donec leo lectus vel
                        ullamcorper facilisis. donec leo lectus vel ullamcorper
                        facilisis.
                      </p>
                    </div>
                  )}

                  {outerCircleSelectedItem === 2 && (
                    <div className="fadeIn">
                      <p className={`${styles["circle_sec_title"]}`}>
                        After Live Support
                      </p>
                      <p className={`${styles["circle_sec_desc"]}`}>
                        Throughout your journey from ideation to execution lorem
                        ipsum dolor sit amet consectetur. lorem et donec leo
                        lectus vel ullamcorper facilisis. lorem ipsum dolor sit
                        amet consectetur. lorem et donec leo lectus vel
                        ullamcorper facilisis. donec leo lectus vel ullamcorper
                        facilisis.
                      </p>
                    </div>
                  )}

                  {outerCircleSelectedItem === 3 && (
                    <div className="fadeIn">
                      <p className={`${styles["circle_sec_title"]}`}>
                        QA Assistance
                      </p>
                      <p className={`${styles["circle_sec_desc"]}`}>
                        Throughout your journey from ideation to execution lorem
                        ipsum dolor sit amet consectetur. lorem et donec leo
                        lectus vel ullamcorper facilisis. lorem ipsum dolor sit
                        amet consectetur. lorem et donec leo lectus vel
                        ullamcorper facilisis. donec leo lectus vel ullamcorper
                        facilisis.
                      </p>
                    </div>
                  )}

                  {outerCircleSelectedItem === 0 && (
                    <div className="fadeIn">
                      <p className={`${styles["circle_sec_title"]}`}>
                        Dedicated Resource
                      </p>
                      <p className={`${styles["circle_sec_desc"]}`}>
                        Throughout your journey from ideation to execution lorem
                        ipsum dolor sit amet consectetur. lorem et donec leo
                        lectus vel ullamcorper facilisis. lorem ipsum dolor sit
                        amet consectetur. lorem et donec leo lectus vel
                        ullamcorper facilisis. donec leo lectus vel ullamcorper
                        facilisis.
                      </p>
                    </div>
                  )}

                  {outerCircleSelectedItem === 4 && (
                    <div className="fadeIn">
                      <p className={`${styles["circle_sec_title"]}`}>
                        Flexible
                      </p>
                      <p className={`${styles["circle_sec_desc"]}`}>
                        Throughout your journey from ideation to execution lorem
                        ipsum dolor sit amet consectetur. lorem et donec leo
                        lectus vel ullamcorper facilisis. lorem ipsum dolor sit
                        amet consectetur. lorem et donec leo lectus vel
                        ullamcorper facilisis. donec leo lectus vel ullamcorper
                        facilisis.
                      </p>
                    </div>
                  )}

                  {outerCircleSelectedItem === 1 && (
                    <div className="fadeIn">
                      <p className={`${styles["circle_sec_title"]}`}>
                        Experience
                      </p>
                      <p className={`${styles["circle_sec_desc"]}`}>
                        Throughout your journey from ideation to execution lorem
                        ipsum dolor sit amet consectetur. lorem et donec leo
                        lectus vel ullamcorper facilisis. lorem ipsum dolor sit
                        amet consectetur. lorem et donec leo lectus vel
                        ullamcorper facilisis. donec leo lectus vel ullamcorper
                        facilisis.
                      </p>
                    </div>
                  )}

                  {outerCircleSelectedItem === 5 && (
                    <div className="fadeIn">
                      <p className={`${styles["circle_sec_title"]}`}>
                        Top Notch Support
                      </p>
                      <p className={`${styles["circle_sec_desc"]}`}>
                        Throughout your journey from ideation to execution lorem
                        ipsum dolor sit amet consectetur. lorem et donec leo
                        lectus vel ullamcorper facilisis. lorem ipsum dolor sit
                        amet consectetur. lorem et donec leo lectus vel
                        ullamcorper facilisis. donec leo lectus vel ullamcorper
                        facilisis.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className={`${styles["our_services_main"]}`}>
            <div className="col-10 col-md-6  m-0 mb-3">
              <p className={styles["our_services_title"]}>
                Our services empower businesses with a strategy-led approach at
                every step of their product's lifecycle
              </p>
            </div>
            <div className="row">
              <div className="col-12 col-md-5 ms-lg-5 ps-lg-4">
                <AccordianMain
                  items={AccordionList}
                  setSlickSlideNo={setSlickSlideNo}
                  slickSlideNo={slickSlideNo}
                />
              </div>
              <div
                className={`${styles["accordion"]} col-7 overflow-hidden d-none d-sm-none d-md-flex position-absolute`}
              >
                <ImageSlider index={slickSlideNo} />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles["process_cycle_main"]}`}>
          <h2 className={`${styles["process_cycle_title"]}`}>
            PROCESS
            <span> CYCLE OF SERVICE</span>
          </h2>

          <div className={`container`}>
            <div style={{ width: "100%" }} ref={cycleRef}>
              {cycleIsInView ? (
                <Lottie
                  animationData={cycleOfService}
                  className="z-3"
                  loop={false}
                />
              ) : (
                <div style={{ height: "50vh" }}></div>
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <div
              className="row position-relative"
              style={{ background: "#111428" }}
            >
              <Lottie
                animationData={background}
                className={`${styles["backround"]}`}
              />
              <div className={`${styles["companion_main"]} col col-lg-5 lh-1`}>
                <div
                  className={`${styles["clients_sec"]} text-left d-md-flex align-items-start justify-content-start`}
                >
                  <h6>Clients</h6>
                </div>
                <div className="text-left d-md-flex align-items-start justify-content-start w-56">
                  <h1 className={styles["companions_title"]}>They Are Our</h1>
                </div>
                <div className="text-left d-md-flex align-items-start justify-content-start w-56 mb-3">
                  <span
                    className={`${styles["companions_title"]}`}
                    style={{ color: " #BC031E" }}
                  >
                    Companions
                  </span>
                </div>
              </div>
              <div className="col col-lg-7 ps-0">
                <div className={`${styles["logo-slider"]} bg-white`}>
                  <div className={`${styles["blocks"]}`}>
                    <img
                      src={"/images/services/images/clients.png"}
                      alt="img"
                    />
                    {/* <img src={"/images/services/images/logos2.png"} alt="img" /> */}
                  </div>

                  <div className={`${styles["blocks"]}`}>
                    <img
                      src={"/images/services/images/clients.png"}
                      alt="img"
                    />
                    {/* <img src={"/images/services/images/logos2.png"} alt="img" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <h2
            className={`${styles["process_cycle_title"]} my-5`}
            style={{ textTransform: "capitalize" }}
          >
            Industries We<span className={`${styles.crewareRed}`}> Served</span>
          </h2>

          <div className="text-center pb-3 pb-md-5">
            <div className="row d-flex flex-column flex-sm-column flex-md-row">
              <div className="col-12 col-md-7">
                <div className="row gy-3">
                  {Industries.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="col-4 col-sm-4 col-md-4 col-lg-3  d-flex flex-column"
                      >
                        <div
                          role="button"
                          className={`${styles.boxShadow} p-2 ${
                            selectedTab == index ? `${styles.selected}` : ""
                          }`}
                          onClick={() => {
                            setImageName(image.name);
                            tabSelected(index);
                          }}
                        >
                          <Image
                            alt="img"
                            width={50}
                            height={50}
                            key={image}
                            src={`/images/services/industryLogos/${image.name}.png`}
                            className={`${styles["industries_icons"]} img-responsive`}
                          />
                          <p className={styles["industries_icons_name"]}>
                            {image.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-5 col-12">
                {Industries.map((image, index) => {
                  if (imageName == image.name) {
                    return (
                      <div className="col" key={index}>
                        <div className="col">
                          <p className={`${styles["industries_tabs_title"]}`}>
                            {image.name}
                          </p>
                          <p className={`${styles["industries_tabs_desc"]}`}>
                            Throughout your journey from ideation to execution
                            lorem ipsum dolor sit amet consectetur. lorem et
                            donec leo lectus vel ullamcorper facilisis. lorem
                            ipsum dolor sit amet consectetur. lorem et donec leo
                            lectus vel ullamcorper facilisis. donec leo lectus
                            vel ullamcorper facilisis.
                          </p>
                        </div>
                        <div className="col">
                          <div className="row">
                            <ServiceCards
                              portfolioList={portfolio}
                              propsComingFrom="services"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <div
              className="row position-relative"
              style={{ background: "#111428" }}
            >
              <Lottie
                animationData={background}
                className={`${styles["backround"]}`}
              />
              <div
                className={`col-12 col-md-5 px-0 px-sm-4 lh-1 d-flex flex-column align-items-end justify-content-center mb-4 mb-lg-0`}
              >
                <div
                  className={`${styles["our_process_main"]} ms-lg-5 mt-3 my-md-3 col-10 text-start`}
                >
                  <div className="text-start d-flex align-items-start justify-content-start">
                    <p className={`${styles["our_process_title"]} d-flex`}>
                      Our Process
                    </p>
                  </div>
                  <div className={`${styles["our_process_desc"]}`}>
                    Flexible iterative approach to continuous project
                    improvement.
                  </div>
                  <div className={`${styles["our_process_desc"]}`}>
                    -
                    <span
                      className={`${styles["our_process_desc"]}`}
                      style={{ color: "#D0021B", marginLeft: "1rem" }}
                    >
                      Agile methodology.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col col-md-7 ps-0 z-2">
                <img
                  src={"/images/services/Creware.gif"}
                  alt="img"
                  className="w-100 h-100"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles.trustedBy}`}>
            <div className="container text-center d-flex align-items-center justify-content-center">
              <div className="row d-flex">
                <div className="col-md-6 mb-4 mb-md-0 d-flex align-items--center justify-content-center justify-content-md-start">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <Image
                        width={0}
                        height={0}
                        src="/images/services/images/trustedBy.png"
                        alt="img"
                        className={styles["trusted_img"]}
                      />
                    </div>

                    <div className="col-8">
                      <p className={styles["trusted_by_desc"]}>
                        Our passion for diverse technology solutions and
                        interactive customer - centric services have enabled us
                        to serve in over 30 + countries{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center">
                  <div style={{ textAlign: "left" }}>
                    <h3 className={styles["trusted_digits"]}>1300+</h3>
                    <h6 className={styles["trusted_digits_content"]}>
                      Global Clients
                    </h6>
                  </div>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center">
                  <div style={{ textAlign: "left" }}>
                    <h3 className={styles["trusted_digits"]}>5000+</h3>
                    <h6 className={styles["trusted_digits_content"]}>
                      Project Delivered
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles["testimonial_container"]} container my-5`}>
            <h2 className={styles["testimonial_title"]}>TESTIMONIALS</h2>
            <NewTestimonial />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Services;
