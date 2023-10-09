import React from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.scss";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    // slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <p>
            With Lorem ipsum dolor sit amet “Consectetur. Lorem et donec leo
            lectus vel ullamcorper facilisis. Dictum eros enim enim luctus sit
            semper euismod.Lorem ipsum dolor sit amet consecteturLorem ipsum
            dolor sit amet consectetur.
          </p>
        </div>
        <div>
          <p>
            With Lorem ipsum dolor sit amet “Consectetur. Lorem et donec leo
            lectus vel ullamcorper facilisis. Dictum eros enim enim luctus sit
            semper euismod.Lorem ipsum dolor sit amet consecteturLorem ipsum
            dolor sit amet consectetur.
          </p>
        </div>
        <div>
        <p>
            With Lorem ipsum dolor sit amet “Consectetur. Lorem et donec leo
            lectus vel ullamcorper facilisis. Dictum eros enim enim luctus sit
            semper euismod.Lorem ipsum dolor sit amet consecteturLorem ipsum
            dolor sit amet consectetur.
          </p>
        </div>
        <div>
        <p>
            With Lorem ipsum dolor sit amet “Consectetur. Lorem et donec leo
            lectus vel ullamcorper facilisis. Dictum eros enim enim luctus sit
            semper euismod.Lorem ipsum dolor sit amet consecteturLorem ipsum
            dolor sit amet consectetur.
          </p>
        </div>
        <div>
        <p>
            With Lorem ipsum dolor sit amet “Consectetur. Lorem et donec leo
            lectus vel ullamcorper facilisis. Dictum eros enim enim luctus sit
            semper euismod.Lorem ipsum dolor sit amet consecteturLorem ipsum
            dolor sit amet consectetur.
          </p>
        </div>
        <div>
        <p>
            With Lorem ipsum dolor sit amet “Consectetur. Lorem et donec leo
            lectus vel ullamcorper facilisis. Dictum eros enim enim luctus sit
            semper euismod.Lorem ipsum dolor sit amet consecteturLorem ipsum
            dolor sit amet consectetur.
          </p>
        </div>
        <div>
        <p>
            With Lorem ipsum dolor sit amet “Consectetur. Lorem et donec leo
            lectus vel ullamcorper facilisis. Dictum eros enim enim luctus sit
            semper euismod.Lorem ipsum dolor sit amet consecteturLorem ipsum
            dolor sit amet consectetur.
          </p>
        </div>
        <div>
        <p>
            With Lorem ipsum dolor sit amet “Consectetur. Lorem et donec leo
            lectus vel ullamcorper facilisis. Dictum eros enim enim luctus sit
            semper euismod.Lorem ipsum dolor sit amet consecteturLorem ipsum
            dolor sit amet consectetur.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
