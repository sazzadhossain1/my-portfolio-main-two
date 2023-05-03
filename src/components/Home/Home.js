import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Identity from "../Identity/Identity";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div className="home-parent-div">
      <Header></Header>
      <Identity></Identity>
      <Services></Services>
      <Projects></Projects>
      <About></About>
      <Skill></Skill>
    </div>
  );
};

export default Home;
