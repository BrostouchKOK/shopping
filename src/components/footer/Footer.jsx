import React from "react";
import FooterLogo from "../../assets/logo.png";
import { FooterBanner, FooterLinks } from "../../constant/footerList";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div style={FooterBanner} className="text-white mb-20">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company detail */}
          <div className="py-8 px-4">
            <h1
              className="flex items-center gap-3 mb-3
              sm:text-3xl text-xl font-bold sm:text-left text-justify"
            >
              <img src={FooterLogo} alt="" className="max-w-[50px]" />
              T-Shop
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              velit magni aspernatur eos, laborum expedita?
            </p>
          </div>
          {/* footer links */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3
            col-span-2 md:pl-10"
          >
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-primary
                      hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* social links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex gap-3 items-center">
                  <FaLocationArrow />
                  <p>#KPT St, 123 Cambodia</p>
                </div>
                <div className="flex gap-3 items-center mt-3">
                  <FaMobileAlt />
                  <p>+855 96 96 34 904</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
