import Link from "next/link";
import React from "react";

import { portfolio } from "../../../../Json/ProjectCard";
import styles from "./Cards.module.scss";

const OurProjectsCards = () => {

  return (
    <>
      <div className="container">
        <div className={`${styles["main-row"]} row`}>
          {portfolio.map((card, index) => (
            <div
              className={`${styles["project-card"]} col-12 col-md-6 col-lg-4`}
              key={index}
            >
              <Link href={"./project-details"}>
                <div
                  className={`${styles["card-1"]} card`}
                >
                  <div className={`${styles["card-img-overlay"]}`}>
                    <img
                      className={`${styles["card-img-top"]} `}
                      src={card.img}
                      alt={card.alt}
                    />
                    
                    <div className={`${styles["overlay"]} ${styles["red"]}`}>
                      <h6 className={`${styles["animated-h6"]}`}>Company</h6>
                      <p className={`${styles["animated-desc"]}`}>
                        Our work Description......
                      </p>
                      <div className={`${styles["animated-p-div"]}`}>
                        <p className={`${styles["animated-p"]}`}>Web design</p>
                        <p className={`${styles["animated-p"]}`}>Figma</p>
                        <p className={`${styles["animated-p"]}`}>Backend etc</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          <p className={`${styles["view-p"]} col-12 col-lg-4`}> &gt; View more</p>
          <p className="col-12 col-lg-4"></p>
          <p className="col-12 col-lg-4"></p>
        </div>
      </div>
    </>
  );
};

export default OurProjectsCards;
