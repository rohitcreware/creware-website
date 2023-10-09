"use client";
import React, { useEffect, useState } from "react";
import styles from "./Services.module.scss";
import Dedication from "../../components/Svgs/dedication.js";
import Clients from "../../components/Svgs/clients.js";
import Experience from "../../components/Svgs/experience.js";
import Detail from "../../components/Svgs/details.js";
import Delivered from "../../components/Svgs/delivered.js";
import Support from "../../components/Svgs/support.js";
import Team from "../../components/Svgs/team.js";
import DynamicAccordion from "../Accordion/Accordion";
import ImageSlider from "../ImageSlider/ImageSlider";
import ServiceCards from "./ServiceCards/ServiceCards";
import Testimonial from "../pages/Home/Testimonial";
import { AccordionList } from "../../../Json/AccordionList";
import background from "../../../public/images/homebackanimation.json";
import Lottie from "lottie-react";
import { Industries } from "../../../Json/Industries";

const Services = () => {
  const portfolio = [
    { "img": "https://i.postimg.cc/s2ybcPrJ/Project6.png" },
    { "img": "https://i.postimg.cc/x8W4bM5M/Project1.png" },
    { "img": "https://i.postimg.cc/L6DySdKj/Project2.png" },
    { "img": "https://i.postimg.cc/L6DySdKj/Project2.png" },
    { "img": "https://i.postimg.cc/L6DySdKj/Project2.png" },
    { "img": "https://i.postimg.cc/L6DySdKj/Project2.png" },
  ];

  const [c1, setC1] = useState(true);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);
  const [c4, setC4] = useState(false);
  const [c5, setC5] = useState(false);
  const [c6, setC6] = useState(false);
  const [c7, setC7] = useState(false);

  const [data, setData] = useState(null);
  const [imageName, setImageName] = useState("technology");
  const [isDivVisible, setDivVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sendData = (data) => {
    setData(data);
  };

  // You can adjust the scroll threshold as needed
  const scrollThreshold = 1450; // Adjust this value according to your preference

  const handleScroll = () => {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Check if the scroll position is below the threshold
    if (scrollY > scrollThreshold && isDivVisible) {
      // If the scroll position is greater than the threshold and the div is visible, hide it
      setDivVisible(false);
    } else if (scrollY <= scrollThreshold && !isDivVisible) {
      // If the scroll position is less than or equal to the threshold and the div is hidden, show it
      setDivVisible(true);
    }
  };

  function handleBoxToggle(event) {
    switch (event.target.id) {
      case "c1":
        setC1(true);
        setC2(false);
        setC3(false);
        setC4(false);
        setC5(false);
        setC6(false);
        return setC7(false);
      case "c2":
        setC1(false);
        setC2(true);
        setC3(false);
        setC4(false);
        setC5(false);
        setC6(false);
        return setC7(false);
      case "c3":
        setC1(false);
        setC2(false);
        setC3(true);
        setC4(false);
        setC5(false);
        setC6(false);
        return setC7(false);
      case "c4":
        setC1(false);
        setC2(false);
        setC3(false);
        setC4(true);
        setC5(false);
        setC6(false);
        return setC7(false);
      case "c5":
        setC1(false);
        setC2(false);
        setC3(false);
        setC4(false);
        setC5(true);
        setC6(false);
        return setC7(false);
      case "c6":
        setC1(false);
        setC2(false);
        setC3(false);
        setC4(false);
        setC5(false);
        setC6(true);
        return setC7(false);
      case "c7":
        setC1(false);
        setC2(false);
        setC3(false);
        setC4(false);
        setC5(false);
        setC6(false);
        return setC7(true);
    }
  }

  const tabSelected = (index) => {
    setSelectedTab(index);
  };

  return (
    <div>
      {/* Services */}
      <section className="overflow-hidden">
        <div
          className={`d-flex align-items-center justify-content-center ${styles["bg-gif"]}`}
        >
          <div className="row poisition-relative d-flex flex-column flex-lg-row mx-5 py-5 p-0 ps-0">
            {/* <Lottie
          animationData={background}
          className={`${styles["backround"]}`}
        /> */}
            <div className="col-12 pe-4 col-lg-6 col-xl-6 col-xxl-6 d-flex flex-column mb-3">
              <div className={`${styles["slide-effect"]} d-flex flex-column`}>
                <div
                  className={`${styles["slideUp"]} fs-6-5rem fw-bold text-white ${styles.responsiveFont}`}
                >
                  OUR
                </div>
              </div>
              <div className={`${styles["slide-effect"]} d-flex flex-column`}>
                <div
                  className={`${styles["slideUp"]} fs-6-5rem fw-bold ${styles.crewareRed} ${styles.responsiveFont}`}
                >
                  SERVICES
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center flex-column">
              <div className="col-12">
                <p className={`text-start text-white fs-4 fw-medium`}>
                  Enhance Profitability And Efficiency, While Freeing Up
                  Internal Resources To FocUs On Key Tasks. Send Us A Message;
                  We Enjoy A Good Conversation.
                </p>
              </div>
              <div>
                <p className={`text-start text-white fw-normal fs-5`}>
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
          <div className="container mt-0 mt-sm-5 pt-4">
            <div className="row d-flex flex-column flex-md-column flex-xl-row">
              <div className="col">
                <div className="d-flex align-items-center justify-content-center p-5 position-relative">
                  <div className={`${styles["circle"]}`}>
                    <div
                      id="c1"
                      className={`${styles["circle1"]} d-flex align-items-center justify-content-center`}
                      onClick={(event) => handleBoxToggle(event)}
                    >
                      <Dedication />
                    </div>
                    <div
                      id="c2"
                      className={`${styles["circle2"]} d-flex align-items-center justify-content-center`}
                      onClick={(event) => handleBoxToggle(event)}
                    >
                      <Clients />
                    </div>
                    <div
                      id="c4"
                      className={`${styles["circle4"]} d-flex align-items-center justify-content-center`}
                      onClick={(event) => handleBoxToggle(event)}
                    >
                      <Experience />
                    </div>
                    <div
                      id="c3"
                      className={`${styles["circle3"]} d-flex align-items-center justify-content-center`}
                      onClick={(event) => handleBoxToggle(event)}
                    >
                      <Team />
                    </div>
                    <div
                      id="c5"
                      className={`${styles["circle5"]} d-flex align-items-center justify-content-center`}
                      onClick={(event) => handleBoxToggle(event)}
                    >
                      <Support />
                    </div>
                    <div
                      id="c6"
                      className={`${styles["circle6"]} d-flex align-items-center justify-content-center`}
                      onClick={(event) => handleBoxToggle(event)}
                    >
                      <Delivered />
                    </div>
                    <div
                      id="c7"
                      className={`${styles["circle7"]} d-flex align-items-center justify-content-center`}
                      onClick={(event) => handleBoxToggle(event)}
                    >
                      <Detail />
                    </div>
                    <div
                      className={`${styles["circle8"]} d-flex align-items-center justify-content-center`}
                    >
                      <div className="circle9 d-flex align-items-center justify-content-center">
                        {c1 && (
                          <div
                            className={`${styles.svgFill} fadeIn fs0-5rem fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                          >
                            <Delivered /> Projects Delivered
                          </div>
                        )}
                        {c2 && (
                          <div
                            className={`${styles.svgFill} fs0-5rem fadeIn fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                          >
                            <Team /> Team Size
                          </div>
                        )}
                        {c3 && (
                          <div
                            className={`${styles.svgFill} fs0-5rem fadeIn fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                          >
                            <Experience />
                            Experience
                          </div>
                        )}
                        {c4 && (
                          <div
                            className={`${styles.svgFill} fs0-5rem fadeIn fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                          >
                            <Detail />
                            Details
                          </div>
                        )}
                        {c5 && (
                          <div
                            className={`${styles.svgFill} fs0-5rem fadeIn fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                          >
                            <Support />
                            24/7
                          </div>
                        )}
                        {c6 && (
                          <div
                            className={`${styles.svgFill} fs0-5rem fadeIn fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                          >
                            <Clients />
                            Clients
                          </div>
                        )}
                        {c7 && (
                          <div
                            className={`${styles.svgFill} fs0-5rem fadeIn fw-bolder text-white d-flex align-items-center justify-content-center flex-column`}
                          >
                            <Dedication /> Dedication
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                <div className={`col p-2 ${styles["pleft-7"]}`}>
                  <div className="col-11">
                    {c1 && (
                      <div className="fadeIn">
                        <p className="text-start text-white fw-semibold fs-2">
                          Projects Delivered
                        </p>
                        <p className="text-start text-white fw-normal fs-4">
                          Throughout your journey from ideation to execution
                          lorem ipsum dolor sit amet consectetur. lorem et donec
                          leo lectus vel ullamcorper facilisis. lorem ipsum
                          dolor sit amet consectetur. lorem et donec leo lectus
                          vel ullamcorper facilisis. donec leo lectus vel
                          ullamcorper facilisis.
                        </p>
                      </div>
                    )}
                    {c2 && (
                      <div className="fadeIn">
                        <p className="text-start text-white fw-bolder fs-2">
                          Team Size
                        </p>
                        <p className="text-start text-white fw-normal fs-4">
                          Throughout your journey from ideation to execution
                          lorem ipsum dolor sit amet consectetur. lorem et donec
                          leo lectus vel ullamcorper facilisis. lorem ipsum
                          dolor sit amet consectetur. lorem et donec leo lectus
                          vel ullamcorper facilisis. donec leo lectus vel
                          ullamcorper facilisis.
                        </p>
                      </div>
                    )}
                    {c3 && (
                      <div className="fadeIn">
                        <p className="text-start text-white fw-bolder fs-2">
                          Experience
                        </p>
                        <p className="text-start text-white fw-normal fs-4">
                          Throughout your journey from ideation to execution
                          lorem ipsum dolor sit amet consectetur. lorem et donec
                          leo lectus vel ullamcorper facilisis. lorem ipsum
                          dolor sit amet consectetur. lorem et donec leo lectus
                          vel ullamcorper facilisis. donec leo lectus vel
                          ullamcorper facilisis.
                        </p>
                      </div>
                    )}
                    {c4 && (
                      <div className="fadeIn">
                        <p className="text-start text-white fw-bolder fs-2">
                          Details
                        </p>
                        <p className="text-start text-white fw-normal fs-4">
                          Throughout your journey from ideation to execution
                          lorem ipsum dolor sit amet consectetur. lorem et donec
                          leo lectus vel ullamcorper facilisis. lorem ipsum
                          dolor sit amet consectetur. lorem et donec leo lectus
                          vel ullamcorper facilisis. donec leo lectus vel
                          ullamcorper facilisis.
                        </p>
                      </div>
                    )}
                    {c5 && (
                      <div className="fadeIn">
                        <p className="text-start text-white fw-bolder fs-2">
                          24/7
                        </p>
                        <p className="text-start text-white fw-normal fs-4">
                          Throughout your journey from ideation to execution
                          lorem ipsum dolor sit amet consectetur. lorem et donec
                          leo lectus vel ullamcorper facilisis. lorem ipsum
                          dolor sit amet consectetur. lorem et donec leo lectus
                          vel ullamcorper facilisis. donec leo lectus vel
                          ullamcorper facilisis.
                        </p>
                      </div>
                    )}
                    {c6 && (
                      <div className="fadeIn">
                        <p className="text-start text-white fw-bolder fs-2">
                          Clients
                        </p>
                        <p className="text-start text-white fw-normal fs-4">
                          Throughout your journey from ideation to execution
                          lorem ipsum dolor sit amet consectetur. lorem et donec
                          leo lectus vel ullamcorper facilisis. lorem ipsum
                          dolor sit amet consectetur. lorem et donec leo lectus
                          vel ullamcorper facilisis. donec leo lectus vel
                          ullamcorper facilisis.
                        </p>
                      </div>
                    )}
                    {c7 && (
                      <div className="fadeIn">
                        <p className="text-start text-white fw-bolder fs-2">
                          Dedication
                        </p>
                        <p className="text-start text-white fw-normal fs-4">
                          Throughout your journey from ideation to execution
                          lorem ipsum dolor sit amet consectetur. lorem et donec
                          leo lectus vel ullamcorper facilisis. lorem ipsum
                          dolor sit amet consectetur. lorem et donec leo lectus
                          vel ullamcorper facilisis. donec leo lectus vel
                          ullamcorper facilisis.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="col-10 col-md-6 m-md-3 m-0 mb-3">
              <p className="text-start display-6 fw-semibold text-white">
                Our services empower businesses with a strategy-led approach at
                every step of their product's lifecycle
              </p>
            </div>
            <div className="container text-center mb-5">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="container">
                    <DynamicAccordion
                      items={AccordionList}
                      sendData={(event) => sendData(event)}
                    />
                  </div>
                </div>
                <div className="col-6 overflow-hidden d-none d-sm-none d-md-flex">
                  <ImageSlider index={data} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className={`${styles["sec-3-h2"]} text-white`}>
            PROCESS
            <span className={`${styles.crewareRed}`}> CYCLE OF SERVICE</span>
          </h2>

          <div className={`container m-0`}>
            <div
              className={`row vw-100 pe-3 ${
                isDivVisible ? `${styles.visible}` : `${styles.hidden}`
              }`}
            >
              <img
                src={"/images/services/circleNoLoop.gif"}
                alt="Random Image"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <div className="row d-flex flex-column flex-sm-column flex-lg-row">
              <div
                className={`${styles["bg-gif"]} col col-lg-6 lh-1 d-flex flex-column align-items-center justify-content-center`}
              >
                <div className="text-left d-flex align-items-start justify-content-start w-50">
                  <p className="text-left text-white fw-semibold d-flex fs-5">
                    Clients
                  </p>
                </div>
                <div className="text-left d-flex align-items-start justify-content-start w-50">
                  <div className="display-4 text-nowrap fw-bold text-white">
                    They Are Our
                  </div>
                </div>
                <div className="text-left d-flex align-items-start justify-content-start w-50">
                  <span className={`display-4 fw-bold ${styles.crewareRed}`}>
                    {" "}
                    Companions
                  </span>
                </div>
              </div>
              <div className="col col-lg-6 ps-0">
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

        <section>
          <h2 className={`${styles["sec-3-h2"]} mt-5 mb-0 text-white`}>
            Industries We<span className={`${styles.crewareRed}`}> Served</span>
          </h2>

          <div className="m-5 text-center">
            <div className="row d-flex flex-column flex-sm-column flex-md-row">
              <div className="col-12 col-md-6">
                <div className="row">
                  {Industries.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="col-6 col-sm-4 col-md-4 col-lg-3 p-3 d-flex align-items-center flex-column"
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
                          <img
                            alt="img"
                            width={50}
                            height={50}
                            key={image}
                            src={`/images/services/industryLogos/${image.name}.png`}
                            className="img-responsive"
                          />
                          <p className="m-0 text-capitalize text-white text-white">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-6 col-12">
                {Industries.map((image, index) => {
                  if (imageName == image.name) {
                    return (
                      <div className="col" key={index}>
                        <div className="col">
                          <p
                            className={`text-start text-capitalize text-white fw-medium mt-5 fs-1`}
                          >
                            {image.name}
                          </p>
                          <p className="text-start text-white fw-medium fs-5">
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
                            <ServiceCards portfolioList={portfolio} />
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
            <div className="row d-flex flex-column flex-sm-column flex-lg-row">
              <div
                className={`${styles["bg-gif"]} col-12 col-lg-6 px-5 lh-1 d-flex flex-column align-items-end justify-content-center mb-4 mb-lg-0`}
              >
                <div className="ps-lg-5 ms-lg-5 my-3 col-10 text-start">
                  <div className="text-start d-flex align-items-start justify-content-start">
                    <p className="text-start text-white d-flex fs-4 fw-medium">
                      Our Process
                    </p>
                  </div>
                  <div className="fs-1 fw-bold text-white text-start">
                    Flexible iterative approach to continuous project
                    improvement.
                  </div>
                  <div className={`fs-1 fw-bold text-start text-white`}>
                    -
                    <span
                      className={`fs-1 fw-bold text-start ${styles.crewareRed}`}
                    >
                      {" "}
                      Agile methodology.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col col-lg-6 ps-0">
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
          <div
            className={`${styles.trustedBy} d-flex w-100 p-4 position-relative mt-5`}
          >
            <div className="container text-center d-flex align-items-center justify-content-center">
              <div className="row d-flex flex-xs-column flex-sm-row">
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3 px-5 p-sm-0 mb-3 mb-sm-0 d-flex align-items-center justify-content-center">
                  <img
                    src="/images/services/images/trustedBy.png"
                    alt="img"
                    className="mw-100 h-auto"
                  ></img>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3 fw-bolder text-start d-flex align-items-center justify-content-center">
                  <p className="text-white mb-0">
                    Our passion for diverse technology solutions and interactive
                    customer - centric services have enabled us to serve in over
                    30 + countries{" "}
                  </p>
                </div>
                <div className="col-xs-6 col-sm-2 col-md-2 col-lg-3 d-flex flex-column align-items-center justify-content-center fw-bolder fs-3 text-light">
                  1300+ <p className="fs-6 text-white">Global Clients</p>
                </div>
                <div className="col-xs-6 col-sm-2 col-md-2 col-lg-3 d-flex flex-column align-items-center justify-content-center fw-bolder fs-3 text-light">
                  5000+ <p className="fs-6 text-white">Project Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container my-5">
            <h2 className={`${styles["sec-3-h2"]} mt-5 mb-0 text-white`}>
              TESTIMONIALS
            </h2>
            <Testimonial />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Services;
