import React from "react";

const service = ({ data }) => {
  return (
    <div className="card m-5 shadow " style={{ width: "18rem" }}>
      <img
        style={{ height: "200px" }}
        src={data.img}
        class="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h6 className="card-text">{data.des}</h6>
        <button className="btn btn-warning">Get a service</button>
      </div>
    </div>
  );
};

export default service;
