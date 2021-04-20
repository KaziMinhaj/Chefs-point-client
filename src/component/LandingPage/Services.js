import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("https://shielded-savannah-63633.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  return (
    <div className="text-center m-5">
      <h3>Discover the latest services available today</h3>
      <div className="row  d-flex justify-content-center ">
        {service.map((data) => (
          <Service data={data}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
