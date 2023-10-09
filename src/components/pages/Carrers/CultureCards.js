import React from "react";
import styles from "./CultureCards.module.scss";

const CultureCards = () => {
  return (
    <section className={`${styles["cards"]} col-12 col-lg-4`}>
      <div className={styles["cards_title"]}>Lorem ipsum sit dolar amet</div>
      <div className={styles["cards_details"]}>
        Lorem ipsum dolor sit amet consectetur. Lorem et donec leo lectus vel
        ullamcorper facilisis. Lorem ipsum dolor sit amet consectetur. Lorem et
        donec leo lectus vel ullamcorper facilisis. donec leo lectus vel
        ullamcorper facilisis.{" "}
      </div>
    </section>
  );
};

export default CultureCards;
