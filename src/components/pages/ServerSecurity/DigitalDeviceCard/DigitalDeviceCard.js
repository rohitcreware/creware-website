import React from "react";

import styles from "./DigitalDeviceCard.module.scss";
import { Digital } from "@/components/Svgs/serverSecurity";
import { digitalCardData } from "../../../../../Json/ServerSecurity";

const DigitalDeviceCard = () => {
  return (
    <>
      {digitalCardData.map((item, index) => (
        <div className={`${styles["single_card"]} row`} key={index}>
          <div className={`${styles["head"]} col-2`}>
            <Digital />
          </div>
          <div className="col-10">
            <h6>{item.title}</h6>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DigitalDeviceCard;
