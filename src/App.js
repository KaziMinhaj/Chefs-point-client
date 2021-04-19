import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            <Home />
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
          <Route path="/book">
            <AdminPanel />
          </Route>
          <Route path="/bookinglist">
            <BookingList></BookingList>
          </Route>
          <Route path="/orderlist">
            <OrderList />
          </Route>
          <Route path="/makeadmin">
            <MakeAdmin />
          </Route>
          <Route path="/manageservice">
            <ManageService />
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/addservice">
            <Review></Review>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
