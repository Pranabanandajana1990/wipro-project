import React from "react";

const Calculate= () => {
  const generateTable = () => {
    const num = 5;
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return a.map((val, i) => {
      return (
        <tr key={i}>
          <td>
            {num} X {val} =
          </td>
          <td>{num * val}</td>
        </tr>
      );
    });
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Table</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </>
  );
}

export default Calculate;