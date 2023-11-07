import React, { useEffect, useRef, useState } from "react";
import OverlayScrollbars from "overlayscrollbars";
import $ from "jquery"; // Import jQuery if you haven't already
import "./ImageGallery.scss";
import { portfolio } from "../../../../Json/HomeCard";

function ImageGallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    // Function to check if all images have loaded
    function imagesLoaded(images, fn) {
      const $imgs = $(images);
      let i = 0;

      const exec = () => {
        ++i >= $imgs.length && fn();
      };

      typeof fn === "function" &&
        $imgs.each(function (index, el) {
          if (el.complete) {
            exec();
          } else {
            el.addEventListener("load", exec);
            el.addEventListener("error", exec);
          }
        });
    }

    // Function to initialize the scrollbar
    function initScrollbar() {
      const galleryElement = galleryRef.current;

      if (galleryElement) {
        const $this = $(galleryElement);
        imagesLoaded($this.find("img"), () => {
          const opts = {
            className: "os-custom",
            callbacks: {
              onInitialized: initDrag,
            },
          };
          $this.data("os", OverlayScrollbars(galleryElement, opts));
        });
      }
    }

    // Function to handle dragging the gallery
    function initDrag() {
      const $this = $(galleryRef.current);
      const el = $this[0];
      let isDown = false;
      const mult = 3; // Speed
      let startX, scrollLeft;

      $this
        .on("mousedown", (e) => {
          isDown = true;
          startX = e.pageX - el.offsetLeft;
          scrollLeft = $this.data("os").scroll().position.x;
        })
        .on("mouseleave mouseup", () => {
          isDown = false;
        })
        .on("mousemove", (e) => {
          if (isDown) {
            e.preventDefault();
            const x = e.pageX - el.offsetLeft;
            const walk = (x - startX) * -mult;
            $this.data("os").scroll({ x: scrollLeft + walk + "px" }, 0);
          }
        });
    }

    // Initialize the scrollbar
    initScrollbar();
  }, []);

  return (
    <div id="wrapper">
      <h2></h2>
      <div className="gallery-carousel" ref={galleryRef}>
        <div className="gallery-photos">
          {/* Map over your image data and generate gallery photos */}
          {portfolio.map((image, index) => (
            <div
              key={index}
              className={`gallery-photo ${
                image.featured ? "featured" : "thumbs"
              }`}
            >
              <a href="#">
                <img src={image.img} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
