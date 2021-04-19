import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const BookingList = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-4">Booking list</div>
    </div>
  );
};

export default BookingList;
