import React from "react";
import styles from "./Card.module.scss";
import { RightInvite } from "@/components/Svgs/uiuxDesign";

const Card = () => {
  return (
    <div className={styles["main"]}>
      <div>
        <RightInvite />
      </div>
      <p>
        With Lorem ipsum dolor sit amet “Consectetur. Lorem et donec leo lectus
        vel ullamcorper facilisis. Dictum eros enim enim luctus sit semper
        euismod.Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
        consectetur.
      </p>
      <h4>President, Consulting Services</h4>
      <h6>President Inc</h6>
    </div>
  );
};

export default Card;
