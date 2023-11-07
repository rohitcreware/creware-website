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
} from "../../Svgs/OurClientAnimationSvgs";
import styles from "./OurClientAnime.module.scss";

const OurClientSecondScreen = ({
  setSecondScreeAppearFirstTime,
  setSecondScreeAppearsForTheSecondTime,
  secondScreeAppearFirstTime,
}) => {
  useEffect(() => {
    if (secondScreeAppearFirstTime) {
      setSecondScreeAppearsForTheSecondTime(true);
    }
    setSecondScreeAppearFirstTime(true);
  }, [secondScreeAppearFirstTime]);

  return (
    <>
      <div className={`${styles["isleworth"]} col-4 col-md-2`}>
        <Isleworth />
      </div>
      <div className={`${styles["brightListed"]} col-4 col-md-2`}>
        <BrightListed />
      </div>
      <div className={`${styles["oceania"]} col-4 col-md-2`}>
        <Oceania />
      </div>
      <div className={`${styles["skilled"]} col-4 col-md-2`}>
        <Skilled />
      </div>
      <div className={`${styles["missUniverse"]} col-4 col-md-2`}>
        <MissUniverse />
      </div>
      <div className={`${styles["fortress"]} col-4 col-md-2`}>
        <Fortress />
      </div>
      {/* 2nd row */}
      <div className={`${styles["guitar"]} col-4 col-md-2`}>
        <Guitar />
      </div>
      <div className={`${styles["furlong"]} col-4 col-md-2`}>
        <Furlong />
      </div>
      <div className={`${styles["homeLoans"]} col-4 col-md-2`}>
        <HomeLoans />{" "}
      </div>
      <div className={`${styles["curaStream"]} col-4 col-md-3`}>
        <CuraStream />
      </div>
      <div className={`${styles["fundraiser"]} col-4 col-md-3`}>
        <Fundraiser />
      </div>
      {/* third row */}
      <div className={`${styles["flourish"]} col-4 col-md-2`}>
        <Flourish />
      </div>
      <div className={`${styles["nnnex"]} col-4 col-md-2`}>
        <Nnnex />
      </div>
      <div className={`${styles["albany"]} col-4 col-md-3`}>
        <Albany />
      </div>
      <div className={`${styles["result"]} col-4 col-md-2`}>
        <Result />
      </div>
      <div className={`${styles["sport"]} col-4 col-md-3`}>
        <Sport />
      </div>
      {/* fourthRow */}
      <div className={`${styles["mass"]} col-4 col-md-2`}>
        <Mass />
      </div>
      <div className={`${styles["sphere"]} col-4 col-md-2`}>
        <Sphere />
      </div>
      <div className={`${styles["skilled"]} col-4 col-md-2`}>
        <Skilled />
      </div>
      <div className={`${styles["delhiSchool"]} col-4 col-md-2`}>
        <DelhiSchool />
      </div>
    </>
  );
};

export default OurClientSecondScreen;
