import React from "react";
import { Link } from "react-router-dom";
import header from "../../images/header.jpg";

const HomeHeader = () => {
  return (
    <div className="row bg-light">
      <div className="col-md-6 d-flex align-items-center justify-content-center ">
        <div>
          <h3>A high end service</h3>
          <p>A high end service from Kazi group</p>
          <Link to="/admin" className="btn btn-warning">
            Get a service
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img className="w-100 rounded img-fluid p-5" src={header} alt="" />
      </div>
    </div>
  );
};

export default HomeHeader;
