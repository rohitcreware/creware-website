"use client";

import React, { useEffect, useState } from "react";
import {
  Crai,
  Doramae,
  EyeFace,
  FourBlocks,
  Hess,
  Hfk,
  Hundo,
  Innosol,
  Ion,
  JamPlay,
  Lime,
  Niit,
  Optra,
  TeamGiest,
  TheYognis,
  Town,
  Uproar,
  Voluntulo,
} from "../../Svgs/OurClientAnimationSvgs";
import { motion } from "framer-motion";
import OurClientSecondScreen from "./OurClientSecondScreen";
import styles from "./OurClientAnime.module.scss";

const firstScreenVariantsA = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: { duration: 2, delay: 3.5 },
  },

  exit: {
    opacity: 0,
  },
};
const firstScreenVariantsB = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: { duration: 2 },
  },

  exit: {
    opacity: 1,
  },
};

const secondScreenVariantA = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 2 },
  },
  exit: {
    opacity: 1,
  },
};
const secondScreenVariantB = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: { duration: 2 },
  },

  exit: {
    opacity: 0,
  },
};

const secondScreenVariantC = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 2 },
  },
  exit: {
    opacity: 1,
  },
};
const secondScreenVariantD = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 2 },
  },

  exit: {
    opacity: 0,
  },
};

const OurClientAnime = ({ noMargin, setOurClientSecondScreen }) => {
  const [secondScreen, setSecondScreen] = useState(false);
  const [secondScreeAppearFirstTime, setSecondScreeAppearFirstTime] =
    useState(false);
  const [
    secondScreeAppearsForTheSecondTime,
    setSecondScreeAppearsForTheSecondTime,
  ] = useState(false);
  const [firstScreenVariants, setFirstScreenVariants] =
    useState(firstScreenVariantsA);
  const [
    secondScreenVariantsForFirstTime,
    setSecondScreenVariantsForTheFirstTime,
  ] = useState(secondScreenVariantA);

  const [
    secondScreenVariantsForSecondTime,
    setSecondScreenVariantsForTheSecondTime,
  ] = useState(secondScreenVariantC);

  let intervalId;

  useEffect(() => {
    if (secondScreeAppearFirstTime) {
      setFirstScreenVariants(firstScreenVariantsB);
      setSecondScreenVariantsForTheFirstTime(secondScreenVariantB);
    } else {
      setFirstScreenVariants(firstScreenVariantsA);
      setSecondScreenVariantsForTheFirstTime(secondScreenVariantA);
      setSecondScreenVariantsForTheSecondTime(secondScreenVariantD);
    }

    intervalId = setInterval(() => {
      setSecondScreen((prevScreen) => !prevScreen);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [secondScreeAppearFirstTime]);

  useEffect(() => {
    if (setOurClientSecondScreen) {
      setOurClientSecondScreen(secondScreen);
    }
  }, [secondScreen]);

  return (
    <div className={styles["main"]}>
      <div className={!secondScreen && !noMargin && styles["first_section"]}>
        {!secondScreen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={firstScreenVariants}
            className={`row gy-3 gy-lg-4`}
          >
            <div
              className="col-3 col-md-2 d-flex align-items-center"
              style={{ height: "70px" }}
            >
              <Innosol />
            </div>
            <div className="col-3 col-md-2 d-flex align-items-center justify-content-center">
              <Niit />
            </div>
            <div className="col-3 col-md-2 d-flex align-items-center">
              <Hess />
            </div>
            <div className="col-3 col-md-2">
              <Lime />
            </div>
            <div className="col-3 col-md-2 d-flex justify-content-center">
              <Hfk />
            </div>
            <div className="col-3 col-md-2 d-flex">
              <Doramae />
            </div>

            {/* 2nd row */}

            <div className="col-3 col-md-2 d-flex align-items-center">
              <Ion />
            </div>
            <div className="col-3 col-md-2 d-flex justify-content-center align-items-center">
              <Hundo />{" "}
            </div>
            <div className="col-3 col-md-3 d-flex">
              <EyeFace />{" "}
            </div>
            <div className="col-3 col-md-2 d-flex align-items-center">
              <Voluntulo />
            </div>
            <div className="col-3 col-md-2 d-flex justify-content-lg-end  align-items-center">
              <Optra />
            </div>

            {/* third row */}
            <div className="col-3 col-md-2 d-flex justify-content-center align-items-center">
              <Crai />{" "}
            </div>
            <div className="col-3 col-md-2">
              {" "}
              <FourBlocks />
            </div>
            <div className="col-3 col-md-2 d-flex">
              <Uproar />
            </div>
            <div className="col-3 col-md-3 d-flex">
              <TheYognis />{" "}
            </div>
            <div className="col-3 col-md-2 d-flex justify-content-end">
              <JamPlay />
            </div>

            <div className="col-3 col-md-2 d-flex justify-content-start justify-content-sm-center justify-content-lg-start">
              <Town />
            </div>
            <div className="col-3 col-md-2 d-flex">
              <TeamGiest />
            </div>
          </motion.div>
        )}
      </div>

      {secondScreen && !secondScreeAppearsForTheSecondTime && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={secondScreenVariantsForFirstTime}
          className="row"
        >
          <OurClientSecondScreen
            setSecondScreeAppearFirstTime={setSecondScreeAppearFirstTime}
            secondScreeAppearFirstTime={secondScreeAppearFirstTime}
            setSecondScreeAppearsForTheSecondTime={
              setSecondScreeAppearsForTheSecondTime
            }
          />
        </motion.div>
      )}
      {secondScreen && secondScreeAppearsForTheSecondTime && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={secondScreenVariantsForSecondTime}
          className="row"
        >
          <OurClientSecondScreen
            setSecondScreeAppearFirstTime={setSecondScreeAppearFirstTime}
            setSecondScreeAppearsForTheSecondTime={
              setSecondScreeAppearsForTheSecondTime
            }
          />
        </motion.div>
      )}
    </div>
  );
};

export default OurClientAnime;
