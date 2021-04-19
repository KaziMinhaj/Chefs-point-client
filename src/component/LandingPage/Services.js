import React from "react";
import service2 from "../../images/service2.jpg";
import service3 from "../../images/service3.jpg";
import service4 from "../../images/service4.jpg";
import Service from "./Service";
const dataArray = [
  {
    img: service2,
    des: "Learn Secret recipies",
  },
  {
    img: service3,
    des: "Video Tutorial",
  },
  {
    img: service4,
    des: "Hire a Chef",
  },
];

const Services = () => {
  return (
    <div className="text-center m-5">
      <h3>Discover the latest services available today</h3>
      <div className="row  d-flex justify-content-center ">
        {dataArray.map((data) => (
          <Service data={data}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
