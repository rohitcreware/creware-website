import React from "react";
import styles from "./ProjectGoalsCard.module.scss";

const ProjectGoalsCard = ({ shouldDisplayBullet }) => {

  return (
    <div className={`${styles["main"]} col-12 col-md-6 col-xl-3`}>
      <p>
        Launch websiteLorem ipsum dolor sit amet consectetur. Lorem et donec leo
        lectus vel ullamcorper facilisis
      </p>
     <div className={shouldDisplayBullet ? styles["bullets"] : styles["transparent_bullets"]}>.</div>
    </div>
  );
};

export default ProjectGoalsCard;
