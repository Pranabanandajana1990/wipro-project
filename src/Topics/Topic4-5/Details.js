import React from 'react'

const Details = ({ data }) => {

    function getStudentdetail() {
        return data.map((val, i) => {
            return (
                <tr key={i}>
                    <td>  {val.studentId}  </td>
                    <td>  {val.studentName}  </td>
                    <td>  {val.studentMarks}  </td>
                </tr>
            )
        })
    }

    return (
        
            <table className="students">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name </th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>{getStudentdetail()}</tbody>
            </table>
        
    )
}

export default Details;