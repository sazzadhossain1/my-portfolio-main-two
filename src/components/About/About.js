import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1 className=" about">
        About <span className="me">Me</span>
      </h1>
      <div className="border-bottom-about"></div>
      <div className="container-div">
        <img
          className="about-img"
          src="https://www.seekpng.com/png/detail/289-2895407_clip-art-portfolio-categories-1designshop-page-man-on.png"
          alt=""
        />
        <div className="about-headingAnd-p-div">
          <h1 className="about-heading">I am Frontend Developer</h1>
          <p className="about-p">
            Hi there, This is{" "}
            <span className="about-name">Sazzad Hossain Tomal</span> I am a
            expert in HTML, CSS, Bootstrap, Tailwind Css, Daisy Ui, JavaScript,
            React Js, React Bootstrap, Css3 Responsiveness and other essential
            tools. I am currently learning more new programming technology and I
            have fallen in love with programming technology.I love to develop
            interesting and unique design.I also like to challenge myself to
            learn new things and i crave for new experiences and challenges. new
            technologies are being discovered and their demand and popularity
            are increasing, I actually prefer to work with those new
            technologies, but the web development profession is above all my
            preferences.Thanks a lot for visiting my portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
