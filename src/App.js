import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Addservice from "./component/AdminPanel/AddService/AddService";
import AdminPanel from "./component/AdminPanel/AdminPanel/AdminPanel";
import BookingList from "./component/AdminPanel/BookingList/BookingList";
import MakeAdmin from "./component/AdminPanel/MakeAdmin/MakeAdmin";
import ManageService from "./component/AdminPanel/ManageService/ManageService";
import OrderList from "./component/AdminPanel/OrderList/OrderList";
import Review from "./component/AdminPanel/Review/Review";
import Home from "./component/LandingPage/Home";
import Login from "./component/Login/Login";
import PrivateRoute from "./component/Login/PrivateRoute";

//context api
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <AdminPanel />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <AdminPanel />
          </PrivateRoute>
          <PrivateRoute path="/book">
            <AdminPanel />
          </PrivateRoute>
          <PrivateRoute path="/bookinglist">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/orderlist">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/makeadmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageservice">
            <ManageService />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/addservice">
            <Addservice></Addservice>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
