"use client"
import React, { useEffect, useRef } from "react";
import styles from "./Thread.module.scss";
import { thread } from "../../../../Json/Thread";
import { useInView } from "framer-motion";

const Thread = () => {
  const digitalRef = useRef(null);
  const digitalInView = useInView(digitalRef, { once: true });
  const [showHide, setShowHide] = React.useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setShowHide(!showHide);
  //   },2900)
  // })
  return (
    <>
      <div className="container">
        <div className={`${styles["card"]} ${styles["text-center"]} `}>
          <div className={`${styles["main-card"]} card-body`}>
            <h3 className={`${styles["thread-card-title"]} card-title`}>
              WE ARE PROFESSIONAL AT{" "}
            </h3>
            <p className={`${styles["card-text-1"]}`}>
              Lorem ipsum dolor sit amet consectetur. Lorem et donec leo lectus
              vel ullamcorper facilisis. Dictum eros enim enim luctus sit semper
              euismod.Lorem ipsum dolor sit amet consectetur. Lorem et donec leo
              lectus vel ullamcorper facilisis. Dictum eros enim enim luctus sit
              semper euismod.Lorem ipsum dolor sit amet consectetur. Lorem et
              donec leo lectus vel ullamcorper facilisis. Dictum eros enim enim
              luctus sit semper euismod.Lorem ipsum dolor sit amet consectetur.
              Lorem et donec leo lectus vel ullamcorper facilisis. Dictum eros
              enim enim luctus sit semper euismod.Lorem ipsum dolor sit amet
              consectetur. Lorem et donec leo lectus vel ullamcorper facilisis.
              Dictum eros enim enim luctus sit semper euismod.Lorem ipsum dolor
              sit amet consectetur. Lorem et donec leo lectus vel ullamcorper
              facilisis. Dictum eros enim enim luctus sit semper euismod.Lorem
              ipsum dolor sit amet consectetur. Lorem et donec leo lectus vel
              ullamcorper facilisis. Dictum eros enim enim luctus sit semper
              euismod.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles["tech-box"]} container`}>
        <div className={`${styles["container2"]} `}>
          {/* {showHide && thread.map((item, index) => {
            return (
              <div
                className={`${styles["thread"]} d-flex flex-column text-center position-static`} style={{height: '40rem'}}
                key={index}
              >
                <div className={`${styles[item.class]}`}></div>
                <div className={`${styles["foun-img-div"]} z-3`}>
                  <img
                    src={item.img}
                    alt="img"
                    id={`${styles["thread-img"]}`}
                  />
                </div>
              </div>
            );
          })} */}
          {!showHide &&
            thread.map((item, index) => {
              return (
                <div
                  ref={digitalRef}
                  className={`${styles["thread"]} d-flex  flex-column  text-center position-static`}
                  style={{ height: "40rem" }}
                  key={index}
                >
                  <div
                    className={` ${digitalInView ? styles[item.class] : ""}`}
                  ></div>
                  <div className={`${styles["foun-img-div"]} z-3`}>
                    <img
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
