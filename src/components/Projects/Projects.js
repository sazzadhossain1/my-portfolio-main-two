import React, { useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

import burjKholifa from "../../images/burjKholifa.png";
import mrCode from "../../images/screencapture-localhost-3000-home-2023-05-22-19_42_02.png";
import myPettu from "../../images/project-3.png";

import autoPartsPlace from "../../images/autoPartsPlace.png";
import BIKEBANGLADESH from "../../images/BIKEBANGLADESH.png";
import weddingPhotography from "../../images/weddingPhotography.png";

import commingSoonOne from "../../images/commingSoonOne.jpeg";
import commingSoonTwo from "../../images/commingSoonTwo.jpeg";
import yourEmotionsMatter from "../../images/realTimeProjects/yourEmotionsMatter.png";
import tripShipTask from "../../images/realTimeProjects/tripShipTask.png";
import musaFirAirTravels from "../../images/realTimeProjects/musaFirAirTravels.png";
import websiteProfessional from "../../images/realTimeProjects/websiteProfessional.png";
import teacharJackOnline from "../../images/realTimeProjects/teacharJackOnline.png";

const Projects = () => {
  const [visibleSection, setVisibleSection] = useState("react");

  const allProjects = [
    {
      id: 1,
      img: teacharJackOnline,
      technologyTitle: "Technology Used ",
      technologyName: "React || React-Router || Tailwind || Swiper || DaisyUI ",
      liveLink: "https://bd.teacherjackonline.com/",
      gitHubLink: "https://github.com/sazzadhossain1/TEACHER-JACK",
    },
    {
      id: 2,
      img: websiteProfessional,
      technologyTitle: "Technology Used ",
      technologyName: "React || React-Router || Tailwind || Swiper || DaisyUI ",
      liveLink: "https://websitesprofessional.com/",
      gitHubLink: "https://github.com/sazzadhossain1/websitesprofessional",
    },
    {
      id: 3,
      img: musaFirAirTravels,
      technologyTitle: "Technology Used ",
      technologyName: "React || React-Router || Tailwind || Swiper || DaisyUI ",
      liveLink: "https://musafirairtravels.com/",
      gitHubLink: "https://github.com/sazzadhossain1/musafir",
    },
    {
      id: 4,
      img: tripShipTask,
      technologyTitle: "Technology Used ",
      technologyName: "React || React-Router || Tailwind || Swiper || DaisyUI ",
      liveLink: "https://tripshiptask.com/",
      gitHubLink:
        "https://github.com/sazzadhossain1/Zakir-sir-first-job-project",
    },
    {
      id: 5,
      img: yourEmotionsMatter,
      technologyTitle: "Technology Used ",
      technologyName: "React || React-Router || Tailwind || Swiper || DaisyUI ",
      liveLink: "https://tiffany.abaacorp.com/",
      gitHubLink: "https://github.com/sazzadhossain1/four-section-cart-p",
    },
    {
      id: 6,
      img: burjKholifa,
      technologyTitle: "Technology Used ",
      technologyName:
        "React || React-Router || Tailwind || Firebase || Swiper || DaisyUI ",
      liveLink: "https://bangoli-bruse-kholifa.firebaseapp.com/",
      gitHubLink: "https://github.com/sazzadhossain1/-bangoli-burj-khalifa",
    },
    {
      id: 7,
      img: mrCode,
      technologyTitle: "Technology Used ",
      technologyName:
        "React || React-Router || Tailwind || Firebase || DaisyUI ",
      liveLink: "https://mr-code-930ae.web.app/home",
      gitHubLink: "https://github.com/sazzadhossain1/mr-code",
    },
    {
      id: 8,
      img: myPettu,
      technologyTitle: "Technology Used ",
      technologyName:
        "React || React-Router || Tailwind || Firebase || DaisyUI",
      liveLink: "https://my-pettu.web.app/home",
      gitHubLink: "https://github.com/sazzadhossain1/my-petty",
    },
    {
      id: 9,
      img: autoPartsPlace,
      technologyTitle: "Technology Used ",
      technologyName:
        "React || React-Router || Tailwind || Firebase || MongoDB || DaisyUI",
      liveLink: "https://auto-parts-place.web.app/",
      gitHubLink: "https://github.com/sazzadhossain1/auto-parts-place-client",
    },
    {
      id: 10,
      img: BIKEBANGLADESH,
      technologyTitle: "Technology Used ",
      technologyName:
        "React || React-Router || Bootstrap || Firebase || MongoDB||",
      liveLink: "https://bike-bangladesh.web.app/",
      gitHubLink: "https://github.com/sazzadhossain1/bike-bangladesh-1",
    },
    {
      id: 11,
      img: weddingPhotography,
      technologyTitle: "Technology Used ",
      technologyName:
        "React || React-Router || Bootstrap || Firebase || MongoDB",
      liveLink: "https://wedding-photography-c1317.firebaseapp.com/",
      gitHubLink: "https://github.com/sazzadhossain1/your-dream-photo-1",
    },
  ];

  const handleSectionChange = (section) => {
    setVisibleSection(section);
  };

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

        <div className="tab_parent_div">
          <div className="tab_second_parent_div">
            <div className="tab_button_div">
              <button onClick={() => handleSectionChange("react")}>
                React Js
              </button>
              <button onClick={() => handleSectionChange("javascript")}>
                Javascript
              </button>
              <button onClick={() => handleSectionChange("html")}>
                HTML & CSS
              </button>
            </div>
          </div>

          {visibleSection === "react" && (
            <div id="react_div" className="grid-cart-div">
              {allProjects.slice(0, 6).map((project) => (
                <div key={project.id} className="cart-body-div glass">
                  <figure>
                    <Link to={project.liveLink} target="_blank">
                      <img className="image-siz" src={project.img} alt="" />
                    </Link>
                  </figure>
                  <div className="card-body ">
                    <h2 className="text">{project.technologyTitle}</h2>
                    <p className="text-p">{project.technologyName}</p>

                    <button className="button">
                      <Link to={project.gitHubLink} target="_blank" alt="">
                        GitHub Link
                      </Link>
                    </button>
                  </div>
                </div>
              ))}

              <Link>
                <button>See All</button>
              </Link>
            </div>
          )}

          {visibleSection === "javascript" && (
            <div id="javascript_div" className="javascript_projects_parent_div">
              <img src={commingSoonOne} alt="" />
            </div>
          )}

          {visibleSection === "html" && (
            <div id="html_div" className="htmlCss_projects_parent_div">
              <img src={commingSoonTwo} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
