import React, { Fragment } from "react";
import NavBar from "../Components/NavBar";
import Banner from "../Components/Banner";
import Work from "../Components/Work";
import Portfolio from "../Components/Portfolio";
import Skils from "../Components/Skils";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <div>
        <NavBar></NavBar>
        <Banner></Banner>
        <div className="mt-10 mb-10 container relative top-0 ">
          <h1 className="text-[20px] md:text-[50px]  lg:text-[75px]  font-bold ">
            I create amazing online experiences.
          </h1>
        </div>
        <Work></Work>
        <Portfolio></Portfolio>
        <Skils></Skils>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </Fragment>
  );
};

export default HomePage;
