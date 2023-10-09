"use client";
import React, { useEffect, useState } from "react";
import "../../Style/QueryForm.scss";
import "react-tabs/style/react-tabs.css";
import styles from "./HireTeam.module.scss";
import { Roles } from "../../../Json/Roles";
import { TabLists } from "../../../Json/TabLists";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ExpandingCards from "../ExpandingCards/ExpandingCards";
import { ExpandingCardsList } from "../../../Json/ExpandingCardsList";
import { HireTeamTestimonials } from "../../../Json/HireTeamTestimonials";
import queryStyles from "../../components/pages/Hero/QueryForm.module.scss";
import { HireTeamCards } from "../../../Json/HireTeamCards";
import RightArrowTowardsButton from "../Animations/RightArrowTowardsButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const HireTeam = () => {
  const [isDivVisible, setDivVisible] = useState(false);
  const [isThumbsUp, setIsThumbsUp] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const arrowRight = (
    <FontAwesomeIcon icon={faArrowRight} style={{ color: "white" }} />
  );
  const arrowLeft = (
    <FontAwesomeIcon icon={faArrowLeft} style={{ color: "white" }} />
  );
  // You can adjust the scroll threshold as needed
  const scrollThreshold = 950; // Adjust this value according to your preference
  const scrollThresholdForThumbsUpImg = 2500; // Adjust this value according to your preference

  const handleScroll = () => {
    // Get the current scroll position
    const scrollY = window.scrollY;

    if (scrollY <= scrollThreshold && !isDivVisible) {
      // If the scroll position is less than or equal to the threshold and the div is hidden, show it
      setDivVisible(true);
    }
    if (scrollY > scrollThresholdForThumbsUpImg && !isThumbsUp) {
      // If the scroll position is less than or equal to the threshold and the div is hidden, show it [For Thumbs up img]
      setIsThumbsUp(true);
    }
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pagination = (move) => {
    console.log(move);
    if (move == "prev") {
      if (pageNum == 0) {
        console.log("first page");
      } else {
        setPageNum(pageNum - 1);
      }
    } else {
      if (HireTeamTestimonials.length - 1 == pageNum) {
        console.log("last page");
      } else {
        setPageNum(pageNum + 1);
      }
    }
  };

  return (
    <div className={`${styles["hireTeam"]}`}>
      <section>
        <section className={`${styles["bg-gif"]}`}>
          <div
            className={`container align-items-center justify-content-center d-flex`}
          >
            <div className="row d-flex flex-column flex-sm-column flex-lg-row ms-4">
              <div className="col d-flex flex-column flex-sm-column">
                <div
                  className={`${styles["slide-effect"]} d-flex flex-column align-items-start justify-content-start`}
                >
                  <div
                    className={`${styles["slideUp"]} fs-6-5rem fw-bold text-white`}
                  >
                    HIRE
                  </div>
                  <div
                    className={`${styles["slideUp"]} fs-6-5rem fw-bold ${styles.crewareRed}`}
                  >
                    DEVELOPER
                  </div>
                </div>
                <div>
                  <h5 className={`text-start' text-white fw-medium`}>
                    Enhance Profitability And Efficiency, While Freeing Up
                    Internal Resources To FocUs On Key Tasks
                  </h5>
                </div>
                <div className="my-4">
                  <button
                    className={`${styles.background} text-white border border-danger rounded-3 px-3 h-2rem`}
                  >
                    HIRE-DEVELOPER
                  </button>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-center mt-5 pe-5 pe-lg-0 flex-column">
                <img
                  src="/images/hireTeam/handshake.gif"
                  alt="img"
                  width={"100%"}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className={`col-8 container mt-4 ${
              isDivVisible ? `${styles.visible} ${styles.slideDown}` : ""
            } ${styles.hidden}`}
            id="hire"
          >
            <div className="row">
              <div className="col">
                <h6 className={`${styles.crewareRed} fw-normal`}>
                  HIRE WEB APP DEVELOPERS OF YOUR CHOICE
                </h6>
                <h3 className={`${styles.crewareRed} my-3 fw-normal`}>
                  Experienced Web Developers for Hire
                </h3>
                <div className="container px-0 py-4">
                  <div className="row d-flex flex-column flex-md-column flex-lg-row">
                    <div className="col-12 col-md-12 col-lg-4 mb-3 mb-md-0">
                      <div className="text-white fw-medium col-12">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.{" "}
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-8">
                      <div className="text-white fw-normal">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-white fw-normal">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-5 col-8">
            <h2 className={`${styles.crewareRed} fw-bold`}>
              Expertise of our Web Developers
            </h2>
            <p className="text-white mt-3 fw-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
            <div className="container ps-0">
              <Tabs>
                <TabList>
                  {TabLists.map((tabData, index) => {
                    return (
                      <Tab key={index}>
                        <div className="fs-13 fw-medium">{tabData.tab}</div>
                      </Tab>
                    );
                  })}
                </TabList>

                {TabLists.map((tabData, index) => {
                  return (
                    <TabPanel key={index}>
                      <div className="container">
                        <div className="row flex-column flex-md-column flex-lg-row">
                          <div className="col-12 col-md-12 col-lg-4 ps-0">
                            <div className="d-flex align-items-start justify-content-start flex-column text-start my-3">
                              <h4
                                className={`${styles.crewareRed} fw-semibold`}
                              >
                                {tabData.heading}
                              </h4>
                              <p className="text-white mt-3 fw-medium">
                                {tabData.desc}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-md-12 col-lg-8">
                            <div className="container">
                              <div className="row">
                                {tabData["icon"].map((data, i) => {
                                  return (
                                    <div
                                      className="col-3 p-4 d-flex align-items-center justify-content-center"
                                      key={i}
                                    >
                                      <img
                                        src={`/images/hireTeam/tabsImages/${data}.svg`}
                                        alt="img"
                                        className={`${styles["tech-icons"]}`}
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  );
                })}
              </Tabs>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-5 col-8">
            <h2 className={`${styles.crewareRed} fw-bold`}>
              Hire Dedicated Web Developers in 5 Simple Steps
            </h2>
            <p className="text-white fw-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
            <div className="container p-0 d-flex align-items-start justify-content-start">
              {/* {ExpandingCardsList.map((item, index) => {
                return ( */}
              {/* <ExpandingCards data={item} key={index}/> */}
              <ExpandingCards cardList={ExpandingCardsList} />
              {/* )
              })} */}
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-5 col-8 px-0">
            <h2 className={`${styles.crewareRed} fw-bold`}>
              Why should you hire Web developers from us?
            </h2>
            <p className="text-white fw-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            <div className="container">
              <div className="row d-flex justify-content-start align-items-start">
                {HireTeamCards.map((card, index) => {
                  return (
                    <div
                      className={`col-md-6 col-lg-4 col-xl-3 ${styles.hireCards} pt-5 mt-3`}
                      key={index}
                    >
                      <div className="border border-white rounded-4 d-fles align-items-start justify-content-start p-4">
                        <h3 className={`${styles.crewareRed} fs-4`}>
                          {card.heading}
                        </h3>
                        <p className={`text-white fw-medium fs-13`}>
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container col-8">
            <div className="row d-flex flex-column flex-md-column flex-lg-row">
              <div className="col-12 col-md-12 col-lg-8 mt-5">
                <h6 className={`${styles.crewareRed} fw-normal`}>
                  Testimonials
                </h6>
                <h2 className="text-white fw-semibold">What our clients say</h2>
                <h2 className="text-white fw-semibold">about us</h2>

                {HireTeamTestimonials.map((item, index) => {
                  return (
                    <div className="col-12 col-sm-10 col-md-11" key={index}>
                      {pageNum == index && (
                        <div>
                          <p
                            className={`${styles.fadeInUp} text-white col-12 fw-light`}
                          >
                            {item.desc}
                          </p>
                          <p
                            className={`${styles.fadeInUp} text-white m-0 mt-4 p-0`}
                          >
                            {item.head}
                          </p>
                          <p className={`${styles.fadeInUp} text-white`}>
                            {item.subHead}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="col-11 d-flex align-items-center justify-content-between">
                  <div
                    className={` text-white d-flex align-items-center justify-content-center`}
                  >
                    <div className={`${styles.fadeInUp}`}>{pageNum + 1}</div>
                    <div
                      className={`mx-3 ${styles.w3} ${styles.borderTop}`}
                      size="10"
                    ></div>
                    <div className={`${styles.fadeInUp}`}>
                      {HireTeamTestimonials.length}
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <div
                      role={`${pageNum == 0 ? "" : `button`}`}
                      className={`fs-2 ${
                        pageNum == 0 ? "" : `${styles.enable}`
                      }`}
                      onClick={() => pagination("prev")}
                    >
                      {arrowLeft}
                    </div>
                    <div
                      role={`${pageNum == 0 ? "" : `button`}`}
                      className={`fs-2 ${
                        HireTeamTestimonials.length - 1 == pageNum
                          ? ""
                          : `${styles.enable}`
                      }`}
                      onClick={() => pagination("next")}
                    >
                      {arrowRight}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 mt-5 d-flex align-items-center justify-content-center">
                {isThumbsUp && (
                  <div className={`${styles.zoomIn}`}>
                    <img
                      src={"/images/hireTeam/hireTeamThumbsUp.png"}
                      alt="Thumbs Up"
                      className={`${styles["hireTeamThumbsUp"]}`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="ms-3 ms-sm-0">
          <div className="container mt-4 col-12 col-sm-8">
            <h2 className="text-white fw-bold">Get in Touch</h2>
            <h2 className={`${styles.crewareRed} fw-semibold`}>
              Let's find your developers
            </h2>
            <h6 className="text-white fw-normal">
              Please select at least one role
            </h6>
            <div className="container">
              <div className="row d-flex justify-content-start">
                {Roles.map((data, index) => {
                  return (
                    <div
                      className="col-6 col-xs-2 col-md-3 col-lg-2 col-xl-2 my-2 ps-0"
                      key={index}
                    >
                      <button
                        className={`${styles.fontSize} gap-2 w-100 bg-white text-black px-4 py-2 rounded-1 border-0 text-nowrap d-flex align-items-center justify-content-center`}
                      >
                        <img
                          alt="role img"
                          className={`${styles.roleImg}`}
                          src={`/images/hireTeam/roles/${data.icon}.svg`}
                        />
                        {data.text}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="container ps-0">
              <div className="row">
                <div className="col-12 col-md-5 py-3">
                  <input
                    type="text"
                    className="col-4 w-100 rounded-1 fw-light border-0"
                    placeholder="Enter other roles (if any)"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className={`${queryStyles["form-second-div"]} container col-8 col-lg-8 mb-5 mt-4`}
          >
            <div className="row ">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xxl-8">
                <div className={`${queryStyles["form-row"]}`}>
                  <div>
                    <label className={`${queryStyles["form-lable"]}`}>
                      HI! I am
                    </label>
                    <span> </span>
                    <input
                      type="text"
                      placeholder="eg : Musk"
                      className={`${queryStyles["input-box"]}`}
                    ></input>
                  </div>
                  <div>
                    <label className={`${queryStyles["form-lable"]}`}>
                      Reach me at
                    </label>
                    <span> </span>
                    <input
                      type="email"
                      placeholder="eg : musk@first.com"
                      className={`${queryStyles["input-box"]}`}
                    ></input>
                  </div>
                  <div>
                    <label className={`${queryStyles["form-lable"]}`}>
                      Country
                    </label>
                    <span> </span>
                    <input
                      type="text"
                      placeholder="eg : India"
                      className={`${queryStyles["input-box"]}`}
                    ></input>
                  </div>
                  <div>
                    <label className={`${queryStyles["form-lable"]}`}>
                      Mobile no.
                    </label>
                    <span> </span>
                    <input
                      type="tel"
                      placeholder="eg : 9876543210"
                      className={`${queryStyles["input-box"]}`}
                    ></input>
                  </div>
                  <div>
                    {" "}
                    <label className={`${queryStyles["form-lable"]}`}>
                      Company Name
                    </label>
                    <span> </span>
                    <input
                      type="text"
                      placeholder="eg : Creware technologies"
                      className={`${queryStyles["input-box"]}`}
                    ></input>
                  </div>
                  <div className={`${queryStyles["message-div"]}`}>
                    <label className={`${queryStyles["form-lable"]}`}>
                      Message{" "}
                    </label>
                    <span> </span>
                    <textarea
                      type="text-area"
                      placeholder="eg : ......."
                      className={`${queryStyles["text-area"]}`}
                    ></textarea>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-white fs-11"
                      htmlFor="flexCheckDefault"
                    >
                      Lorem ipsum dolor sit amet consectetur. Lorem et donec leo
                      lectus vel ullamcorper facilisis. Dictum eros enim enim
                      luctus sit semper euismod..
                    </label>
                  </div>

                  {/* button section */}

                  <div className={`${queryStyles["button_section"]} row`}>
                    <div className="col-9">
                      <RightArrowTowardsButton
                        hover={buttonHover}
                        duration={0.5}
                      />
                    </div>

                    <div
                      style={{ textAlign: "center" }}
                      className={`${queryStyles["sendBtnCol"]} d-flex col-3`}
                    >
                      <a
                        href="#"
                        className={`${queryStyles["ball"]} ps-3`}
                        onMouseEnter={() => setButtonHover(true)}
                        onMouseLeave={() => setButtonHover(false)}
                      >
                        Send
                        <div
                          className={`${queryStyles["span-wrapper"]} ${styles["span-blocks"]}`}
                        >
                          <span className={`${queryStyles["s1"]}`}></span>
                          <span className={`${queryStyles["s2"]}`}></span>
                          <span className={`${queryStyles["s3"]}`}></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5 col-xxl-4 d-flex align-items-center justify-content-center d-none d-sm-none d-lg-flex mb-5">
                <div className={`${styles.left} overflow-hidden`}>
                  <img alt="img" src="/images/hireTeam/semiCircleImg.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HireTeam;
