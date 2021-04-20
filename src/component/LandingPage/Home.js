import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Chefs from "./Chefs/Chefs";
import Contact from "./Contact/Contact";
import HomeHeader from "./HomeHeader";
import Services from "./Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeHeader></HomeHeader>
      <Services></Services>
      <Chefs></Chefs>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
