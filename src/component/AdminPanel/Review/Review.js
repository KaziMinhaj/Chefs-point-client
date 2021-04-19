import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Review = () => {
  return (
    <div className="row container-fluid">
      <div className="col-md-4">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8">Review</div>
    </div>
  );
};

export default Review;
