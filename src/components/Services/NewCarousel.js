import React, { Component, useState } from "react";
import Slider from "react-slick";

const NewCarousel = () => {
  const Images = [
    {
      id: 1,
      src: "https://i.postimg.cc/KvK4RRwT/vertical1.png",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://i.postimg.cc/8zQkcwh8/vertical2.png",
      alt: "Image 2 ",
    },
    {
      id: 3,
      src: "https://i.postimg.cc/8zQkcwh8/vertical2.png",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://i.postimg.cc/8zQkcwh8/vertical2.png",
      alt: "Image 3",
    },
    {
      id: 5,
      src: "https://i.postimg.cc/8zQkcwh8/vertical2.png",
      alt: "Image 3",
    },
    {
      id: 6,
      src: "https://i.postimg.cc/8zQkcwh8/vertical2.png",
      alt: "Image 3",
    },
    {
      id: 7,
      src: "https://i.postimg.cc/8zQkcwh8/vertical2.png",
      alt: "Image 3",
    },
    {
      id: 8,
      src: "https://i.postimg.cc/8zQkcwh8/vertical2.png",
      alt: "Image 3",
    },
    {
      id: 9,
      src: "https://i.postimg.cc/8zQkcwh8/vertical2.png",
      alt: "Image 3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    arrows: false,
    beforeChange: (currentSlide, nextSlide) => {
   
    },
    afterChange: (currentSlide) => {
      setCurrentSlide(currentSlide);
    },
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          {Images.map((image) => {
            return (
              <div key={image.id}>
                <img src={image.src} alt={image.alt} />
              </div>
            );
          })}
        </div>
      </Slider>
    </div>
  );
};

export default NewCarousel;
