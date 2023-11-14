"use client";
import React from "react";
import styles from "./Footer.module.scss";
import { Logo } from "../Svgs/serverSecurity";
import Image from "next/image";
import Link from "next/link";
import animation from "../../../Json/Animation/FooterAnimation3.json";
import { Email, Fb, Ig, Linkedin, Twitter, Whatsapp } from "../Svgs/footer";
import Lottie from "lottie-react";

// src="https://i.postimg.cc/sgmSF4tX/Application-programming-interface-amico-1.png"
const Footer = () => {
  return (
    <div>
      <>
        <footer className={`${styles["footer"]}  text-lg-start  text-muted`}>
          <section
            className="container justify-content-center justify-content-lg-between p-4"
            id="footer-upper-sec"
          >
            <div className="row">
              <div className="col-6" id={styles["footer-content"]}>
                <a className={styles["logo"]} href="/">
                  <Logo />
                </a>
                <p className={styles["footer-sub"]}>
                  A Warehouse of Creativity
                </p>
                <span className={`${styles["footer-spam"]} d-none d-sm-inline`}>
                  Lorem ipsum dolor sit amet consectetur. Lorem et donec leo
                  lectus vel ullamcorper facilisis. Lorem ipsum dolor sit amet
                  consectetur. Lorem et donec leo lectus vel ullamcorper
                  facilisis. donec leo lectus vel ullamcorper facilisis.{" "}
                </span>
              </div>

              <div className={`${styles["footer-img-div"]} col-6`}>
                <div className={`${styles["animation"]}`}>
                  <Lottie animationData={animation} />
                </div>
              </div>

              <div
                className={`${styles["footer-spam"]} ${styles["footer-spam-res"]} d-inline d-sm-none`}
              >
                Lorem ipsum dolor sit amet consectetur. Lorem et donec leo
                lectus vel ullamcorper facilisis. Lorem ipsum dolor sit amet
                consectetur. Lorem et donec leo lectus vel ullamcorper
                facilisis. donec leo lectus vel ullamcorper facilisis.{" "}
              </div>

              {/* Grid column 1 */}
              <div className={`${styles["border_line"]} col-12`} />

              <div className="col-6  col-md-3 mb-sm-4">
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
              <div className="col-6 col-md-3 mb-sm-4">
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

              <div className="col-6 col-md-3 mb-sm-4">
                <div className="row">
                  <div className={`${styles["parent_anchor"]} col-lg-6`}>
                    <p className={styles["anchor"]}>
                      <Link href="/services" className={styles["text-reset"]}>
                        Services
                      </Link>
                    </p>
                    <p className={styles["anchor"]}>
                      <Link
                        href="/our-projects"
                        className={styles["text-reset"]}
                      >
                        Our Projects
                      </Link>
                    </p>
                    <p className={styles["anchor"]}>
                      <Link href="/hire-team" className={styles["text-reset"]}>
                        Hire Team
                      </Link>
                    </p>
                    <p className={styles["anchor"]}>
                      <Link href="/partners" className={styles["text-reset"]}>
                        Partners
                      </Link>
                    </p>
                  </div>
                  <div className={`${styles["footer_nav"]} col-lg-6`}>
                    <p className={styles["anchor"]}>
                      <Link href="/careers" className={styles["text-reset"]}>
                        Careers
                      </Link>
                    </p>
                    <p className={styles["anchor"]}>
                      <Link href="/blog" className={styles["text-reset"]}>
                        Blogs
                      </Link>
                    </p>
                    <p className={styles["anchor"]}>
                      <Link href="/about-us" className={styles["text-reset"]}>
                        About Us
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid column 4 */}
              <div className={`${styles["social-icon"]} col-6 col-md-3`}>
                <div className={styles["top"]}>
                  <h6 className={styles["footer-contact-us"]}>Contact Us</h6>
                  <a href="mailto:info@creware.asia?subject=Subject&body=Body%20goes%20here">
                    <p>info@creware.asia</p>
                  </a>
                </div>
                <div
                  className={`${styles["social-media-p"]} ${styles["social-media-p-1"]}`}
                >
                  <a
                    href="https://m.facebook.com/profile.php/?id=100063909857752"
                    target="blank"
                  >
                    <Fb />
                  </a>
                  <a href="https://twitter.com/CrewareTech" target="blank">
                    <Twitter />
                  </a>

                  <a
                    href="https://www.instagram.com/crewarecoworks/"
                    target="blank"
                  >
                    <Ig />
                  </a>
                  {/* Add more social media icons here */}
                </div>
                <div
                  className={`${styles["social-media-p"]}  ${styles["social-media-p-2"]}`}
                >
                  <a
                    href="https://in.linkedin.com/company/creware-technologies-pvt-ltd"
                    target="blank"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="mailto:info@creware.asia?subject=Subject&body=Body%20goes%20here"
                    target="blank"
                  >
                    {" "}
                    <Email />
                  </a>
                  <a href="https://wa.me/7829413575" target="blank">
                    {" "}
                    <Whatsapp />{" "}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </>
    </div>
  );
};

export default Footer;
