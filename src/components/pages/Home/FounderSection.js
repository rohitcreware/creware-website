import React from "react";
import styles from "./Founder.module.scss";

const FounderSection = () => {
  return (
    <>
      <div className={`${styles["main"]} container-fluid`}>
        <div className="row">
          {/* left */}
          <div className="col-12 col-lg-4">
            <img
              src="https://i.postimg.cc/1X8cs35N/Mask-group.png"
              alt="img"
              id="foun-img"
              className={`${styles["founder-img"]} img-fluid`}
            />
          </div>

          {/* right */}
          <div className={`${styles["details"]} col-12 col-lg-8 `}>
            <div className="row">
              <div className="col-12 col-lg-4">
                {" "}
                <h2 className={styles["foun-sec-title"]}>Meet The Founder</h2>
              </div>
              <div
                className={`${styles["founder-details-section"]} col-12 col-lg-8 `}
              >
                <div className={`${styles["red-dot-div"]} gx-5`}>
                  {" "}
                  <div className={`${styles["red-dot"]}`}></div>
                  <div className={`${styles["red-dot"]}`}></div>
                  <div className={`${styles["red-dot"]}`}></div>
                </div>
                <p className={`${styles["founder-details-first-p"]}`}>
                  Lorem ipsum
                </p>
                <p className={`${styles["founder-details-second-p"]}`}>
                  Lorem ipsum dolor sit amet consectetur. Sed egestas augue
                  bibendum faucibus pellentesque cursus malesuada. Volutpat enim
                  eu sodales lacus in quis massa nunc. Sed nibh ornare a metus
                  molestie ultricies ornare dictum ac.
                  <br /> massa nunc. Sed nibh ornare a metus molestie ultricies
                  ornare dictum ac.
                </p>
                <img
                  className={`${styles["foun-logo-link"]} d-block`}
                  src="https://i.postimg.cc/3JrdYnCT/typcn-social-linkedin.png"
                  alt=""
                />
                <img
                  className={`${styles["foun-logo"]}`}
                  src="https://i.postimg.cc/90Cm3JP4/Group-427319938.png"
                  alt=""
                />
                <img
                  className={`${styles["foun-logo"]}`}
                  src="https://i.postimg.cc/90Cm3JP4/Group-427319938.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderSection;
