import React from "react";
import styles from "./Hero.module.scss";

const Carousel = () => {
  return (
    <>
      <h2 className={styles["sec-3-h2"]}>
        OUR<span> CLIENTS</span>
      </h2>

      {/* Carousel wrapper */}

      <div
        id="carouselBasicExample"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        {/* Indicators */}

        {/* Inner */}

        <div className="carousel-inner">
          {/* Single item */}

          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="https://i.postimg.cc/3NghyqNS/Microsoft-Teams-image.png"
              className="d-block w-100"
              alt="Sunset Over the City"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://i.postimg.cc/vZmRMTrS/Microsoft-Teams-image-1.png"
              className="d-block w-100"
              alt="Canyon at Nigh"
            />
          </div>
        </div>
      </div>

      {/* Carousel wrapper */}
    </>
  );
};

export default Carousel;
