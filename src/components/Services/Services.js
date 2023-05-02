import React from "react";
import "./Services.css";
import { FaBalanceScale, FaCode, FaFigma, FaPaintBrush } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services-parent-div">
      <div
        className="service-child-parent"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="service-h1">My Services</h1>
        <div className="provider-parent-div">
          <div className="blank-div"></div>
          <h3 className="provide-h3">What i provide</h3>
          <div className="blank-div"></div>
        </div>
      </div>

      {/* Service cart section */}
      {/* cart 1 */}
      <div className="cart-parent-div">
        <div className="cart-div" data-aos="zoom-in" data-aos-duration="2000">
          <FaPaintBrush className="icon"></FaPaintBrush>
          <h1 className="cart-header">Web Development</h1>
          <p>
            A beautiful responsive website you can Develop through me in a very
            short time. My previous experience in this regard is also good.
          </p>
        </div>
        {/* cart 2 */}
        <div className="cart-div" data-aos="zoom-in" data-aos-duration="2000">
          <FaCode className="icon"></FaCode>
          <h1 className="cart-header">Web Design</h1>
          <p>
            I can make a beautiful responsive website for you. You can design a
            Web Site through me in a very short time. My previous experience in
            this regard is also good.
          </p>
        </div>
        {/* cart 3 */}
        <div
          className="cart-div hover-text"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <FaFigma className="icon"></FaFigma>
          <h1 className="cart-header hover-text">Figma to Html</h1>
          <p>
            I can convert pixel perfect web design from Figma to HTML. You can
            convert a Web Site Figma to Html through me in a very short time. My
            previous experience in this regard is also good.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
