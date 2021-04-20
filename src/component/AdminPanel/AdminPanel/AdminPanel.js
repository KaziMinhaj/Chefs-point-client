import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Book from "../Book/Book";
import Orderlist from "../OrderList/OrderList";

const AdminPanel = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>{loggedInUser.isAdmin ? <Orderlist></Orderlist> : <Book></Book>}</div>
  );
};

export default AdminPanel;
