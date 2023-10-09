import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import { useRef } from "react";

const VerticalMode = ({index}) => {

    const sliderRef = useRef(null);

    useEffect(() => {
        console.log(index)
        if(index){
            handleOnClick(index)
        }
    },[index])
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: false,
        centerMode: true,
        centerPadding: "30px",
        arrows: false,
        // autoplay: true,
        // speed: 500,
        // autoplaySpeed: 3000,
        // cssEase: "linear",
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };

    const handleOnClick = index => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };
    return (
        <div>
            <Slider ref={sliderRef} {...settings}>
                <div >
                    <img
                        src="https://source.unsplash.com/user/c_v_r/500x250"
                        alt="img"

                    />
                </div>
                <div >
                    <img
                        src="https://source.unsplash.com/user/c_v_r/500x250"
                        alt=""

                    />
                </div>
                <div >
                    <img
                        src="https://source.unsplash.com/user/c_v_r/500x250"
                        alt=""

                    />
                    
                </div>
                <div >
                    <img
                        src="https://source.unsplash.com/user/c_v_r/500x250"
                        alt=""

                    />
                    
                </div>
                <div >
                    <img
                        src="https://source.unsplash.com/user/c_v_r/500x250"
                        alt=""

                    />
                    
                </div>
                <div >
                    <img
                        src="https://source.unsplash.com/user/c_v_r/500x250"
                        alt=""

                    />
                    
                </div>
                <div >
                    <img
                        src="https://source.unsplash.com/user/c_v_r/500x250"
                        alt=""

                    />
                    
                </div>
                <div >
                    <img
                        src="https://source.unsplash.com/user/c_v_r/500x250"
                        alt=""

                    />
                    
                </div>
                <div >
                    <img
                        src="https://source.unsplash.com/user/c_v_r/500x250"
                        alt=""

                    />
                    
                </div>
            </Slider>
        </div>
    );

}

export default VerticalMode;