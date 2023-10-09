import React from "react";
import Link from "next/link";

import styles from "../../pages/OurProjects/Cards.module.scss";

const ServiceCards = ({portfolioList}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {portfolioList.map((card, index) => (
            <div
              className={`${styles["project-card"]} col-6 col-sm-6 col-md-6 col-lg-4`}
              key={index}
            >
              <Link href={"./project-details"}>
                <div
                  className={`${styles["card-1"]} card`}
                >
                  <div className={`${styles["card-img-overlay"]} overflow-hidden`}>
                    <img
                      className={`${styles["card-img-top"]} `}
                      src={card.img}
                      alt={card.alt}
                    />
                    <div
                      className={`${styles["overlay"]} ${styles["blue"]}`}
                    ></div>
                    <div className={`${styles["overlay"]} ${styles["red"]} ps-2 pt-2`}>
                      <h6 className={`${styles["animated-h6"]} text-start`}>Company</h6>
                      <p className={`${styles["animated-desc"]} text-start`}>
                        Our work Description......
                      </p>
                      <div className={`${styles["animated-p-div"]} mt-0 position-absolute mb-2 bottom-0`}>
                        <p className={`${styles["animated-p"]} m-0 text-start`}>Web design</p>
                        <p className={`${styles["animated-p"]} m-0 text-start`}>Figma</p>
                        <p className={`${styles["animated-p"]} m-0 text-start`}>Backend etc</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* <div className="row"> // commented for now
          <p className={`${styles["view-p"]}`}> &gt; View more</p>
        </div> */}
      </div>
    </>
  );
};

export default ServiceCards;
