import React, { useRef } from "react";
import Lottie from "lottie-react";

import styles from "./Contactus.module.scss";
import background from "../../../../../public/images/homebackanimation.json";
import { useInView, motion } from "framer-motion";

const ContactusBtnSec = () => {
  const paraLeftRef = useRef(null);
  const paraLeftInView = useInView(paraLeftRef, { once: true });
  const paraRightRef = useRef(null);
  const paraRightInView = useInView(paraRightRef, { once: true });

  const paraLeftVariant = {
    offscreen: {
      opacity: 0,
      x: -200,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        // type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };

  const paraRightVariant = {
    offscreen: {
      opacity: 0,
      x: 200,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        // type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };

  return (
    <div className={`${styles["main"]}`}>
      <Lottie animationData={background} className={`${styles["lottie"]}`} />

      <div className="container">
        <div className={`${styles["text-main-5"]} row gx-5`}>
          <motion.div
            className={`${styles["text-5"]} col-md-6`}
            variants={paraLeftInView ? "" : paraLeftVariant}
            initial="offscreen"
            whileInView="onscreen"
            ref={paraLeftRef}
          >
            Ready To grow with a digital marketing agency you can trust ? Get
            your proposal now !
          </motion.div>

          <motion.div
            className={`${styles["p-5"]} col-md-6`}
            variants={paraRightInView ? "" : paraRightVariant}
            initial="offscreen"
            whileInView="onscreen"
            ref={paraRightRef}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
              tempus sed tempus. Et pharetra gravida sed sit gravida. Id at
              morbi dignissim mauris. Vulputate{" "}
            </p>

            <button type="button" className={`${styles["button-5"]}`}>
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactusBtnSec;
