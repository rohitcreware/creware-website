import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProjectDescription.module.scss";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ProjectDescription = () => {
  return (
    <div className={styles["main"]}>
      <Image
        src="/images/project-details/left_quote_invite.png"
        alt=""
        className={`${styles["left_quote"]}`}
        width={90}
        height={35}
      />

      <p className={styles["project_goals_p"]}>
        Lorem ipsum dolor sit amet consectetur. Lorem et donec leo lectus vel
        ullamcorper facilisis. Dictum eros enim enim luctus sit semper euismod.
        Adipiscing amet cursus feugiat sagittis placerat nisi.euismod.
        Adipiscing amet cursus feugiat sagittis placerat nisi.
      </p>

      <div
        className={`${styles["invited_bottom"]} d-flex justify-content-between`}
      >
        <div className={styles["left"]}>
          <h1>Rick Astley</h1>
          <h2>Business Development Director</h2>
        </div>

        <Image
          src="/images/project-details/right_quote_invite.png"
          alt=""
          width={90}
          height={35}
        />
      </div>

      <div className={`${styles["tab_section"]} row gx-5`}>
        <div className="col-12 col-lg-6 col-xl-7 ">
          <Image
            src="/images/project-details/laptop.png"
            alt=""
            className="img-fluid"
            width={0}
            height={0}
            sizes="100vh"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={`${styles["right"]} col-12 col-lg-6 col-xl-5`}>
          <p>
            Albany is a luxurious 600-acre oceanfront resort community on New
            Providence island in The Bahamas offering various amenities and
            experiences for families, businesspeople and couples.
          </p>

          <div className={`${styles["button"]}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 26 40"
              fill="none"
              style={{ paddingRight: "10px" }}
            >
              <path
                d="M7.55121 0.932617L0.258789 8.08003L11.7183 20.7255L0.258789 33.9207L7.55121 39.9685L25.7822 20.7255L7.55121 0.932617Z"
                fill="#ffffff"
              />
            </svg>
            Let's tell your story
          </div>
        </div>
      </div>

      {/* buttons */}

      <div className={`${styles["bottom_btns"]} row`}>
        <div className={`${styles["left"]} col-6`}>
          <div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 32 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ paddingRight: "10px" }}
            >
              <path
                id="Vector 106"
                d="M22.1617 0.87793L30.5195 9.11803L17.3858 23.6967L30.5195 38.9091L22.1617 45.8815L1.26719 23.6967L22.1617 0.87793Z"
                fill="#fff"
                stroke="#fff"
                strokeWidth="0.75006"
              />
            </svg>
            Previous Project
          </div>
        </div>
        <div className={`${styles["right"]} col-6 text-end`}>
          <div>
            Next Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 26 40"
              fill="none"
              style={{ paddingLeft: "10px" }}
            >
              <path
                d="M7.55121 0.932617L0.258789 8.08003L11.7183 20.7255L0.258789 33.9207L7.55121 39.9685L25.7822 20.7255L7.55121 0.932617Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
