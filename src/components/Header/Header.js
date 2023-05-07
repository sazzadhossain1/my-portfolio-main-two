import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../Context/UserContext";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("user logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="header-parent-div ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 dower"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/practiceProblem">Practice Problem</Link>
              </li>
              <li tabIndex={0}>
                <Link className="" to="/login">
                  Login
                </Link>
              </li>
              <li tabIndex={0}>
                <Link className="" to="/signUp">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/home"
            className="name-text-style btn btn-ghost normal-case text-3xl"
          >
            Sazzad Hossain
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-style" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-style" to="/practiceProblem">
                Practice Problem
              </Link>
            </li>
            {user?.uid ? (
              <button onClick={handleLogOut} className="text-style">
                LogOut
              </button>
            ) : (
              <>
                <li>
                  <Link className="text-style" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="text-style" to="/signUp">
                    SignUp
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="https://www.youtube.com/" target="_blank" className="color">
            Go to YoutTube
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
