import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container-fluid bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          ChefsPoint
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item  mr-5">
              <Link to="/home" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link active  ms-5">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active  ms-5">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active  ms-5">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link active  ms-5">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link active  ms-5">
                Login
                <FontAwesomeIcon icon={faSignInAlt} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
