import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Orderlist = () => {
  return (
    <div className="row container-fluid">
      <div className="col-md-4">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8">Order list</div>
    </div>
  );
};

export default Orderlist;
