import React from "react";
import "../../styles/Header/header.css";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>
          <Link className=" animate-charcter" to="/">
            NOTCH HILL
          </Link>
        </h1>
      </div>
      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link className="noUnderline" to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="noUnderline" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="noUnderline" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default header;
