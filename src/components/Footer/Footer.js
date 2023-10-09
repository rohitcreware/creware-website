import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <>
        {/* Footer */}
        <footer
          className={`${styles["footer"]}  text-center text-lg-start  text-muted`}
        >
          {/* Section: Social media */}
          <section
            className="container justify-content-center justify-content-lg-between p-4"
            id="footer-upper-sec"
          >
            <div className="row">
              {/* Left */}
              <div
                className="col-lg-6  d-lg-block"
                id={styles["footer-content"]}
              >
                <a className="me-2" href="/">
                  <img
                    className={styles["footer-logo"]}
                    src="https://i.postimg.cc/PrwqksCy/Creware-Logo-Trans-6.png"
                    alt="MDB Logo"
                    loading="lazy"
                  />
                  {/* <span>Creware</span> */}
                </a>
                <p className={styles["footer-sub"]}>Warehouse of Creativity</p>
                <span className={styles["footer-spam"]}>
                  Lorem ipsum dolor sit amet consectetur. Lorem et donec leo
                  lectus vel ullamcorper facilisis. Lorem ipsum dolor sit amet
                  consectetur. Lorem et donec leo lectus vel ullamcorper
                  facilisis. donec leo lectus vel ullamcorper facilisis.{" "}
                </span>
              </div>

              {/* Right */}
              <div className="col-lg-6 footer-img-div">
                <img
                  className={styles["footer-img"]}
                  src="https://i.postimg.cc/sgmSF4tX/Application-programming-interface-amico-1.png"
                />
              </div>
            </div>
          </section>
          <div className={`${styles["border-div"]} container`}></div>

          <section className="footer-lower-sec">
            <div className="container text-center text-lg-start mt-5">
              <div className="row mt-3">
                {/* Grid column 1 */}
                <div className="col-lg-3 mb-4">
                  <p className={styles["footer-addess"]}>
                    Lewes, US
                    <br />
                    16192,
                    <br />
                    Coastal Highway,
                    <br /> Lewes, DE, USA - 19958
                    <br />
                    +1(302)-231-1293
                  </p>
                </div>
                {/* Grid column 2 */}
                <div className="col-lg-3 mb-4">
                  <p className={styles["footer-addess"]}>
                    Bangalore, IND
                    <br />
                    No. 4, 2nd Floor,
                    <br /> Himagiri Silicon City, Thogur Cross,
                    <br /> Phase 1, Electronic City, Bangalore
                    <br />
                    +91-78294-13575
                  </p>
                </div>
                {/* Grid column 3 */}
                <div className="col-lg-3 mb-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <p>
                        <a href="#!" className={styles["text-reset"]}>
                          Services
                        </a>
                      </p>
                      <p>
                        <a href="#!" className={styles["text-reset"]}>
                          Our Projects
                        </a>
                      </p>
                      <p>
                        <a href="#!" className={styles["text-reset"]}>
                          Hire Team
                        </a>
                      </p>
                      <p>
                        <a href="#!" className={styles["text-reset"]}>
                          Our Partners
                        </a>
                      </p>
                    </div>
                    <div className={`${styles["social-icon"]} col-lg-6`}>
                      <p>
                        <a href="#!" className={styles["text-reset"]}>
                          Careers
                        </a>
                      </p>
                      <p>
                        <a href="#!" className={styles["text-reset"]}>
                          Blogs
                        </a>
                      </p>
                      <p>
                        <a href="#!" className={styles["text-reset"]}>
                          About Us
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Grid column 4 */}
                <div className={`${styles["social-icon"]} col-lg-3`}>
                  <div className={styles["top"]}>
                    <h6 className={styles["footer-contact-us"]}>Contact Us</h6>
                    <p>info@creware.asia</p>
                  </div>
                  <p className="social-media-p">
                    <img
                      className={styles["social-media-img"]}
                      src="https://i.postimg.cc/VsD7cvS9/facebook-logo.png"
                      alt="facebook--v1"
                    />
                    <img
                      className={styles["social-media-img"]}
                      src="https://i.postimg.cc/xTQmjD70/Group.png"
                      alt="facebook--v1"
                    />
                    <img
                      className={styles["social-media-img"]}
                      src="https://i.postimg.cc/d0wNGxLv/Vector-3.png"
                      alt="facebook--v1"
                    />
                    {/* Add more social media icons here */}
                  </p>
                  <p>
                    <img
                      className={styles["social-media-img"]}
                      src="https://i.postimg.cc/jStdJRQj/Vector-4.png"
                      alt="linkedin--v1"
                    />
                    <img
                      className={styles["social-media-img"]}
                      src="https://i.postimg.cc/yNRQ4CtF/mdi-email-outline.png"
                      alt="linkedin--v1"
                    />
                    <img
                      className={styles["social-media-img"]}
                      src="https://i.postimg.cc/x88LQK8W/ic-baseline-whatsapp.png"
                      alt="linkedin--v1"
                    />
                    {/* Add more social media icons here */}
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
        </footer>
        {/* Footer */}
      </>
    </div>
  );
};

export default Footer;
