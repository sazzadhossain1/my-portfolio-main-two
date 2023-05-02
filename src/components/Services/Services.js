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
        <div>
          <FaPaintBrush className="icon"></FaPaintBrush>
          <h1>Web Development</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            soluta maiores id dolor? Quae, et! Quo quidem totam mollitia
            veritatis?
          </p>
        </div>
        {/* cart 2 */}
        <div>
          <FaCode></FaCode>
          <h1>Web Design</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            soluta maiores id dolor? Quae, et! Quo quidem totam mollitia
            veritatis?
          </p>
        </div>
        {/* cart 3 */}
        <div>
          <FaPaintBrush className="icon"></FaPaintBrush>
          <FaFigma></FaFigma>
          <h1>Figma to Html</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            soluta maiores id dolor? Quae, et! Quo quidem totam mollitia
            veritatis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
