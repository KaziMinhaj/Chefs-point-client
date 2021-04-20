import React from "react";

const OrderTable = ({ data }) => {
  return (
    <tr>
      <th scope="row">#</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.services}</td>
      <td>pending</td>
    </tr>
  );
};

export default OrderTable;
