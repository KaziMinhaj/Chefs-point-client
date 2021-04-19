import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import ProcessPayment from "./ProcessPayment";

const Book = () => {
  const [order, setOrder] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setOrder(data);
  };

  const handlePayment = (id) => {
    const newInfo = { ...order };
    newInfo.paymentId = id;
    setOrder(newInfo);
  };

  return (
    <div className="row container-fluid bg-light">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-4 m-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control m-2"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
          <input
            className="form-control m-2"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <label className="p-2">Choose a car:</label>
          <select {...register("services", { required: true })}>
            <option className="dropdown-item" value="Hire chef">
              Hire chef
            </option>
            <option className="dropdown-item" value="Video tutorial">
              Video tutorial
            </option>
            <option className="dropdown-item" value="Learn Secret recipies">
              Learn Secret recipies
            </option>
          </select>

          <input className="btn btn-success m-2" type="submit" />
        </form>
        <br />
        <h6 className="m-2 p-2">Plaese Complete your payment</h6>
        <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
      </div>
    </div>
  );
};

export default Book;
