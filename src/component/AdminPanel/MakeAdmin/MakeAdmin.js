import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const MakeAdmin = () => {
  return (
    <div className="row container-fluid">
      <div className="col-md-4">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8">MakeAdmin</div>
    </div>
  );
};

export default MakeAdmin;
