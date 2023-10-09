import React from "react";
import PropTypes from "prop-types";
import classes from "./Drawer.module.scss";
import styles from "../Header/Header.module.scss";
import { changeAnchor } from "../Helpers/change-anchor";
import Link from "next/link";

export const Drawer = (props) => {
  const { open, anchor, onClose, pathName } = props;

  const {
    drawer,
    animate,
    hidden,
    overlay,
    overlayOpen,
    overlayHidden,
    header,
    cross_icon,
  } = classes;

  return (
    <>
      <div
        className={`${overlay} ${!open && overlayHidden} ${
          open && overlayOpen
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        tabIndex="-1"
        className={`${drawer} ${open && animate} ${
          !open && hidden
        } ${changeAnchor(anchor, classes)}`}
      >
        <div className={header}>
          <a className="navbar-brand me-2" href="/">
            <img
              src="https://i.postimg.cc/D03wsZpV/Shape-Light-Gray-1.png"
              height={30}
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>

          <div className={cross_icon} onClick={() => onClose()}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Menu">
                <g clipPath="url(#clip0_508_34142)">
                  <path
                    id="Path"
                    d="M9.70312 10.7025L24.8539 25.8532"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    id="Path_2"
                    d="M10 26L25.1507 10.8493"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </g>
                <rect
                  x="0.5"
                  y="0.5"
                  width="35"
                  height="35"
                  rx="17.5"
                  stroke="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0_508_34142">
                  <rect width="36" height="36" rx="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className={classes["button_container"]}>
          <Link href="/services">
            <button
              type="button"
              className={`${styles["btnn"]} ${styles["btn2"]} ${
                pathName.includes("services") ? styles.isActive : ""
              } me-2 d-block d-lg-none`}
              onClick={() => onClose()}
            >
              Services
            </button>
          </Link>

          <Link href="/our-projects">
            <button
              type="button"
              className={`${styles["btnn"]} ${styles["btn2"]} ${
                pathName.includes("our-projects") ? styles.isActive : ""
              } me-2 d-block d-lg-none`}
              onClick={() => onClose()}
            >
              Our Projects
            </button>
          </Link>

          <Link href="/hire-team">
            <button
              type="button"
              className={`${styles["btnn"]} ${styles["btn2"]} ${
                pathName.includes("hire-team") ? styles.isActive : ""
              } me-2 d-block d-lg-none`}
              onClick={() => onClose()}
            >
              Hire Team
            </button>
          </Link>

          <Link href="/partners">
            <button
              type="button"
              className={`${styles["btnn"]} ${styles["btn2"]} ${
                pathName.includes("partners") ? styles.isActive : ""
              } me-2 d-block d-lg-none`}
              onClick={() => onClose()}
            >
              Partners
            </button>
          </Link>

          <Link href="/careers">
            <button
              type="button"
              className={`${styles["btnn"]} ${styles["btn2"]} ${
                pathName.includes("careers") ? styles.isActive : ""
              } me-2 d-block d-lg-none`}
              onClick={() => onClose()}
            >
              Carrers
            </button>
          </Link>

          <Link href="/blog">
            <button
              type="button"
              className={`${styles["btnn"]} ${styles["btn2"]} ${
                pathName.includes("blog") ? styles.isActive : ""
              } me-2 d-block d-lg-none`}
              onClick={() => onClose()}
            >
              Blog
            </button>
          </Link>

          <Link href="/about-us">
            <button
              type="button"
              className={`${styles["btnn"]} ${styles["btn2"]} ${
                pathName.includes("about-us") ? styles.isActive : ""
              } me-2 d-block d-lg-none`}
              onClick={() => onClose()}
            >
              AboutUs
            </button>
          </Link>

          <Link href="/contact-us">
            <button
              type="button"
              className={`${styles["btnn"]} ${styles["btn2"]} ${
                pathName.includes("contact-us") ? styles.isActive : ""
              } me-2 d-block d-lg-none`}
              onClick={() => onClose()}
            >
              contactus
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  anchor: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
