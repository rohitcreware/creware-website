import React from "react";
import styles from "./Contact.module.scss";
import QueryForm from "../Hero/QueryForm";
import LatestInsights from "./LatestInsights";

const ContactUs = () => {
  return (
    <div>
      {/* Query Form */}
      <section className={`${styles["form-back"]}`}>
        <QueryForm />
      </section>

      {/* Address Section */}
      <section>
        <div className={`${styles["container-top"]} container`}>
          <div className={`${styles["main-div"]}`}>
            <div className="row gx-5">
              <div className="col-12 col-md-6 col-lg-6 mt-3">
                <h5 className={`${styles["address-h5"]}`}>Bangalore,IND</h5>
                <div className={`${styles["redline"]}`}></div>
                <p className={`${styles["address-p"]}`}>
                  No. 4, 2nd Floor,<br/> Himagiri Silicon City, Thogur Cross,<br/> Phase
                  1, Electronic City, Bangalore
                </p>
                <p className={`${styles["direction-p"]}`}>
                  <u>Get Directions</u>
                </p>
                <img
                  src="/images/contact/address1.png"
                  alt="image"
                  className={`${styles["address-img1"]}`}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6 mt-3">
                <h5 className={`${styles["address-h5"]}`}>Lewes. US</h5>
                <div className={`${styles["redline"]}`}></div>
                <p className={`${styles["address-p"]}`}>
                  16192,<br/> Coastal Highway,cnfxgndffdfdfbr <br/>Lewes, DE, USA - 19958,dfbfdsbsssfb
                </p>
                <p className={`${styles["direction-p"]}`}>
                  <u>Get Directions</u>
                </p>
                <img
                  src="/images/contact/address2.png"
                  alt="image"
                  className={`${styles["address-img2"]}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section>
        <LatestInsights />
      </section>
    </div>
  );
};

export default ContactUs;
