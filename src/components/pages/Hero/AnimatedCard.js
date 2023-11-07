import React from "react";
import styles from "./AnimatedCard.module.scss";
const AnimatedCard = () => {
  return (
    <>
      <div className={`${styles["container5"]} container`}>
        <div className={`${styles["row5"]} row`}>
          <div className="col-12 col-md-4 col-lg-4 mb-3">
            <div className={`${styles["card5"]}`}>
              <div className={`${styles["number5-1"]}`}>1</div>
              <div className={`${styles["text5-1"]}`}>
                <div >
                  <img src="/images/Home/redcircle.gif" loop />
                  Design
                </div>
              </div>
              <div className={`${styles["desc5-parent"]}`}>
                <div className={`${styles["desc5"]}`}>
                  User Experience Design
                </div>
                <div className={`${styles["desc5"]}`}>
                  User Interface Design
                </div>
                <div className={`${styles["desc5"]}`}>UX Consulation</div>
                <div className={`${styles["desc5"]}`}>Software Design</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 mb-3">
            <div className={`${styles["card5"]}`}>
              <div className={`${styles["number5-2"]}`}>2</div>
              <div className={`${styles["text5-2"]}`}>
                <div>
                  <img
                    className={`${styles["tech-img"]}`}
                    src="/images/Home/bluecircle.gif"
                  />
                  Technology
                </div>
              </div>
              <div className={`${styles["desc5-parent"]}`}>
                <div className={`${styles["desc5"]}`}>
                  User Experience Design
                </div>
                <div className={`${styles["desc5"]}`}>
                  User Interface Design
                </div>
                <div className={`${styles["desc5"]}`}>UX Consulation</div>
                <div className={`${styles["desc5"]}`}>Software Design</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 mb-3">
            <div className={`${styles["card5"]}`}>
              <div className={`${styles["number5-3"]}`}>3</div>
              <div className={`${styles["text5-3"]}`}>
                <div>
                  <img src="/images/Home/purplecircle.gif" />
                  Business
                </div>
              </div>
              <div className={`${styles["desc5-parent"]}`}>
                <div className={`${styles["desc5"]}`}>
                  User Experience Design
                </div>
                <div className={`${styles["desc5"]}`}>
                  User Interface Design
                </div>
                <div className={`${styles["desc5"]}`}>UX Consulation</div>
                <div className={`${styles["desc5"]}`}>Software Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedCard;
