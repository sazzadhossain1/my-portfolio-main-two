import React from "react";
import "./SignUp.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signUp-parent-div ">
      <Header></Header>
      <div className="p-10">
        <div className=" mx-auto signup-div p-5">
          <h1 className="sign-head">SignUp</h1>
          <h4 className="start-text">Get started with us today!</h4>
          <form className="card-body  mx-auto">
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <span className="input-left">Email</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className=" input-field"
                />
              </label>
            </div>
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <span className="input-left">Email</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className=" input-field"
                />
              </label>
            </div>
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <span className="input-left">Email</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className=" input-field"
                />
              </label>
            </div>
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <span className="input-left">Email</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className=" input-field"
                />
              </label>
            </div>

            <h1 style={{ color: "white" }} className="m-5">
              Already have an account?{" "}
              <Link style={{ color: "green" }} to="/login">
                Please login
              </Link>
            </h1>

            <div className="  sign-up-btn ">
              <button className="">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
