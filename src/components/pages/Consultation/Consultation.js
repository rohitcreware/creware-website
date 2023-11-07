"use client";
import React, { useEffect, useState } from "react";
import styles from "./Consultation.module.scss";
``;
import LatestInsights from "../ContactUs/LatestInsights";
import QueryForm from "../Hero/QueryHome";
import Cards from "@/components/Cards/Cards";
import { CardData } from "../../../../Json/CardData";
import ContactusBtnSec from "../EnterpriseSfDev/ContactusBtnSec/ContactusBtnSec";
import NewLastestInsighr from "../ContactUs/NewLastestInsighr";
const Consultation = () => {
  const [isDivVisible, setDivVisible] = useState(false);
  const [cardDivVisible, setCardDivVisible] = useState(false);

  // You can adjust the scroll threshold as needed
  const scrollThreshold = 700; // Adjust this value according to your preference
  const scrollThresholdForText = 830;
  const handleScroll = () => {
    // Get the current scroll position
    const scrollY = window.scrollY;
    if (scrollY >= scrollThreshold && !isDivVisible) {
      // If the scroll position is less than or equal to the threshold and the div is hidden, show it
      setDivVisible(true);
    }
    if (scrollY >= scrollThresholdForText && !cardDivVisible) {
      // If the scroll position is less than or equal to the threshold and the div is hidden, show it
      setCardDivVisible(true);
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

  return (
    <div className={`${styles["wrap"]} overflow-hidden`}>
      {/* <section className={`${styles["consultation"]}`}> */}
      <div className={`py-5 ${styles["wrap"]}`}>
        <img
          className={`${styles.bg}`}
          src="/images/consultation/consultation-bg.gif"
          alt=""
        />
        <div className="container my-3 py-5">
          <div className="row mt-5">
            <h1 className="text-white display-4 fw-bold position-relative">
              TECHNOLOGY STRATEGY AND <br></br>CONSULTING
            </h1>
          </div>
          <div className="row">
            <p className="col-12 col-lg-4 fs-5 fw-medium text-white position-relative">
              Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
              tempus sed tempus. Et pharetra gravida sed sit gravida. Id at
              morbi dignissim mauris. Vulputate{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container text-white mt-5">
        <div className="row ms-sm-5 ms-0">
          <h2 className="fs-2 fw-bold">
            How can we <span className="color-red fw-semibold">help</span>
          </h2>
        </div>
        <div className="row ms-sm-5 ms-0">
          <p className="col-12 col-md-8">
            Et pharetra gravida sed sit gravida. Id at morbi dignissim mauris.
            Vulputate Et pharetra gravida sed sit gravida. Id at morbi dignissim
            mauris. Vulputate
          </p>
        </div>

        <div className="row mt-4 ms-4 ms-sm-5 ps-sm-5 me-0">
          {CardData.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <Cards cardDetails={data} />{" "}
              </React.Fragment>
            );
          })}
        </div>

        <div
          className={`row m-4 ${isDivVisible ? `${styles.visible}` : ""} ${
            styles.hidden
          } d-flex flex-column flex-lg-row`}
        >
          <div className="col-12 col-lg-6">
            <h2 className="fs-36 fw-semibold">
              Technology Everywhere but <br></br>
              <span className="color-red">Vaue Isn’t</span>
            </h2>

            <p className="mt-3 fs-18">
              Et pharetra gravida sed sit gravida. Id at morbi dignissim mauris.
              Vulputate Et pharetra gravida sLorem ipsum dolor sit amet
              consectetur. Ipsum molestie pulvinar tempus sed tempus. Et
              pharetra gravida sed sit gravida. Id at morbi dignissim mauris.
              Vulputate .Et pharetra gravida sed sit gravida. Id at morbi
              dignissim mauris. Vulputate Et pharetra gravida sLorem ipsum dolor
              sit amet consectetur. Ipsum molestie pulvinar tempus sed tempus.
              Et pharetra gravida sed sit gravida. Id at morbi dignissim mauris.
              Vulputate Et pharetra gravida sed sit gravida. Id at morbi
              dignissim mauris. Vulputate Et pharetra gravida sLorem ipsum dolor
              sit amet consectetur. Ipsum molestie pulvinar tempus sed tempus.
              Et pharetra gravida sed sit gravida. Id at morbi dignissim mauris.
              Vulputate{" "}
            </p>
          </div>
          <div className="col-12 col-lg-6 px-5 d-flex align-items-end">
            <img
              className="w-100"
              src="/images/consultation/globe.png"
              alt="globe img"
            />
          </div>
        </div>
      </div>
      <ContactusBtnSec />

      <section>
        <NewLastestInsighr />
      </section>

      <section>
        <QueryForm />
      </section>
      {/* </section> */}
    </div>
  );
};

export default Consultation;
