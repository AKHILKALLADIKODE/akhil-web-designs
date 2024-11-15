import React, { Fragment } from "react";
import bannerVideo from "../assets/banner/banner.mp4";

const Banner = () => {
  return (
    <Fragment>
      <div className="container" >
        <video muted loop autoPlay playsInline className="lg:h-[650px] md:h-[600px] h-[100%] w-[100%] object-cover mt-5 ">
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Fragment>
  );
};

export default Banner;
