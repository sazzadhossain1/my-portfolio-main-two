import React from "react";
import Header from "../Header/Header";
import "./PracticeProblem.css";

const PracticeProblem = () => {
  return (
    <div className="practice-problem-parent-div">
      <Header></Header>
      <div className="photo-div">
        <h1> there is a lot of problems you can PracticeProblem</h1>
        <img
          className="coming-soon-photo"
          src="https://wallpaperaccess.com/full/2588788.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default PracticeProblem;
