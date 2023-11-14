import React from "react";
import styles from "./Contact.module.scss";
import QueryForm from "../Hero/QueryForm";
import NewLastestInsighr from "./NewLastestInsighr";
import { locationList } from "../../../../Json/Contactus";

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
              {locationList.map((item, index) => {
                return (
                  <div className="col-12 col-md-6 col-lg-6 my-3" key={index}>
                    <h5 className={`${styles["address-h5"]}`}>{item.title}</h5>
                    <div className={`${styles["redline"]}`}></div>
                    <p className={`${styles["address-p"]}`}>
                      {item.address1}
                      <br /> {item.address2}
                      <br /> {item.address3}
                    </p>
                    <p className={`${styles["direction-p"]}`}>
                      <a href={item.link} target="blank">
                        <u>Get Directions</u>
                      </a>
                    </p>
                    <iframe
                      src={item.map}
                      alt="location"
                      className={`${styles["address-img1"]}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <NewLastestInsighr />
      </section>
    </div>
  );
};

export default ContactUs;
