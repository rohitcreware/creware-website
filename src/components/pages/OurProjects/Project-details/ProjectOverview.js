"use client";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import styles from "./ProjectOverview.module.scss";
import ProjectGoalsCard from "./ProjectGoalsCard";
import HtmlLogo from "../../../../../public/images/project-details/html5_logo.svg";
import CssLogo from "../../../../../public/images/project-details/css_logo.svg";
import ReactLogo from "../../../../../public/images/project-details/react_logo.svg";
import MongoLogo from "../../../../../public/images/project-details/mongo_logo.svg";
import ApacheLogo from "../../../../../public/images/project-details/apache_logo.svg";
import WordpressLogo from "../../../../../public/images/project-details/wordpress_logo.svg";
import NodeLogo from "../../../../../public/images/project-details/node_logo.svg";
import FigmaLogo from "../../../../../public/images/project-details/figma_logo.svg";
import GoogleAnalyticsLogo from "../../../../../public/images/project-details/analytics_logo.svg";
import MysqlLogo from "../../../../../public/images/project-details/mysql_logo.svg";
import JiraLogo from "../../../../../public/images/project-details/jira_logo.svg";

const ProjectOverview = () => {

  const [tabScreen, setTabScreen] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const screenWidth = window.screen.width;
      screenWidth <= 1199 ? setTabScreen(false) : setTabScreen(true);
    }
  }, []);

  return (
    <div className={`${styles["main"]} row`}>
      <div className={`${styles["left"]} col-12 col-lg-7`}>
        <h1>
          Project <span>Overview</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lorem et donec leo lectus vel
          ullamcorper facilisis. Dictum eros enim enim luctus sit semper
          euismod. Adipiscing amet cursus feugiat sagittis placerat
          nisi.euismod. Adipiscing amet cursus feugiat sagittis placerat nisi.
        </p>

        <div className={styles["left_bottom"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 26 40"
            fill="none"
            style={{ marginRight: "12px" }}
          >
            <path
              d="M7.55121 0.932617L0.258789 8.08003L11.7183 20.7255L0.258789 33.9207L7.55121 39.9685L25.7822 20.7255L7.55121 0.932617Z"
              fill="#ffffff"
            />
          </svg>
          Launch website
        </div>
      </div>
      <div className={`${styles["right"]} col-12 col-lg-4`}>
        <div className={styles["box"]}>
          <h2>Services provided</h2>
          <div className={styles["border"]}></div>
          <ul>
            <li>Design</li>
            <li>Developement</li>
            <li>Testing</li>
            <li>Maintanance</li>
          </ul>
        </div>
      </div>

      <div className={`${styles["bottom"]} row gx-2 gx-sm-3`}>
        <div className={`${styles["left"]} col-6`}>
          <Image
            src="/images/project-details/project_phone.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className={`${styles["right"]} col-6`}>
          <Image
            src="/images/project-details/project_tab.png"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>

      {/* project goals */}
      <div
        className={`${styles["left"]} ${styles["proejct_challenges"]} col-12 col-lg-9`}
      >
        <h1>
          Project <span>Goals</span>
        </h1>
        <p className={styles["project_goals_p"]}>
          Lorem ipsum dolor sit amet consectetur. Lorem et donec leo lectus vel
          ullamcorper facilisis. Dictum eros enim enim luctus sit semper
          euismod. Adipiscing amet cursus feugiat sagittis placerat
          nisi.euismod. Adipiscing amet cursus feugiat sagittis placerat nisi.
        </p>
      </div>

      <div className={`${styles["goals_card"]} row`}>
        <ProjectGoalsCard shouldDisplayBullet />
        <ProjectGoalsCard shouldDisplayBullet={tabScreen} />
        <ProjectGoalsCard shouldDisplayBullet />
        <ProjectGoalsCard />
      </div>

      {/*project challenges */}
      <div
        className={`${styles["left"]} ${styles["proejct_challenges"]} col-12`}
      >
        <h1>
          Project <span>Challenges</span>
        </h1>

        <div className={`${styles["goals_card"]} row`}>
          <ProjectGoalsCard shouldDisplayBullet />
          <ProjectGoalsCard shouldDisplayBullet={tabScreen} />
          <ProjectGoalsCard shouldDisplayBullet />
          <ProjectGoalsCard />
        </div>
      </div>

      {/* Technologies we used */}

      <div
        className={`${styles["left"]} ${styles["proejct_challenges"]}  ${styles["technologies"]}  row `}
      >
        <h1>
          Technologies <span>We Used</span>
        </h1>

        <div className="col-6 col-sm-2 d-flex align-items-sm-end mt-3">
          <HtmlLogo />
        </div>
        <div className="col-6 col-sm-3 d-flex align-items-sm-end mt-3 justify-content-center">
          <CssLogo />
        </div>
        <div className="col-6 col-sm-2 d-flex align-items-sm-end mt-3">
          <ReactLogo />
        </div>
        <div className="col-6 col-sm-3 d-flex align-items-sm-end mt-3">
          <MongoLogo />
        </div>
        <div className="col-6 col-sm-2 d-flex align-items-sm-end mt-3 mt-sm-3">
          <ApacheLogo />
        </div>
        <div className="col-6 col-sm-3 d-flex align-items-sm-end mt-3">
          <WordpressLogo />
        </div>
        <div className="col-6 col-sm-2 d-flex align-items-sm-end mt-5">
          <NodeLogo />
        </div>
        <div className="col-6 col-sm-2 d-flex align-items-center justify-content-sm-center" style={{marginTop:"36px"}}
>
          <FigmaLogo />
        </div>
        <div className="col-6 col-sm-2 d-flex align-items-sm-end mt-sm-5 ">
          <GoogleAnalyticsLogo />
        </div>
        <div
          className="col-6 col-sm-3 d-flex  justify-content-sm-center align-items-sm-end
"
style={{marginBottom:"12px"}}
        >
          <MysqlLogo />
        </div>
        <div className="col-6 col-sm-2 d-flex align-items-sm-end mt-3">
          <JiraLogo />
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
