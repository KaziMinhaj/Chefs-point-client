import React from "react";
import header from "../../images/header.jpg";

const HomeHeader = () => {
  return (
    <div className="row container-fluid bg-light">
      <div className="col-md-6 d-flex align-items-center justify-content-center ">
        <div>
          <h3>A high end service</h3>
          <p>A high end service from Kazi group</p>
          <button className="btn btn-warning">Get a service</button>
        </div>
      </div>
      <div className="col-md-6">
        <img className="w-100 img-fluid" src={header} alt="" />
      </div>
    </div>
  );
};

export default HomeHeader;
