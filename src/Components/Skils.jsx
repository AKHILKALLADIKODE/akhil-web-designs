import React, { Fragment } from "react";
import Slider from "react-slick";
import photoshop from "../assets/skill/photoshop.png";
import figma from "../assets/skill/figma.png";
import html from "../assets/skill/html.png";
import css from "../assets/skill/css.png";
import bootstrap from "../assets/skill/bootstrap.png";
import javascript from "../assets/skill/javascript.png";
import tailwind from "../assets/skill/tailwind.png";
import react from "../assets/skill/react.png";

const Skils = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true, // Pause autoplay on hover
    dots: true,
    infinite: true, // Infinite loop
    speed: 500,
    slidesToShow: 7, // Number of slides to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // for screens 1024px and below
        settings: {
          slidesToShow: 4, // Show 6 slides on tablet size
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // for screens 768px and below
        settings: {
          slidesToShow: 3, // Show 3.5 slides on small devices
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // for screens 768px and below
        settings: {
          slidesToShow: 2, // Show 3.5 slides on small devices
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // for screens 480px and below (mobile devices)
        settings: {
          slidesToShow: 1, // Show 2.5 slides on mobile devices
          slidesToScroll: 1,
        },
      },
    ],
  };

  const skills = [
    { img: photoshop, name: "Photoshop" },
    { img: figma, name: "Figma" },
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: bootstrap, name: "Bootstrap" },
    { img: javascript, name: "JavaScript" },
    { img: tailwind, name: "Tailwind" },
    { img: react, name: "React" },
    // Add more skills as needed
  ];

  return (
    <Fragment>
      <div className="pt-20 pb-20 mt-10 mb-10 bg-[#F4F4F4] " id="skill" >
        <div className="container ">
          <h3 className="text-[20px] md:text-[35px] lg:text-[50px] font-bold text-center ">
            The popular Technologies used by us to build responsive websites
          </h3>
          <Slider {...settings}>
            {skills.map((skill, index) => (
              <div key={index} className="p-3 text-center">
                <div className="border border-black p-3 rounded-[8px]">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-[140px] h-[170px] mx-auto"
                  />
                  <p className="text-[18px] mt-2">{skill.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Fragment>
  );
};

export default Skils;
