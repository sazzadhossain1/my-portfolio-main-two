import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Identity from "../Identity/Identity";

const Home = () => {
  return (
    <div className="home-parent-div">
      <Header></Header>
      <Identity></Identity>
    </div>
  );
};

export default Home;
