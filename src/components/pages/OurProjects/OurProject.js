"use client";
import React from "react";
import Image from "next/image";
import styles from "./OurProjects.module.scss";
import Card from "../OurProjects/Card";
import profile from "../../../../public/images/contact/profile.png";
import { useRouter } from "next/navigation";

const OurProject = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/contact-us"); // Redirect to the "/contactus" route
  };
  return (
    <div id={`${styles["ourprojectsmain"]}`}>
      <div className="container">
        <div className="row my-sm-5">
          <div className={`${styles["first-left"]} col-12 col-lg-6`}>
            <h2 className={`${styles["first-h2"]}`}>
              Makes Project Management Easily
            </h2>
            <p className={`${styles["first-p"]}`}>
              Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
              tempus sed tempus. Lorem ipsum dolor sit amet consectetur. Ipsum
              molestie pulvinar tempus sed tempus.
            </p>
            <div className={`${styles["first-btn"]}`}>
              <button type="button" onClick={handleButtonClick}>
                Contact Us
              </button>
            </div>
          </div>
          <div className={`${styles["first-right"]} col-12 col-lg-6`}>
            <div className={`${styles["uppersec-img-div"]}`}>
              <Image
                alt="image"
                src={profile}
                height={0}
                width={0}
                sizes="100vw"
                className={`${styles["main-img"]}`}
              />

              <div className={`${styles["uppersec-card"]} card`}>
                <div className={`${styles["card-body"]}`}>
                  <h6
                    className={`${styles["main-h6"]} card-subtitle mb-2 text-muted`}
                  >
                    Project Performance Rate
                  </h6>
                  <div>
                    <div className={`${styles["details"]}`}>
                      <h6>Web Development</h6>
                      <div>98%</div>
                    </div>
                    <div
                      className={`${styles["progress"]} ${styles["progress-striped1"]}`}
                    >
                      <div
                        className={`${styles["progress-bar1"]} `}
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div>
                    <div className={`${styles["details"]}`}>
                      <h6>Design</h6>
                      <div>96%</div>
                    </div>
                    <div
                      className={`${styles["progress"]} ${styles["progress-striped2"]}`}
                    >
                      <div
                        className={`${styles["progress-bar2"]} `}
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div>
                    <div className={`${styles["details"]}`}>
                      <h6>Sales & Marketing</h6>
                      <div>95%</div>
                    </div>
                    <div
                      className={`${styles["progress"]}  ${styles["progress-striped3"]}`}
                    >
                      <div
                        className={`${styles["progress-bar3"]}`}
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles["card-row"]} row`}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default OurProject;
