import React, { Fragment } from "react";
import adobeVideo from "../assets/work/adobe.mp4";
import uiuxVideo from "../assets/work/uiux.mp4";
import webVideo from "../assets/work/web.mp4";
import reactVideo from "../assets/work/react.mp4";
const Work = () => {
  return (
    <Fragment>
      <div className=" sticky z-10 mt-10 md:mt-14 lg:mt-20 mb-10 md:mb-16 lg:mb-20 container ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-5 mb-5 ">
          <div className="border border-gray-300 p-5 text-center overflow-hidden relative group cursor-pointer ">
            <div>
              <h3 className="text-[18px] md:text-[22px] lg:text-[22px]  font-bold text-center ">
                ADOBE PHOTOSHOP
              </h3>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                Image Editing
              </p>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                Graphic Design
              </p>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                Photo Compositing
              </p>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                Layer Management
              </p>
            </div>
            <div className=" w-[100%] h-[100%] absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out ">
              <video
                muted
                loop
                autoPlay
                playsInline
                className="w-[100%] h-[100%] object-fill    "
              >
                <source src={adobeVideo}></source>
              </video>
            </div>
          </div>
          <div className="border border-gray-300 p-5 text-center relative group cursor-pointer ">
            <div>
              <h3 className="text-[18px] md:text-[22px] lg:text-[22px]  font-bold text-center ">
                UI UX DESIGN
              </h3>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                Ideation
              </p>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                User Experience (UX)
              </p>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                Responsive designs
              </p>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                Interactive Design System
              </p>
            </div>
            <div className=" w-[100%] h-[100%]  absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out ">
              <video
                muted
                loop
                autoPlay
                playsInline
                className="w-[100%] h-[100%] object-fill "
              >
                <source src={uiuxVideo}></source>
              </video>
            </div>
          </div>
          <div className="border border-gray-300 p-5 text-center overflow-hidden relative group cursor-pointer ">
            <div>
              <h3 className="text-[18px] md:text-[22px] lg:text-[22px]  font-bold text-center ">
                WEB DESIGNING
              </h3>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                UI Prototyping
              </p>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                Responsive Design
              </p>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                Color and Typography
              </p>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                User Journey Mapping
              </p>
            </div>
            <div className="w-[100%] h-[100%] absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out ">
              <video
                muted
                loop
                autoPlay
                playsInline
                className="w-[100%] h-[100%] object-fill "
              >
                <source src={webVideo}></source>
              </video>
            </div>
          </div>
          <div className="border border-gray-300 p-5 text-center overflow-hidden relative group ">
            <div>
              <h3 className="text-[18px] md:text-[22px] lg:text-[22px]  font-bold text-center ">REACT JS </h3>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                Component-Based Development
              </p>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                State Management
              </p>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                Single Page Applications
              </p>
              <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-3 ">
                Virtual DOM
              </p>
            </div>
            <div className="w-[100%] h-[100%] absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out ">
              <video
                muted
                loop
                autoPlay
                playsInline
                className="w-[100%] h-[100%] object-fill "
              >
                <source src={reactVideo}></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Work;
