import React, { useContext, useState } from "react";
import "./Login.css";
import Header from "../Header/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        setError("");
        form.reset();

        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        setSuccess(false);
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
                  placeholder="Enter your Email"
                  className=" input-field"
                  required
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
                  placeholder="Enter your Password"
                  className=" input-field"
                  required
                />
              </label>
            </div>

            <h1 style={{ color: "white" }} className="m-5">
              New to this Site?{" "}
              <Link style={{ color: "green" }} to="/signup">
                Please SignUp
              </Link>
            </h1>
            {success && (
              <p style={{ color: "green" }}>User Login Successfully</p>
            )}
            <p style={{ color: "red" }}>{error}</p>
            <div className="  sign-up-btn ">
              <button className="">Login</button>
            </div>
          </form>
          <div className="  sign-up-btn ">
            <button className="">SignIn With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
