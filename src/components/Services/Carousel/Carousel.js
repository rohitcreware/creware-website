import React from "react";
import "./Carousel.scss";
import $ from "jquery";
import { test } from "../../../../Json/Testimonials";

const Carousel = () => {
  function imagesLoaded(images, fn) {
    var $imgs = $(images),
      i = 0,
      exec = () => {
        ++i >= $imgs.length && fn();
      };

    typeof fn == "function" &&
      $imgs.each(function (index, el) {
        if (this.complete) {
          exec();
        } else {
          this.addEventListener("load", exec);
          this.addEventListener("error", exec);
        }
      });
  }

  // Scrollbar
  React.useEffect(() => {
    $(function () {
      let opts = {
        className: "os-custom",
        callbacks: {
          onInitialized: initDrag,
        },
      };

      $(".gallery-carousel").each(function (index, el) {
        var $this = $(this);
        imagesLoaded($this.find("img"), () => {
          $this.data("os", OverlayScrollbars(el, opts));
        });
      });
    });
  }, []);

  const initDrag = function () {
    let $this = $(".gallery-carousel"),
      el = $this[0],
      isDown = false,
      mult = 3, // speed
      startX,
      scrollLeft;

    $this
      .on("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - el.offsetLeft;
        scrollLeft = $this.data("os").scroll().position.x;
      })
      .on("mouseleave mouseup", (e) => {
        isDown = false;
      })
      .on("mousemove", (e) => {
        if (isDown) {
          e.preventDefault();

          let x = e.pageX - el.offsetLeft,
            walk = (x - startX) * -mult;

          $this.data("os").scroll({ x: scrollLeft + walk + "px" }, 0);
        }
      });
  };

  return (
    <>
      <div id="wrapper">
        <h2></h2>

        <div className="gallery-carousel">
          <div className="gallery-photos">
            <div className="gallery-photo featured">
              {test.map((item, index) => (
                <div
                  className={`${styles["card-main"]} col-12 col-md-6 col-lg-3 gallery-photo featured`}
                  key={index}
                >
                  <div
                    className={`${styles["main-test-div"]} d-flex align-items-center justify-content-center flex-coulmn`}
                  >
                    <img
                      src={item.img}
                      className={`${styles["test-img"]} z-3 postion-relative ${styles.nTop}`}
                      alt={`Testimonial ${item.desc}`}
                    />
                    <div className={`${styles["box-test"]}`}>
                      <p className={`${styles["box-test-p"]} text-white`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="gallery-photo featured">
              <a href="#">
                <img src="//picsum.photos/id/12/600/500" alt="" />
              </a>
            </div>
            <div className="gallery-photo featured">
              <a href="#">
                <img src="//picsum.photos/id/85/600/500" alt="" />
              </a>
            </div>
            <div className="gallery-photo featured">
              <a href="#">
                <img src="//picsum.photos/id/36/600/500" alt="" />
              </a>
            </div>
            <div className="gallery-photo featured">
              <a href="#">
                <img src="//picsum.photos/id/53/600/500" alt="" />
              </a>
            </div>
            <div className="gallery-photo featured">
              <a href="#">
                <img src="//picsum.photos/id/32/600/500" alt="" />
              </a>
            </div>
            <div className="gallery-photo featured">
              <a href="#">
                <img src="//picsum.photos/id/78/600/500" alt="" />
              </a>
            </div>
            <div className="gallery-photo featured">
              <a href="#">
                <img src="//picsum.photos/id/432/600/500" alt="" />
              </a>
            </div>
            <div className="gallery-photo featured">
              <a href="#">
                <img src="//picsum.photos/id/32/600/500" alt="" />
              </a>
            </div>
            <div className="gallery-photo featured">
              <a href="#">
                <img src="//picsum.photos/id/12/600/500" alt="" />
              </a>
            </div>
            <div className="gallery-photo featured">
              <a href="#">
                <img src="//picsum.photos/id/54/600/500" alt="" />
              </a>
            </div>
            <div className="gallery-photo featured">
              <a href="#">
                <img src="//picsum.photos/id/27/600/500" alt="" />
              </a>
            </div>
            <div className="gallery-photo featured">
              <a href="#">
                <img src="//picsum.photos/id/65/600/500" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
