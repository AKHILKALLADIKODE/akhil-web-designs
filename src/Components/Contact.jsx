import React, { Fragment } from "react";
import ContactForm from "./ContactForm";
import sm1 from "../assets/socilal-meadia/linkedin.svg";
import sm2 from "../assets/socilal-meadia/whatsapp.svg";
import sm3 from "../assets/socilal-meadia/instagram.svg";
import sm4 from "../assets/socilal-meadia/threads.svg";
import sm5 from "../assets/socilal-meadia/facebook.svg";
import { FaDownload } from "react-icons/fa";
const Contact = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to your resume PDF in the public folder
    link.download = "resume.pdf"; // The filename for the downloaded file
    link.click();
  };
  return (
    <Fragment>
      <div id="contact">
        <div className="mt-20 mb-10 md:mb-20 lg:mb-20 container ">
          <h3 className="text-[#999] text-[20px] md:text-[25px] lg:text-[30px] font-normal mt-10 ">
            Got any Website requirements?
          </h3>
          <div className="slider  ">
            <div className="slider-track">
              <h4 className="slide text-[#000] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                Pitch
              </h4>
              <h4 className="slide text-[#999] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                To
              </h4>
              <h4 className="slide text-[#999] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                Us
              </h4>
              <h4 className="slide text-[#000] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                Now
              </h4>
              <h4 className="slide text-[#999] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                #
              </h4>
              <h4 className="slide text-[#000] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                Pitch
              </h4>
              <h4 className="slide text-[#999] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                To
              </h4>
              <h4 className="slide text-[#999] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                Us
              </h4>
              <h4 className="slide text-[#000] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                Now
              </h4>
              <h4 className="slide text-[#999] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                #
              </h4>
              <h4 className="slide text-[#000] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                Pitch
              </h4>
              <h4 className="slide text-[#999] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                To
              </h4>
              <h4 className="slide text-[#999] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                Us
              </h4>
              <h4 className="slide text-[#000] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                Now
              </h4>
              <h4 className="slide text-[#999] text-[25px] md:text-[40px] lg:text-[70px] me-4 ">
                #
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 ">
            <div>
              <ContactForm></ContactForm>
            </div>
            <div className=" bg-[#F4F4F4] p-5 ">
              <h6 className="text-[10px] md:text-[15px] lg:text-[20px] text-[#000] font-semibold border-b-2 w-fit border-[#000] ">
                Connect Us On
              </h6>
              <div className="mt-2 md:mt-3 lg:mt-5">
                <a
                  href="tel:80868594584"
                  className=" text-[#000] text-[10px] md:text-[15px] lg:text-[20px] font-normal "
                >
                  80868594584
                </a>
              </div>
              <div className="mt-2 md:mt-3 lg:mt-5">
                <a
                  href="mailto:akhilkalladikode774@gmail.com"
                  className=" text-[#000] text-[10px] md:text-[15px] lg:text-[20px] font-normal "
                >
                  akhilkalladikode774@gmail.com
                </a>
              </div>
              <div className="mt-2 md:mt-3 lg:mt-5">
                <p className=" text-[#000] text-[10px] md:text-[15px] lg:text-[20px] font-normal ">
                  Kalladikode (House) Mankunnu Meppadi (P o) Wayanad
                </p>
              </div>
              <div className="mt-5">
                <p className="text-[#000] text-[10px] md:text-[15px] lg:text-[20px] font-semibold ">
                  <span className="border-b-2 w-fit border-[#000]">
                    Also Find Us
                  </span>
                  On
                </p>
              </div>
              <div className="flex flex-wrap gap-5">
                <div className="mt-4 cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/akhil-kr-9425a7230/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={sm1}
                      alt="linkedin"
                      className="w-[20px] md:w-[30px] lg:w-[40px]  h-[20px] md:h-[30px] lg:h-[30px] "
                    />
                  </a>
                </div>
                <div className="mt-4 cursor-pointer">
                  <a
                    href="https://wa.me/8086859458"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={sm2}
                      alt="whatsapp"
                      className="w-[20px] md:w-[30px] lg:w-[40px]  h-[20px] md:h-[30px] lg:h-[30px]"
                    />
                  </a>
                </div>
                <div className="mt-4 cursor-pointer">
                  <a
                    href="https://www.instagram.com/akhiil.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={sm3}
                      alt="instagram"
                      className="w-[20px] md:w-[30px] lg:w-[40px]  h-[20px] md:h-[30px] lg:h-[30px]"
                    />
                  </a>
                </div>
                <div className="mt-4 cursor-pointer">
                  <a
                    href="https://www.threads.net/@akhiil.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={sm4}
                      alt="treads"
                      className="w-[20px] md:w-[30px] lg:w-[40px]  h-[20px] md:h-[30px] lg:h-[30px]"
                    />
                  </a>
                </div>
                <div className="mt-4 cursor-pointer">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={sm5}
                      alt="facebook"
                      className="w-[20px] md:w-[30px] lg:w-[40px]  h-[20px] md:h-[30px] lg:h-[30px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10 flex justify-center ">
          <button
            className="flex border-2 border-black p-2 ps-4 pe-4 font-semibold text-[15px] hover:bg-black hover:text-white transition-colors duration-300"
            onClick={handleDownload}
          >
            Resume Download
            <FaDownload className="ms-2" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
