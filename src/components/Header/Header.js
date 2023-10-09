"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import { useRouter, usePathname } from "next/navigation";
import { Drawer } from "../Drawer/Drawer";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../Svgs/serverSecurity";

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();

  const [open, setOpen] = useState(false);
  const headerContainerRef = useRef(null);

  useEffect(() => {
    if (pathName.includes("project-details")) {
      headerContainerRef.current.style.backgroundColor = "#011423";
    } else if (pathName.includes("mobile-app-development")) {
      console.log("object");
      headerContainerRef.current.classList.add(`${styles["mobile_app_bg"]}`);
      headerContainerRef.current.style.backgroundColor = "transparent";
    } else {
      headerContainerRef.current.classList.remove(`${styles["mobile_app_bg"]}`);
      headerContainerRef.current.style.backgroundColor = "";
    }
  }, [headerContainerRef, pathName]);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const navButtonClickHandler = (routeName) => {
    if (routeName === "careers") {
      router.push("/careers");
    } else if (routeName === "ourProjects") {
      router.push("/our-projects");
    } else if (routeName === "contactUs") {
      router.push("/contact-us");
    } else if (routeName === "hireTeam") {
      router.push("/hire-team");
    } else if (routeName === "services") {
      router.push("/services");
    } else if (routeName === "partners") {
      router.push("/partners");
    } else if (routeName === "blog") {
      router.push("/blog");
    }
  };

  return (
    <div className={styles["main"]} ref={headerContainerRef}>
      <nav
        className={`${styles["navbar"]}  navbar navbar-expand-lg`}
        ref={headerContainerRef}
      >
        <div className="container" style={{ zIndex: "10" }}>
          {!open && (
            <a className={`${styles["header_logo"]} navbar-brand me-2`} href="/">
              <Logo />
            </a>
          )}

          <button
            className={`${styles["hamburger"]} navbar-toggler`}
            type="button"
            onClick={handleOpen}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {/* Dashboard */}
                </a>
              </li>
            </ul>

            <div className="d-flex flex-column flex-lg-row align-items-center">
              <button
                type="button"
                className={`${styles["btnn"]} ${styles["btn2"]} ${
                  pathName.includes("services") ? styles.isActive : ""
                } me-2 d-lg-bl`}
                onClick={() => navButtonClickHandler("services")}
              >
                Services
              </button>

              <button
                type="button"
                className={`${styles["btnn"]} ${styles["btn2"]} ${
                  pathName.includes("our-projects") ? styles.isActive : ""
                } me-2 d-lg-bl`}
                onClick={() => navButtonClickHandler("ourProjects")}
              >
                Our Projects
              </button>

              <button
                type="button"
                className={`${styles["btnn"]} ${styles["btn2"]} ${
                  pathName.includes("hire-team") ? styles.isActive : ""
                } me-2 d-lg-bl`}
                onClick={() => navButtonClickHandler("hireTeam")}
              >
                Hire Team
              </button>

              <button
                type="button"
                className={`${styles["btnn"]} ${styles["btn2"]} ${
                  pathName.includes("partners") ? styles.isActive : ""
                } me-2 d-lg-bl`}
                onClick={() => navButtonClickHandler("partners")}
              >
                Partners
              </button>

              <button
                type="button"
                className={`${styles["btnn"]} ${styles["btn2"]}  ${
                  pathName === "/careers/" ? styles.isActive : ""
                } me-2 d-lg-bl`}
                onClick={() => navButtonClickHandler("careers")}
              >
                Careers
              </button>

              <button
                type="button"
                className={`${styles["btnn"]} ${styles["btn2"]}  ${
                  pathName === "/blog/" ? styles.isActive : ""
                } me-2 d-lg-bl`}
                onClick={() => navButtonClickHandler("blog")}
              >
                Blog
              </button>

              <button
                type="button"
                className={`${styles["btnn"]} ${styles["btn2"]} me-2 d-lg-bl`}
              >
                About Us
              </button>

              <button
                type="button"
                className={`${styles["btnn"]} ${styles["btn2"]} ${
                  pathName.includes("contact-us") ? styles.isActive : ""
                } me-2 d-lg-bl`}
                onClick={() => navButtonClickHandler("contactUs")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <Drawer
          anchor="right"
          open={open}
          onClose={handleClose}
          pathName={pathName}
        />
      </nav>
    </div>
  );
};

export default Navbar;
