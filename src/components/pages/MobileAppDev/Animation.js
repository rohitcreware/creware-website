import React from "react";
import styles from "./Animation.module.scss";
import gif from "../../../../public/images/mobileapp/mobile-app-backnew.gif";
import Image from "next/image";
const Animation = () => {
  return (
    <div>
      <div className="container" >
        <div className={`${styles["main-row"]} row`}>
          <div className="col-xl-8">
            <Image
              height={0}
              width={0}
              sizes="100vw"
              src={gif}
              className={`${styles["image"]}`}
              alt="Levels"
            />
          </div>
          <div className={`${styles["card-main"]} col-xl-4`}>
            <div>
              <p className={`${styles["card-p"]}`}>
                We use Agile methodology and split development work in 2 weeks
                sprints.
              </p>
              <ul className={`${styles["card-p"]}`}>
                <li>Regular stand - up meetings via video calls.</li>
                <li>Weekly status reports.</li>
                <li>Resource - effective & time - sensitive process.</li>
              </ul>
              <p className={`${styles["card-p"]}`}>
                Online store development from the scratch takes from 1 month *
              </p>
              <p className={`${styles["card-p"]}`}>
                *Depends on non standard features quantity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
