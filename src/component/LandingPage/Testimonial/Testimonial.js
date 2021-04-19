import React from "react";
import Review from "./Review";

const data = [
  {
    name: "Nas ahmed",
    designation: "CEO, Nas Tech",
    description:
      "Ipsum anim incididunt voluptate sunt nostrud adipisicing veniam.",
  },
  {
    name: "Jhankar Mahmud",
    designation: "CEO, Pro. Hero",
    description:
      "Ipsum anim incididunt voluptate sunt nostrud adipisicing veniam.",
  },
  {
    name: "Mahmudul Shohag",
    designation: "CEO, Rokomari",
    description:
      "Ipsum anim incididunt voluptate sunt nostrud adipisicing veniam.",
  },
];

const Testimonial = () => {
  return (
    <div className="text-center bg-light">
      <div>
        <h1>Testimonial</h1>
      </div>
      <div className="row d-flex justify-content-center m-5">
        {data.map((x) => (
          <Review data={x}></Review>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
