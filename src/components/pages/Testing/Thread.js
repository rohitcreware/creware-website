"use client";
import React, { useRef } from "react";
import styles from "./Thread.module.scss";
import { thread } from "./Json/thread";
import Image from "next/image";
import { useInView } from "framer-motion";

const Thread = () => {
  const digitalRef = useRef(null);
  const digitalInView = useInView(digitalRef, { once: true });
  const [showHide, setShowHide] = React.useState(false);
  return (
    <>
      <div className="container">
        <div className={`${styles["card"]} ${styles["text-center"]} `}>
          <div className={`${styles["main-card"]} card-body`}>
            <h3 className={`${styles["thread-card-title"]} card-title`}>
              Our testing team <span>expert on</span>
            </h3>
          </div>
        </div>
      </div>

      <div className={`${styles["tech-box"]} container`}>
        <div className={`${styles["container2"]} `}>
          {thread.map((item, index) => {
            return (
              <div
                ref={digitalRef}
                className={`${styles["thread"]} d-flex flex-column text-center position-static`}
                style={{ height: "40rem" }}
                key={index}
              >
                <div
                  className={` ${digitalInView ? styles[item.class] : ""}`}
                ></div>
                <div className={`${styles["foun-img-div"]} z-3`}>
                  <Image
                    src={item.img}
                    alt="img"
                    id={`${styles["thread-img"]}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Thread;
