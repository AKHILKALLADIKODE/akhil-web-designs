import React, { Fragment, useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ajc1 from "../assets/work/ajc1.jpg";
import ajc2 from "../assets/work/ajc2.jpg";
import ajc3 from "../assets/work/ajc3.jpg";
import pk1 from "../assets/work/pk1.jpg";
import pk2 from "../assets/work/pk2.jpg";
import pk3 from "../assets/work/pk3.jpg";
import av1 from "../assets/work/av1.jpg";
import av2 from "../assets/work/av3.jpg";
import ws1 from "../assets/work/wood1.jpg";
import ws2 from "../assets/work/wood2.jpg";
import mm1 from "../assets/work/mm1.jpg";
import mm2 from "../assets/work/mm2.jpg";
import mm3 from "../assets/work/mm3.jpg";
import bb1 from "../assets/work/bb1.jpg";
import bb2 from "../assets/work/bb2.jpg";
import bb3 from "../assets/work/bb3.jpg";
import sz1 from "../assets/work/sz1.jpg";
import sz2 from "../assets/work/sz2.jpg";
const Portfolio = () => {
  const parentSlider = useRef(null);
  const childSlider = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(parentSlider.current);
    setNav2(childSlider.current);
  }, []);

  // Function to handle button clicks
  const handleThumbnailClick = (index) => {
    parentSlider.current.slickGoTo(index); // Go to the corresponding slide in the parent slider
  };

  // Settings for the parent slider
  const parentSettings = {
    asNavFor: nav2, // Link the parent slider with the child
    ref: parentSlider,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true, // Adds fade effect
  };

  // Settings for the child slider (thumbnails)
  const childSettings = {
    asNavFor: nav1, // Link the child slider with the parent
    ref: childSlider,
    slidesToShow: 6, // Show multiple thumbnails by default
    slidesToScroll: 1,
    focusOnSelect: true, // Allows clicking on thumbnails to navigate
    arrows: true,
    centerMode: false, // Center the thumbnails
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024, // for screens 1024px and below
        settings: {
          slidesToShow: 5.5, // Show 3 slides on tablet size
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // for screens 768px and below
        settings: {
          slidesToShow: 3.5, // Show 2 slides on small devices
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // for screens 480px and below (mobile devices)
        settings: {
          slidesToShow: 2.5, // Show 1 slide on mobile devices
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <div className="container" id="Portfolio">
        <div className="portfolio-container ">
          <h2 className="text-center text-[20px] md:text-[25px] lg:-text-[30px] font-bold mb-5 mt-10">
            Portfolio
          </h2>

          {/* Parent Slider */}
          <Slider {...parentSettings}>
            {/* 1 */}
            <div>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={ajc1}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://ajcjewel.com/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    AJC
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={ajc2}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://ajcjewel.com/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    AJC
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={ajc3}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://ajcjewel.com/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    AJC
                  </a>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={pk1}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://www.peekayflour.com/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    PEEKAY FLOUR
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={pk2}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://www.peekayflour.com/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    PEEKAY FLOUR
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={pk3}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://www.peekayflour.com/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    PEEKAY FLOUR
                  </a>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={av1}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://www.iaverse.co/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    AIVARSE
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={av2}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://www.iaverse.co/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    AIVARSE
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={av1}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://www.iaverse.co/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    AIVARSE
                  </a>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={ws1}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://woodandstone.noviindus.in/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    WOOD AND STONE
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={ws2}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://woodandstone.noviindus.in/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    WOOD AND STONE
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={ws1}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://woodandstone.noviindus.in/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    WOOD AND STONE
                  </a>
                </div>
              </div>
            </div>
            {/* 5 */}
            <div>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={mm2}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://www.mobilemediaoman.com/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    MOBILE MEADIA
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={mm1}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://www.mobilemediaoman.com/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    MOBILE MEADIA
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={mm3}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href="https://www.mobilemediaoman.com/"
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    MOBILE MEADIA
                  </a>
                </div>
              </div>
            </div>
            {/* 6 */}
            <div>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={bb1}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href=""
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    BRAIN BENDER
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={bb2}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href=""
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    BRAIN BENDER
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={bb3}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href=""
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    BRAIN BENDER
                  </a>
                </div>
              </div>
            </div>
            {/* 7 */}
            <div>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={sz1}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href=""
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    SMART HORIZONS
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={sz2}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href=""
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    SMART HORIZONS
                  </a>
                </div>
                <div className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] relative group ">
                  <img
                    src={sz1}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                  <a
                    href=""
                    target="_blank"
                    className="h-[300px] md:h-[380px] lg:h-[450px] w-[100%] bg-[#0000007d] absolute top-0 text-white text-[18px] font-bold p-5 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    SMART HORIZONS
                  </a>
                </div>
              </div>
            </div>
          </Slider>

          {/* Child (Thumbnail) Slider */}
          <Slider {...childSettings} className="mt-5">
            <div onClick={() => handleThumbnailClick(0)}>
              <img
                src={ajc2}
                alt=""
                className="lg:w-[200px] md:w-[200px] w-[100px] lg:h-[200px] md:h-[200px] h-[100px] cursor-pointer "
              />
            </div>
            <div onClick={() => handleThumbnailClick(1)}>
              <img
                src={pk1}
                alt=""
                className="lg:w-[200px] md:w-[200px] w-[100px] lg:h-[200px] md:h-[200px] h-[100px] cursor-pointer "
              />
            </div>
            <div onClick={() => handleThumbnailClick(2)}>
              <img
                src={av2}
                alt=""
                className="lg:w-[200px] md:w-[200px] w-[100px] lg:h-[200px] md:h-[200px] h-[100px] cursor-pointer "
              />
            </div>
            <div onClick={() => handleThumbnailClick(3)}>
              <img
                src={ws2}
                alt=""
                className="lg:w-[200px] md:w-[200px] w-[100px] lg:h-[200px] md:h-[200px] h-[100px] cursor-pointer "
              />
            </div>
            <div onClick={() => handleThumbnailClick(4)}>
              <img
                src={mm1}
                alt=""
                className="lg:w-[200px] md:w-[200px] w-[100px] lg:h-[200px] md:h-[200px] h-[100px] cursor-pointer "
              />
            </div>
            <div onClick={() => handleThumbnailClick(5)}>
              <img
                src={bb3}
                alt=""
                className="lg:w-[200px] md:w-[200px] w-[100px] lg:h-[200px] md:h-[200px] h-[100px] cursor-pointer "
              />
            </div>
            <div onClick={() => handleThumbnailClick(6)}>
              <img
                src={sz2}
                alt=""
                className="lg:w-[200px] md:w-[200px] w-[100px] lg:h-[200px] md:h-[200px] h-[100px] cursor-pointer "
              />
            </div>
          </Slider>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
