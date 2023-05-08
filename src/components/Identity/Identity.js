import React from "react";
import "./Identity.css";

const Identity = () => {
  return (
    <div className="container identity-parent-div ">
      <div className="first-child-div">
        <h2 className="hello">Hello I'm</h2>
        <h1 className="name">Sazzad Hossain</h1>
        <h2 className="email">Email: sazzadtomal1@gmail.com</h2>
        <h2 className="creative-h2">
          A <span className="creative">Creative Web developer</span> From{" "}
          <span className="bangladesh">Bangladesh</span>
        </h2>
        <p className="paragraph-p">
          I'm creative web developer based in Bangladesh, and I'm very
          passionate and dedicated to my work
        </p>
        <button className="download-btn">DOWNLOAD RESUME</button>
      </div>
      <div className="second-child-div">
        <img
          src="https://bryan.infinitysoftway.com/wp-content/uploads/2022/01/04.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Identity;
