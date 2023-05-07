import React, { useContext } from "react";
import "./Login.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { FaNeos } from "react-icons/fa";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="signUp-parent-div login">
      <Header></Header>
      <div className="p-10">
        <div className=" mx-auto signup-div p-5">
          <h1 className="sign-head">Please Login</h1>
          <h4 className="start-text">Get started with us today!</h4>
          <form onSubmit={handleLogin} className="card-body  mx-auto">
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <span className="input-left">
                  <FaNeos></FaNeos>
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className=" input-field"
                />
              </label>
            </div>
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <span className="input-left">
                  <img
                    style={{ height: "20px" }}
                    src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png"
                    alt=""
                  />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="info@site.com"
                  className=" input-field"
                />
              </label>
            </div>
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input-group">
                <span className="input-left">
                  <img
                    style={{ height: "20px" }}
                    src="https://p7.hiclipart.com/preview/818/360/1007/computer-icons-password-login-user-padlock.jpg"
                    alt=""
                  />
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="info@site.com"
                  className=" input-field"
                />
              </label>
            </div>

            <h1 style={{ color: "white" }} className="m-5">
              Already have an account?{" "}
              <Link style={{ color: "green" }} to="/signup">
                Please SignUp
              </Link>
            </h1>

            <div className="  sign-up-btn ">
              <button className="">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
