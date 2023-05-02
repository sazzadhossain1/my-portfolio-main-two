import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects-parent-div">
      <div className="box-color-div"></div>
      <div className="third-child-div ">
        <h2
          className="amazing-work"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <span className="amazing-text">My Amazing</span>{" "}
          <span className="text-white">Works</span>
        </h2>
        <div className="border-bottom"></div>
        <h2 className="live-site-link">Click Photo For Live Website</h2>
        <div
          className=" grid-cart-div  "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="cart-body-div glass">
            <figure>
              <a href="https://auto-parts-place.web.app" target="blank">
                <img
                  className="image-siz"
                  src="https://my-portfolio-main-48693.web.app/static/media/1.0826f4ccb4f493e5abe3.png"
                  alt=""
                />
              </a>
            </figure>
            <div className="card-body">
              <h2 className="text">Technology Used </h2>
              <p className="text-p">
                React || React-Router || Tailwind || Firebase || MongoDB ||
                DaisyUI ||
              </p>
              <Link to="/details" className="button">
                <button className="">Explore Me</button>
              </Link>
              <button className="button">
                <a
                  href="https://github.com/sazzadhossain1/auto-parts-place-client"
                  target="blank"
                  alt=""
                >
                  GitHub Link
                </a>
              </button>
            </div>
          </div>

          <div className="cart-body-div glass">
            <figure>
              <a href="https://bike-bangladesh.web.app" target="blank">
                <img
                  className="image-siz"
                  src="https://my-portfolio-main-48693.web.app/static/media/2.f58d069d9f93424735c4.png"
                  alt=""
                />
              </a>
            </figure>

            <div className="card-body">
              <h2 className="text">Technology Used</h2>
              <p className="text-p">
                React || React-Router || Bootstrap || Firebase || MongoDB ||
              </p>
              <Link to="/details2" className="button">
                <button className="">Explore Me</button>
              </Link>
              <button className="button">
                <a
                  href="https://github.com/sazzadhossain1/bike-bangladesh-1"
                  target="blank"
                  alt=""
                >
                  GitHub Link
                </a>
              </button>
            </div>
          </div>

          <div className="cart-body-div glass ">
            <figure>
              <a
                href=" https://wedding-photography-c1317.firebaseapp.com/"
                target="blank"
              >
                <img
                  className="image-siz"
                  src="https://my-portfolio-main-48693.web.app/static/media/3.536b03c52101a37b1a63.png"
                  alt=""
                />
              </a>
            </figure>
            <div className="card-body">
              <h2 className="text">Technology Used</h2>
              <p className="text-p">
                React || React-Router || Bootstrap || Firebase || MongoDB ||
              </p>
              <Link to="/detail3" className="button">
                <button className="">Explore Me</button>
              </Link>
              <button className="button">
                <a
                  href="https://github.com/sazzadhossain1/your-dream-photo-1"
                  target="blank"
                  alt=""
                >
                  GitHub Link
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
