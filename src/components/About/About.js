import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import aboutMePhoto from "../../images/aboutMe/aboutMePhoto.png";

const About = () => {
  return (
    <div className="p-10 container mx-auto">
      <h1
        className=" about"
        // data-aos="fade-down"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
      >
        About <span className="me">Me</span>
      </h1>
      <div className="border-bottom-about"></div>
      <div className="container-div">
        <img
          // data-aos="fade-up"
          // data-aos-duration="3000"
          className="about-img"
          src={aboutMePhoto}
          alt=""
        />
        <div
          className="about-headingAnd-p-div"
          // data-aos="fade-left"
          // data-aos-duration="1500"
        >
          <h1 className="about-heading">I am Frontend Developer</h1>
          <p className="about-p">
            Hi there, This is{" "}
            <span className="about-name">Sazzad Hossain </span> I am a expert in
            HTML, CSS, Bootstrap, Tailwind Css, Daisy Ui, JavaScript, React Js,
            React Bootstrap, Css3 Responsiveness and other essential tools. I am
            currently learning more new programming technology and I have fallen
            in love with programming technology.I love to develop interesting
            and unique design.I also like to challenge myself to learn new
            things and i crave for new experiences and challenges. new
            technologies are being discovered and their demand and popularity
            are increasing, I actually prefer to work with those new
            technologies, but the web development profession is above all my
            preferences.Thanks a lot for visiting my portfolio.
          </p>
          <Link
            className="contact-me-btn"
            to="https://form.jotform.com/sazzadtomal1/general-inquiry-contact-form"
            target="_blank"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
