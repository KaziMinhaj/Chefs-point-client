import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const ManageService = () => {
  return (
    <div className="row container-fluid">
      <div className="col-md-4">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8">ManageService</div>
    </div>
  );
};

export default ManageService;
