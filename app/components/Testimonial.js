"use client";
import React from "react";
import Image from "next/image";
import ImagePath from "../constant/ImagePath";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#DB0004",
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        padding: "4px 2.5px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#DB0004",
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        padding: "4px 2.5px",
      }}
      onClick={onClick}
    />
  );
}
function ArrowOnMobile(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

const TestimonialsContent = [
  {
    name: "Celina Raess",
    subHeading: "International Schooling the best online high school",
    para: "International Schooling offers a lot of opportunities for every individual. You have a lot of subjects to choose from, whatever you like the most and what’s most interesting for you, you’ll find a matching one. Having classmates and teachers from around the world opens your horizon, as is even more fun. The focus is on you and what your strengths are.",
  },
  {
    name: "Celina Raess",
    subHeading: "International Schooling the best online high school",
    para: "International Schooling offers a lot of opportunities for every individual. You have a lot of subjects to choose from, whatever you like the most and what’s most interesting for you, you’ll find a matching one. Having classmates and teachers from around the world opens your horizon, as is even more fun. The focus is on you and what your strengths are.",
  },
  {
    name: "Celina Raess",
    subHeading: "International Schooling the best online high school",
    para: "International Schooling offers a lot of opportunities for every individual. You have a lot of subjects to choose from, whatever you like the most and what’s most interesting for you, you’ll find a matching one. Having classmates and teachers from around the world opens your horizon, as is even more fun. The focus is on you and what your strengths are.",
  },
];

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: <ArrowOnMobile />,
          prevArrow: <ArrowOnMobile />,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: <ArrowOnMobile />,
          prevArrow: <ArrowOnMobile />,
        },
      },
    ],
  };
  return (
    <>
      <div className="">
        <Image
          width={100}
          height={100}
          src={ImagePath.QUOTE_ICON}
          alt="quote-icon"
          className="rotate-180 mx-auto"
        />
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {TestimonialsContent.map((item, index) => (
            <div key={index} className="text-center text-[#5D5D5D] mt-10">
              <p className="text-lg font-bold mb-2">{item.name}</p>
              <p className="font-medium">{item.subHeading}</p>
              <p className="mt-10 lg:w-1/2 w-full mx-auto">{item.para}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
