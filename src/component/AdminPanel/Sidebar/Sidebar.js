import {
  faCartPlus,
  faCommentDots,
  faHome,
  faList,
  faPlus,
  faTh,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div
      style={{ height: "700px", backgroundColor: "#A3E4D7" }}
      className=" container-fluid p-5 "
    >
      <nav>
        <ul className="navbar-nav">
          <li>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCartPlus} />
              <Link className="nav-link text-dark m-2 " to="/book">
                Book
              </Link>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faList} />
              <Link className="nav-link text-dark m-2" to="/bookinglist">
                Booking List
              </Link>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCommentDots} />
              <Link className="nav-link text-dark m-2" to="/review">
                Review
              </Link>
            </div>
          </li>

          <li>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faList} />
              <Link className="nav-link text-dark m-2" to="/orderlist">
                Order List
              </Link>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faPlus} />
              <Link className="nav-link text-dark m-2" to="/addservice">
                Add Service
              </Link>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faUserPlus} />
              <Link className="nav-link text-dark m-2" to="/makeadmin">
                Make Admin
              </Link>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faTh} />
              <Link className="nav-link text-dark m-2" to="/manageservice">
                Manage Service
              </Link>
            </div>
          </li>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <li>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faHome} />
              <Link className="nav-link text-dark m-2" to="/home">
                Return to Home
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
