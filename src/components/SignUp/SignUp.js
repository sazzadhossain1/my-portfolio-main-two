import React, { useContext, useState } from "react";
import "./SignUp.css";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { FaNeos } from "react-icons/fa";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const SignUp = () => {
  useTitle("SignUp");
  const {
    createUser,
    signInWithGoogle,
    updateUserProfile,
    verifyEmail,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(name, email, password, confirmPassword);

    // error handle //
    if (password !== confirmPassword) {
      setError("Password Not Match");
      return;
    }

    // user create //
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        setError("");
        setSuccess("User Created Successfully");
        form.reset();
        handleUpdateUserProfile(name);
        handleEmailVerification();

        toast.success("Please verify your Email");
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
        form.reset();
      });
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {
        console.log("Please verify your Email");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setError("");
        setSuccess("User Created Successfully");
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };

  const handleUpdateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then(() => {
        console.log("get the user name");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="signUp-parent-div ">
      <Header></Header>
      <div className="p-10">
        <div className=" mx-auto signup-div p-5">
          <h1 className="sign-head">SignUp</h1>
          <h4 className="start-text">Get started with us today!</h4>
          <form onSubmit={handleSubmit} className="card-body  mx-auto">
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
                  required
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
                  placeholder="Enter Your Email"
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
                  placeholder="Password"
                  className=" input-field"
                  required
                />
              </label>
            </div>
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <label className="input-group">
                <span className="input-left">
                  <img
                    style={{ height: "20px" }}
                    src="https://p7.hiclipart.com/preview/851/981/125/password-manager-computer-icons-password.jpg"
                    alt=""
                  />
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className=" input-field"
                  required
                />
              </label>
            </div>

            <h1 style={{ color: "white" }} className="m-5">
              Already have an account?{" "}
              <Link style={{ color: "green" }} to="/login">
                Please login
              </Link>
            </h1>
            <p style={{ color: "red" }}>{error}</p>
            <p style={{ color: "green" }}>{success}</p>
            <div className="  sign-up-btn ">
              <button className="">SignUp</button>
            </div>
          </form>
          <button onClick={handleGoogleSignIn} className="  sign-up-btn ">
            SignIn With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
