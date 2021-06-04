import React from "react";
import "./styleTable.css";

const A2TableData= () => {
  return (
    <>
      <table className="tg">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Email ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pranab</td>
            <td>pranab@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Saurav</td>
            <td>saurav@example.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ananda</td>
            <td>ananda@example.com</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Dimple</td>
            <td>dimple@example.com</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ravina</td>
            <td>ravina@example.com</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default A2TableData;
