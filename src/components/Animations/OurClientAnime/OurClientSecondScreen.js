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
      <div className="col-3 col-md-2 d-flex align-items-center">
        <Isleworth />
      </div>
      <div className="col-3 col-md-2  d-flex align-items-center justify-content-center">
        <BrightListed />
      </div>
      <div className="col-3 col-md-2  d-flex align-items-center">
        <Oceania />
      </div>
      <div className="col-3 col-md-2 d-flex justify-content-start">
        <Skilled />
      </div>
      <div className="col-3 col-md-2   d-flex justify-content-center align-items-center">
        <MissUniverse />
      </div>
      <div className="col-3 col-md-2   d-flex">
        <Fortress />
      </div>

      {/* 2nd row */}

      <div className="col-3 col-md-3  d-flex align-items-center">
        <Guitar />
      </div>
      <div className="col-3 col-md-2 d-flex  justify-content-center align-items-center  ms-0 ms-lg-3">
        <Furlong />
      </div>
      <div className="col-3 col-md-2 d-flex align-items-center justify-content-center">
        <HomeLoans />{" "}
      </div>
      <div className="col-3 col-md-2 d-flex align-items-start justify-content-center">
        <CuraStream />
      </div>
      <div className="col-3 col-md-2 d-flex d-lg-block  justify-content-end align-items-center  mt-xl-4">
        <Fundraiser />
      </div>

      {/* third row */}
      <div className="col-3 col-md-2  d-flex align-items-center">
        <Flourish />{" "}
      </div>
      <div className="col-3 col-md-2  d-flex align-items-center">
        {" "}
        <Nnnex />
      </div>
      <div className="col-3 col-md-3  d-flex align-items-center justify-content-center">
        <Albany />
      </div>
      <div className="col-3 col-md-2  d-flex justify-content-center align-items-center">
        <Result />{" "}
      </div>
      <div className="col-3 col-md-3 d-flex justify-content-start">
        <Sport />
      </div>

      {/* fourthRow */}

      <div className="col-3 col-md-2 d-flex align-items-center">
        <Mass />
      </div>
      <div className="col-3 col-md-2 d-flex  align-items-center">
        <Sphere />
      </div>
      <div className="col-3 col-md-2  d-flex align-items-center">
        <Skilled />
      </div>
      <div className="col-3 col-md-2 d-flex">
        <DelhiSchool />
      </div>
    </>
  );
};

export default OurClientSecondScreen;
