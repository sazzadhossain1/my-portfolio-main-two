import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" p-10  text-base-content footer-div">
      <div className="mx-auto">
        <span className="footer-title">Services</span>
        <a className="link link-hover" href="0">
          Branding
        </a>
        <a className="link link-hover" href="0">
          Design
        </a>
        <a className="link link-hover" href="0">
          Marketing
        </a>
        <a className="link link-hover" href="0">
          Advertisement
        </a>
      </div>
      <div className="mx-auto">
        <span className="footer-title">Company</span>
        <a className="link link-hover" href="0">
          About us
        </a>
        <a className="link link-hover" href="0">
          Contact
        </a>
        <a className="link link-hover" href="0">
          Jobs
        </a>
        <a className="link link-hover " href="0">
          Press kit
        </a>
      </div>
      <div className="mx-auto">
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4 mt-6">
          <Link
            to="https://www.linkedin.com/in/dev-sazzad-hossain/"
            target="_blank"
          >
            <FaLinkedin
              style={{ height: "20px" }}
              className="fill-current"
            ></FaLinkedin>
          </Link>
          <Link
            to="https://www.youtube.com/@MrCode-ne5ru/featured"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <Link to="https://www.facebook.com/sazzad.tomal.7/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
