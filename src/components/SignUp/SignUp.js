import React from "react";
import "./SignUp.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signUp-parent-div">
      <Header></Header>
      <div className="card lg:card-side bg-base-100 shadow-xl signup-div p-5">
        <figure className="figure">
          <img
            src="https://topper-business-solution.netlify.app/static/media/AboutSlider3.f72fecabe401e0676f25.png"
            alt="Album"
          />

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="confirm password"
                className="input input-bordered"
              />
            </div>

            <h1>
              Already have an account?
              <Link style={{ color: "green" }} to="/login">
                Please login
              </Link>
            </h1>

            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
        </figure>
      </div>
    </div>
  );
};

export default SignUp;
