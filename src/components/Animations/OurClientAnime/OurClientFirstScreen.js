"use client";

import React, { useEffect, useState } from "react";
import {
  Albany,
  BrightListed,
  CuraStream,
  DelhiSchool,
  Flourish,
  Fortress,
  Fundraiser,
  Furlong,
  Guitar,
  HomeLoans,
  Isleworth,
  Mass,
  MissUniverse,
  Nnnex,
  Oceania,
  Result,
  Skilled,
  Sphere,
  Sport,
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
  const [secondScreen, setSecondScreen] = useState(true);
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
      <div>
        {!secondScreen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={firstScreenVariants}
            className={`${styles["first_screen_row"]} row`}
            // style={{ marginTop: "0.5rem" }}
          >
            <div className={`${styles["innosol"]} col-4 col-md-2  `}>
              <Innosol />
            </div>

            <div className={`${styles["Niit"]} col-4 col-md-2   `}>
              <Niit />
            </div>
            <div className={`${styles["hess"]} col-4 col-md-2  `}>
              <Hess />
            </div>
            <div className={`${styles["lime"]} col-4 col-md-3`}>
              <Lime />
            </div>
            <div className={`${styles["hfk"]} col-4 col-md-1  `}>
              <Hfk />
            </div>
            <div className={`${styles["doramae"]} col-4 col-md-2`}>
              <Doramae />
            </div>

            {/* 2nd row */}

            <div className={`${styles["ion"]} col-4 col-md-2`}>
              <Ion />
            </div>
            <div className={`${styles["hundo"]} col-4 col-md-2`}>
              <Hundo />
            </div>
            <div className={`${styles["eyeface"]} col-4 col-md-3`}>
              <EyeFace />
            </div>
            <div className={`${styles["voluntulo"]} col-4 col-md-3`}>
              <Voluntulo />
            </div>
            <div className={`${styles["optra"]} col-4 col-md-2 pe-4`}>
              <Optra />
            </div>

            {/* third row */}
            <div className={`${styles["crai"]} col-4 col-md-2`}>
              <Crai />
            </div>
            <div className={`${styles["fourBlocks"]} col-4 col-md-1`}>
              <FourBlocks />
            </div>
            <div className={`${styles["uproar"]} col-4 col-md-2`}>
              <Uproar />
            </div>
            <div className={`${styles["theYognis"]} col-4 col-md-4`}>
              <TheYognis />
            </div>
            <div className={`${styles["jamPlay"]} col-4 col-md-3`}>
              <JamPlay />
            </div>

            <div className={`${styles["town"]} col-4 col-md-3`}>
              <Town />
            </div>
            <div className={`${styles["teamGiest"]} col-4 col-md-3`}>
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
          className={`${styles["second_screen_row"]} row`}
          // style={{ marginTop: "1.5rem" }}
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
          className={`${styles["second_screen_row"]} row`}
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
