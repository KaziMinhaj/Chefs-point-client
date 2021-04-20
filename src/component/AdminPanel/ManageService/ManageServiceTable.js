import React from "react";

const ManageServiceTable = ({ data }) => {
  const handleDelete = () => {
    const name = data.name;

    fetch("http://localhost:5000/deleteService/" + name)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <tr>
      <th scope="row">#</th>
      <td>{data.name}</td>
      <td>pending</td>
      <td>
        <button onClick={handleDelete} className="btn btn-danger">
          delete
        </button>
      </td>
    </tr>
  );
};

export default ManageServiceTable;
