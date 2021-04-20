import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bookingList/" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
      });
  }, [loggedInUser.email]);

  return (
    <div className="row">
      <div className="col-md-4">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8 p-5">
        <h1>Booking list</h1>
        <h3>User email: {loggedInUser.email}</h3>
        <h3>Order amount {list.length}</h3>
        {list.map((item) => (
          <li>{item.services}</li>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
