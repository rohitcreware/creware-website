/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from "react";
import "../../Style/QueryForm.scss";
import "react-tabs/style/react-tabs.css";
import styles from "./HireTeam.module.scss";
import { Roles } from "../../../Json/Roles";
import { TabLists } from "../../../Json/TabLists";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ExpandingCards from "../ExpandingCards/ExpandingCards";
import { ExpandingCardsList } from "../../../Json/ExpandingCardsList";
import { HireTeamTestimonials } from "../../../Json/HireTeamTestimonials";
import { HireTeamCards } from "../../../Json/HireTeamCards";
import ContactForm from "./ContactForm/ContactForm";

import Image from "next/image";
import { LeftArrow, RightArrow } from "../Svgs/hireteam";
import { useInView } from "framer-motion";

const HireTeam = () => {
  const hireSecRef = useRef(null);
  const ThumbsupSecRef = useRef(null);
  const hireDevSec = useRef(null);
  const ishireSecInView = useInView(hireSecRef, { once: true });
  const isThumbsUpIsInView = useInView(ThumbsupSecRef, { once: true });

  const [pageNum, setPageNum] = useState(0);
  const [buttonAnimRoute, setButtonAnimeRoute] = useState("next");
  const [buttonAnim, setButtonAnim] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const [multipleRoles, setMultipleRoles] = useState([]);

  useEffect(() => {
    let ex1 = buttonAnimRoute;
    let ex = buttonAnimRoute === "prev" ? "next" : "prev";
    setButtonAnimeRoute(ex, () => {
      setButtonAnimeRoute(ex1);
    });
  }, [buttonAnim]);

  useEffect(() => {
    Roles.map((data, index) => {
      setMultipleRoles((prev) => [...prev, false]);
    });
  }, [Roles]);

  const pagination = (move) => {
    move;
    if (move == "prev") {
      if (pageNum == 0) {
      } else {
        setPageNum(pageNum - 1);
      }

      setButtonAnimeRoute("prev");
      setButtonAnim(!buttonAnim);
    } else {
      if (HireTeamTestimonials.length - 1 == pageNum) {
      } else {
        setPageNum(pageNum + 1);
      }

      setButtonAnimeRoute("next");
      setButtonAnim(!buttonAnim);
    }
  };

  const handleDevButton = (index) => {
    let defaultMulitpleRoles = [...multipleRoles];
    defaultMulitpleRoles[index] = !defaultMulitpleRoles[index];
    setMultipleRoles(defaultMulitpleRoles);
  };

  const hireDevClickHandler = () => {
    hireDevSec.current.scrollIntoView({ behavior: "smooth" });
  };

  console.log(multipleRoles);

  return (
    <div className={`${styles["hireTeam"]}`}>
      <section>
        <section className={`${styles["bg-gif"]}`}>
          <div
            className={`container align-items-center justify-content-center d-flex`}
          >
            <div className="row d-flex flex-column flex-sm-column flex-lg-row ms-md-4">
              <div className="col d-flex flex-column flex-sm-column">
                <div
                  className={`${styles["slide-effect"]} d-flex flex-column align-items-start justify-content-start`}
                >
                  <div className={styles["scroll_to_full"]}>
                    <h1
                      className={`${styles["fadeInUp"]} ${styles["top_title"]} `}
                    >
                      HIRE <span style={{ color: "#D0021b" }}>Team</span>
                    </h1>
                  </div>
                </div>
                <div>
                  <h5 className={styles["sub_title"]}>
                    Enhance Profitability And Efficiency, While Freeing Up
                    Internal Resources To FocUs On Key Tasks
                  </h5>
                </div>
                <div className="my-4">
                  <button
                    className={`${styles.background} ${styles.hire_button}`}
                    onClick={hireDevClickHandler}
                  >
                    HIRE-DEVELOPER
                  </button>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-center mt-5  flex-column">
                <Image
                  src="/images/hireTeam/handshake.gif"
                  alt="img"
                  width={0}
                  height={0}
                  className={styles["hire_dev_anim"]}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={`col-12 col-md-10  container mt-4 py-4`} id="hire">
            <div className="row">
              <div className="col" ref={hireSecRef}>
                {ishireSecInView ? (
                  <div className="full_dimension">
                    <h6
                      className={`${styles.crewareRed} ${styles["hire_title"]} slideHeadDown fw-normal`}
                    >
                      HIRE WEB APP DEVELOPERS OF YOUR CHOICE
                    </h6>
                    <h3
                      className={`${styles.crewareRed} ${styles["experienced_web_title"]} my-3`}
                    >
                      <div className="full_dimension">
                        <div className="slideHeadDown">
                          Experienced Web Developers for Hire
                        </div>
                      </div>
                    </h3>
                    <div className="container px-0 py-0 py-md-4">
                      <div className="row d-flex flex-column flex-md-column flex-lg-row">
                        <div className="col-12 col-md-12 col-lg-5 mb-3 mb-md-0">
                          <div className="full_dimension">
                            <div
                              className={`${styles["exp_left"]} slideHeadDown col-11`}
                            >
                              “Lorem ipsum dolor sit amet “Consectetur. Lorem et
                              donec leo lectus vel ullamcorper facilisis. Dictum
                              eros enim enim luctus sit semper euismod.Lorem
                              ipsum dolor sit amet consectetur”.
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-7">
                          {" "}
                          <div className="full_dimension">
                            <div
                              className={`${styles["exp_right"]} slideHeadDown text-white fw-normal ps-lg-5 mt-3 mt-lg-0`}
                            >
                              With Lorem ipsum dolor sit amet “Consectetur.
                              Lorem et donec leo lectus vel ullamcorper
                              facilisis. Dictum eros enim enim luctus sit semper
                              euismod.Lorem ipsum dolor sit amet
                              consecteturLorem ipsum dolor sit amet consectetur.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["exp_bottom_para"]}>
                      <div className="full_dimension">
                        <div className="slideHeadDown">
                          With Lorem ipsum dolor sit amet “Consectetur. Lorem et
                          donec leo lectus vel ullamcorper facilisis. Dictum
                          eros enim enim luctus sit semper euismod.Lorem ipsum
                          dolor sit amet consecteturLorem ipsum dolor sit amet
                          consectetur.
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ height: "70vh" }}></div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-3 mt-md-5 col-12 col-md-10">
            <h2
              className={`${styles.crewareRed} ${styles["dedicated_title"]} fw-bold`}
            >
              Expertise of our Web Developers
            </h2>
            <p className={styles["dedicated_subtitle"]}>
              With Lorem ipsum dolor sit amet “Consectetur. Lorem et donec leo
              lectus vel ullamcorper facilisis. Dictum eros enim enim luctus sit
              semper euismod.Lorem ipsum dolor sit amet consecteturLorem ipsum
              dolor sit amet consectetur.
            </p>
            <div className="container ps-0">
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
              >
                <TabList className={styles["tablist_main"]}>
                  {TabLists.map((tabData, index) => {
                    return (
                      <Tab key={index}>
                        <div className={`${styles["exp_tab_title"]}`}>
                          {tabData.tab}
                          {tabIndex === index ? (
                            <div className={styles["exp_tab_selected"]} />
                          ) : (
                            <div className={styles["exp_tab_un_selected"]} />
                          )}
                        </div>
                      </Tab>
                    );
                  })}
                </TabList>

                {TabLists.map((tabData, index) => {
                  return (
                    <TabPanel key={index}>
                      <div className="container">
                        <div className="row">
                          <div className="col-12 col-md-12 col-lg-4 ps-0">
                            <div className="d-flex align-items-start justify-content-start flex-column text-start my-sm-3">
                              <h4
                                className={`${styles.crewareRed} ${styles["tech_headings"]} fw-semibold`}
                              >
                                {tabData.heading}
                              </h4>
                              <p className={styles["tech_desc"]}>
                                {tabData.desc}
                              </p>
                            </div>
                          </div>
                          <div
                            className={`${styles["tabs_icons_main"]} col-12 col-md-12 col-lg-8 mt-3`}
                          >
                            <div className="container">
                              <div className="row gy-5">
                                {tabData["icon"].map((data, i) => {
                                  return (
                                    <div
                                      className={`${styles["main_tech_icon"]} col-4 col-md-3`}
                                      key={i}
                                    >
                                      <img
                                        src={`/images/hireTeam/tabsImages/${data}.svg`}
                                        alt="img"
                                        className={`${styles["tech-icons"]}`}
                                      />

                                      <h6
                                        className={`${styles["logo_names"]} mt-2`}
                                      >
                                        {data}
                                      </h6>
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
          <div className="container mt-2 mt-md-5 col-12 col-md-10">
            <h2
              className={`${styles.crewareRed} ${styles["dedicated_title"]} fw-bold`}
            >
              Hire Dedicated Web Developers in 5 Simple Steps
            </h2>
            <p className={styles["dedicated_subtitle"]}>
              With Lorem ipsum dolor sit amet “Consectetur. Lorem et donec leo
              lectus vel ullamcorper facilisis. Dictum eros enim enim luctus sit
              semper euismod.Lorem ipsum dolor sit amet consecteturLorem ipsum
              dolor sit amet consectetur.
            </p>
            <div className="container p-0 d-flex align-items-start justify-content-start">
              <ExpandingCards cardList={ExpandingCardsList} />
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-2 mt-md-5 col-12 col-md-10">
            <h2
              className={`${styles.crewareRed} ${styles["dedicated_title"]} fw-bold`}
            >
              Why should you Hire Web developers from us?
            </h2>
            <p className={`${styles["why_subtitle"]} mt-3`}>
              Hidden Brains is continuously bringing business ideas to life with
              a team that is at the forefront of technology innovation.
            </p>

            <div className="container">
              <div className="row d-flex justify-content-start align-items-start">
                {HireTeamCards.map((card, index) => {
                  return (
                    <div
                      className={`col-md-6 col-lg-6 col-xl-3 ${styles.hireCards} pt-1  pt-md-5 mt-3`}
                      key={index}
                    >
                      <div
                        className={`${styles["hire_card_main"]}  border border-white rounded-4 d-fles align-items-start justify-content-start`}
                      >
                        <h3 className={`${styles.crewareRed} fs-4`}>
                          {card.heading}
                        </h3>
                        <p className={styles["hire_cards_desc"]}>{card.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container col-12 col-md-10  mt-0 mt-md-5">
            <div className="row d-flex flex-column flex-md-column flex-lg-row">
              <div className="col-12 col-md-12 col-lg-8 mt-5">
                <h6
                  className={`${styles.crewareRed} fw-normal`}
                  style={{ textTransform: "capitalize" }}
                >
                  Testimonials
                </h6>
                <h2 className="text-white fw-semibold">What our clients say</h2>
                <h2 className="text-white fw-semibold mb-4">about us</h2>

                {HireTeamTestimonials.map((item, index) => {
                  return (
                    <div className="col-12 col-sm-10 col-md-11" key={index}>
                      {pageNum == index && (
                        <div>
                          <div className={styles["scroll_to_full"]}>
                            <p
                              className={`${
                                buttonAnimRoute === "next"
                                  ? styles["fadeInDown"]
                                  : styles["fadeInUp"]
                              } text-white col-12 fw-light`}
                            >
                              {item.desc}
                            </p>
                          </div>
                          <div className={styles["scroll_to_full"]}>
                            <div
                              className={`${
                                buttonAnimRoute === "next"
                                  ? styles["fadeInDown"]
                                  : styles["fadeInUp"]
                              }`}
                            >
                              <p className={`text-white m-0 mt-4 p-0`}>
                                {item.head}
                              </p>

                              <p className={`text-white`}>{item.subHead}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="col-11 d-flex align-items-center justify-content-between">
                  <div className={`text-white d-flex align-items-center`}>
                    <div className={styles["scroll_num"]}>
                      <div
                        className={`${
                          buttonAnimRoute === "next"
                            ? styles["fadeInDown"]
                            : styles["fadeInUp"]
                        }`}
                      >
                        {pageNum + 1}
                      </div>
                    </div>
                    <div className={`mx-3 ${styles.w3}`} size="10" />
                    <span>{HireTeamTestimonials.length}</span>
                  </div>
                  <div className="d-flex gap-2">
                    <div
                      role={`${pageNum == 0 ? "" : `button`}`}
                      className={`fs-2 ${
                        pageNum == 0 ? "" : `${styles.enable}`
                      }`}
                      onClick={
                        pageNum !== 0 ? () => pagination("prev") : () => {}
                      }
                    >
                      <LeftArrow />
                    </div>
                    <div
                      role={`${
                        pageNum >= 0 &&
                        pageNum < HireTeamTestimonials.length - 1
                          ? `button`
                          : ""
                      }`}
                      className={`fs-2 ${
                        HireTeamTestimonials.length - 1 == pageNum
                          ? styles.disable
                          : `${styles.enable}`
                      }`}
                      onClick={
                        pageNum + 1 !== HireTeamTestimonials?.length
                          ? () => pagination("next")
                          : () => {}
                      }
                    >
                      <RightArrow />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center col-lg-4  my-3 my-lg-0  text-center"
                ref={ThumbsupSecRef}
              >
                {isThumbsUpIsInView && (
                  <div className={`${styles.zoomIn}`}>
                    <Image
                      width={0}
                      height={0}
                      src={`/images/hireTeam/thumbsup/${pageNum + 1}.jpg`}
                      alt="Thumbs Up"
                      className={`${styles["hireTeamThumbsUp"]}`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section ref={hireDevSec}>
          <div className="container mt-4 col-12 col-sm-10">
            <h2 className="text-white fw-bold">Get in Touch</h2>
            <h2 className={`${styles.crewareRed} fw-semibold`}>
              Let's find your developers
            </h2>
            <h6 className="text-white fw-normal">
              Please select at least one role
            </h6>
            <div className={`${styles["dev_buttons_main"]}`}>
              {Roles.map((data, index) => {
                return (
                  <button
                    className={`${styles.dev_button} ${
                      multipleRoles[index] === true
                        ? styles["selected_dev_button"]
                        : "false"
                    }`}
                    key={index}
                    onClick={() => handleDevButton(index)}
                  >
                    <div className={`${styles.roleImg}`}>{data.icon}</div>
                    {data.text}
                  </button>
                );
              })}
            </div>

            <div className={styles["other_roles_input"]}>
              <input
                type="text"
                placeholder="Enter other roles (if any)"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        </section>

        <section>
          <div
            className="container mt-4 col-12 col-sm-10"
            style={{ overflow: "hidden" }}
          >
            <div className="row">
              <div className="col-12 col-lg-7 mt-4">
                <ContactForm />
              </div>

              <div className="col-1 d-none d-lg-block" />

              <div className="col-lg-4 d-none d-lg-block">
                <Image
                  src={require("../../../public/images/hireTeam/semi_circle_img.png")}
                  width={0}
                  height={0}
                  className={styles["rock_pic"]}
                  alt="rock"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HireTeam;
