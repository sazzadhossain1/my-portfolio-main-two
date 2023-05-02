import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Identity from "../Identity/Identity";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="home-parent-div">
      <Header></Header>
      <Identity></Identity>
      <Services></Services>
    </div>
  );
};

export default Home;
