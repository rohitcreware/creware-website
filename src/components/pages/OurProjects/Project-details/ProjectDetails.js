import React from "react";
import Image from "next/image";

import ClientSection from "./ClientSection";
import styles from "./ProjectDetails.module.scss";
import ProjectOverview from "./ProjectOverview";
import OurExecution from "./OurExecution";
import ProjectDescription from "./ProjectDescription";

const ProjectDetails = () => {
  return (
    <div className={styles["main"]}>
      <div className="container">
        <ClientSection />
        <ProjectOverview />
      </div>
      <OurExecution />
      <div className={`${styles["multiple_landing"]} col-12`}>
        <Image
          src="/images/project-details/albany_multiple_landing.png"
          alt=""
          className="img-fluid"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="container">
        <ProjectDescription />
      </div>
    </div>
  );
};

export default ProjectDetails;
