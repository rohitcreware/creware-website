import React from "react";
import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className="container">
      <div className="">
        <div className={`${styles["main-social"]} col-12 col-md-6`}>
          <img
            src="/images/contact/facebook.png"
            className={`${styles["social-img"]}`}
          />
          <img
            src="/images/contact/instagram.png"
            className={`${styles["social-img"]}`}
          />
          <img
            src="/images/contact/linkedin.png"
            className={`${styles["social-img"]}`}
          />
        </div>
        <div className={`${styles["main-social"]} col-12 col-md-6`}>
          <img
            src="/images/contact/mail.png"
            className={`${styles["social-img"]}`}
          />
          <img
            src="/images/contact/twitter.png"
            className={`${styles["social-img"]}`}
          />
          <img
            src="/images/contact/whatsapp.png"
            className={`${styles["social-img"]}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
